"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

/* ─── Sticker definitions ────────────────────────────────────────────────── */
const STICKER_TYPES = [
  { src: "/stickers/arctic.png",   w: 180, h: 180, label: "arctic"  },
  { src: "/stickers/camera.png",   w: 175, h: 175, label: "camera"  },
  { src: "/stickers/batman.png",   w: 175, h: 175, label: "batman"  },
  { src: "/stickers/gengar1.png",  w: 170, h: 170, label: "gengar"  },
  { src: "/stickers/tulipa2.png",  w: 180, h: 180, label: "tulipa"  },
];

// Desktop: 15 instances (3 of each: arctic, camera, batman, gengar, tulipa)
const DESKTOP_STICKERS = [
  { ...STICKER_TYPES[0], id: "arctic-0" },
  { ...STICKER_TYPES[0], id: "arctic-1" },
  { ...STICKER_TYPES[0], id: "arctic-2" },
  { ...STICKER_TYPES[1], id: "camera-0" },
  { ...STICKER_TYPES[1], id: "camera-1" },
  { ...STICKER_TYPES[1], id: "camera-2" },
  { ...STICKER_TYPES[2], id: "batman-0" },
  { ...STICKER_TYPES[2], id: "batman-1" },
  { ...STICKER_TYPES[2], id: "batman-2" },
  { ...STICKER_TYPES[3], id: "gengar-0" },
  { ...STICKER_TYPES[3], id: "gengar-1" },
  { ...STICKER_TYPES[3], id: "gengar-2" },
  { ...STICKER_TYPES[4], id: "tulipa-0" },
  { ...STICKER_TYPES[4], id: "tulipa-1" },
  { ...STICKER_TYPES[4], id: "tulipa-2" },
];

// Mobile: 8 instances (balanced across all 5 types)
const MOBILE_STICKERS = [
  { ...STICKER_TYPES[0], id: "m-arctic-0" },
  { ...STICKER_TYPES[0], id: "m-arctic-1" },
  { ...STICKER_TYPES[1], id: "m-camera-0" },
  { ...STICKER_TYPES[1], id: "m-camera-1" },
  { ...STICKER_TYPES[2], id: "m-batman-0" },
  { ...STICKER_TYPES[2], id: "m-batman-1" },
  { ...STICKER_TYPES[3], id: "m-gengar-0" },
  { ...STICKER_TYPES[4], id: "m-tulipa-0" },
];

interface BodyState { x: number; y: number; angle: number }
interface StickerItem { src: string; w: number; h: number; label: string; id: string }

export default function StickerPhysics() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const engineRef     = useRef<unknown>(null);
  const runnerRef     = useRef<unknown>(null);
  const bodiesRef     = useRef<{ position: { x: number; y: number }; angle: number }[]>([]);
  const rafRef        = useRef<number>(0);
  const lastWidthRef  = useRef<number>(0);

  const [stickers, setStickers] = useState<StickerItem[]>(DESKTOP_STICKERS);
  const [positions, setPositions] = useState<BodyState[]>(
    DESKTOP_STICKERS.map(() => ({ x: 0, y: 0, angle: 0 }))
  );
  const [ready, setReady] = useState(false);
  const [isHoveringSticker, setIsHoveringSticker] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  /* ─── Physics initialisation ─────────────────────────────────────────── */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let stopped = false;

    const cleanup = async () => {
      cancelAnimationFrame(rafRef.current);
      try {
        if (runnerRef.current) {
          const { Runner } = await import("matter-js");
          if (runnerRef.current) {
            Runner.stop(runnerRef.current as Parameters<typeof Runner.stop>[0]);
          }
          runnerRef.current = null;
        }
        if (engineRef.current) {
          const { Engine, Composite } = await import("matter-js");
          const engine = engineRef.current as Parameters<typeof Engine.clear>[0];
          if (engine) {
            Composite.clear((engine as unknown as { world: unknown }).world as Parameters<typeof Composite.clear>[0], false);
            Engine.clear(engine);
          }
          engineRef.current = null;
        }
      } catch {
        // Ignore unmount race condition
      }
      bodiesRef.current = [];
    };

    const init = async () => {
      await cleanup();
      if (stopped || !containerRef.current) return;

      const Matter = await import("matter-js");
      if (stopped) return;

      const {
        Engine, Runner, Bodies, Body,
        Composite, Mouse, MouseConstraint, Events,
      } = Matter;

      const W = containerRef.current.offsetWidth || window.innerWidth;
      const H = containerRef.current.offsetHeight || window.innerHeight;
      lastWidthRef.current = W;

      const isMobile = W < 640;
      // Scale down stickers on mobile so they fit and float comfortably
      const scale = isMobile ? (W < 400 ? 0.54 : 0.62) : 1;
      const activeStickers: StickerItem[] = (isMobile ? MOBILE_STICKERS : DESKTOP_STICKERS).map((s) => ({
        ...s,
        w: Math.round(s.w * scale),
        h: Math.round(s.h * scale),
      }));

      setStickers(activeStickers);
      setPositions(activeStickers.map(() => ({ x: -999, y: -999, angle: 0 })));

      /* ── Engine: NO gravity (top-down table view) ── */
      const engine = Engine.create({ gravity: { x: 0, y: 0 } });
      engineRef.current = engine;

      /* ── Thick Walls to prevent tunneling ── */
      const T = 200; // Extra thick walls so fast stickers cannot jump over
      const walls = [
        Bodies.rectangle(W / 2, -T / 2,      W * 3, T,     { isStatic: true, restitution: 0.6, friction: 0.1 }),
        Bodies.rectangle(W / 2, H + T / 2,   W * 3, T,     { isStatic: true, restitution: 0.6, friction: 0.1 }),
        Bodies.rectangle(-T / 2, H / 2,      T, H * 3,     { isStatic: true, restitution: 0.6, friction: 0.1 }),
        Bodies.rectangle(W + T / 2, H / 2,   T, H * 3,     { isStatic: true, restitution: 0.6, friction: 0.1 }),
      ];

      /* ── Place stickers in a loose jittered grid ── */
      const cols = isMobile ? 2 : 5;
      const rows = isMobile ? 4 : 3;
      const cellW = W / cols;
      const cellH = H / rows;

      // Randomize cell assignments so sticker types are scattered randomly
      const cellIndices = Array.from({ length: activeStickers.length }, (_, i) => i);
      for (let i = cellIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cellIndices[i], cellIndices[j]] = [cellIndices[j], cellIndices[i]];
      }

      const stickerBodies = activeStickers.map((s, i) => {
        const slot = cellIndices[i];
        const col = slot % cols;
        const row = Math.floor(slot / cols);

        // Centre of cell + small bounded jitter
        const jitterX = (Math.random() - 0.5) * cellW * 0.35;
        const jitterY = (Math.random() - 0.5) * cellH * 0.35;
        const radius = Math.min(s.w, s.h) * 0.44;

        const startX = Math.max(radius + 10, Math.min(W - radius - 10, cellW * (col + 0.5) + jitterX));
        const startY = Math.max(radius + 10, Math.min(H - radius - 10, cellH * (row + 0.5) + jitterY));

        // Random initial angle
        const startAngle = (Math.random() - 0.5) * Math.PI * 0.5;

        return Bodies.circle(
          startX, startY,
          radius,
          {
            restitution: 0.6,
            friction: 0.05,
            frictionAir: isMobile ? 0.05 : 0.04,
            angle: startAngle,
            label: s.id,
          }
        );
      });

      Composite.add(engine.world, [...walls, ...stickerBodies]);
      bodiesRef.current = stickerBodies as typeof bodiesRef.current;

      /* ── Continuous subtle ambient floating motion + strict boundary clamping ── */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Events.on(engine, "beforeUpdate", (e: any) => {
        const time = e.timestamp || performance.now();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stickerBodies.forEach((body: any, i: number) => {
          const s = activeStickers[i];
          if (!s) return;

          // Gentle organic harmonic drift in x & y
          const forceMag = isMobile ? 0.00015 : 0.00035;
          const fx = Math.sin(time * 0.0011 + i * 1.6) * forceMag;
          const fy = Math.cos(time * 0.0013 + i * 2.1) * forceMag;
          Body.applyForce(body, body.position, { x: fx, y: fy });

          // Subtle rotational sway
          const torque = Math.sin(time * 0.0009 + i * 1.1) * (isMobile ? 0.00003 : 0.00008);
          Body.applyForce(body, { x: body.position.x + 15, y: body.position.y }, { x: 0, y: torque });

          // Hard safety bounds: ensure stickers NEVER drift or bounce outside the viewport
          const r = Math.min(s.w, s.h) * 0.44;
          if (body.position.x < r) {
            Body.setPosition(body, { x: r, y: body.position.y });
            Body.setVelocity(body, { x: Math.abs(body.velocity.x) * 0.4, y: body.velocity.y });
          } else if (body.position.x > W - r) {
            Body.setPosition(body, { x: W - r, y: body.position.y });
            Body.setVelocity(body, { x: -Math.abs(body.velocity.x) * 0.4, y: body.velocity.y });
          }
          if (body.position.y < r) {
            Body.setPosition(body, { x: body.position.x, y: r });
            Body.setVelocity(body, { x: body.velocity.x, y: Math.abs(body.velocity.y) * 0.4 });
          } else if (body.position.y > H - r) {
            Body.setPosition(body, { x: body.position.x, y: H - r });
            Body.setVelocity(body, { x: body.velocity.x, y: -Math.abs(body.velocity.y) * 0.4 });
          }
        });
      });

      /* ── Mouse constraint (drag & touch) ── */
      const mouse = Mouse.create(containerRef.current);
      const noop = () => {};
      mouse.element.removeEventListener("mousewheel", (mouse as unknown as Record<string, EventListener>)["_mousewheel"] ?? noop);
      mouse.element.removeEventListener("DOMMouseScroll", (mouse as unknown as Record<string, EventListener>)["_mousewheel"] ?? noop);

      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.18, damping: 0.12, render: { visible: false } },
      });
      Composite.add(engine.world, mc);

      // Drag state listeners for cursor feedback
      Events.on(mc, "startdrag", () => setIsDragging(true));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Events.on(mc, "enddrag", (e: any) => {
        setIsDragging(false);
        const body = e.body;
        if (!body) return;
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
      });

      /* ── Runner & rAF sync ── */
      const runner = Runner.create();
      runnerRef.current = runner;
      Runner.run(runner, engine);

      setReady(true);

      const tick = () => {
        if (stopped) return;
        setPositions(
          stickerBodies.map((b) => ({
            x: b.position.x,
            y: b.position.y,
            angle: b.angle,
          }))
        );
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    init();

    // Re-initialize cleanly when viewport width changes (e.g. mobile rotate or DevTools resize)
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!containerRef.current) return;
        const currentW = containerRef.current.offsetWidth;
        const wasMobile = lastWidthRef.current < 640;
        const isNowMobile = currentW < 640;
        if (wasMobile !== isNowMobile || Math.abs(currentW - lastWidthRef.current) > 80) {
          init();
        }
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      stopped = true;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      cleanup();
    };
  }, []);

  /* ─── Hover repulsion + Cursor feedback ────────────────────────────────── */
  const handleMouseMove = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || bodiesRef.current.length === 0) return;
    const { Body } = await import("matter-js");
    const rect = containerRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let nearAny = false;

    bodiesRef.current.forEach((body) => {
      const dx = body.position.x - mx;
      const dy = body.position.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 100) {
        nearAny = true;
      }

      const RADIUS = 140;
      if (dist < RADIUS && dist > 1) {
        const force = ((RADIUS - dist) / RADIUS) * 0.003;
        Body.applyForce(
          body as Parameters<typeof Body.applyForce>[0],
          body.position as Parameters<typeof Body.applyForce>[1],
          { x: (dx / dist) * force, y: (dy / dist) * force }
        );
      }
    });

    setIsHoveringSticker(nearAny);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden select-none touch-none"
      style={{
        cursor: isDragging ? "grabbing" : isHoveringSticker ? "grab" : "default",
      }}
    >
      {ready &&
        stickers.map((s, i) => {
          const pos = positions[i];
          if (!pos || pos.x === -999) return null;

          return (
            <div
              key={s.id}
              className="absolute pointer-events-none select-none transition-shadow"
              style={{
                left:      pos.x - s.w / 2,
                top:       pos.y - s.h / 2,
                width:     s.w,
                height:    s.h,
                transform: `rotate(${pos.angle}rad)`,
                willChange: "transform, left, top",
                filter:    isHoveringSticker
                  ? "drop-shadow(0 8px 22px rgba(0,0,0,0.15))"
                  : "drop-shadow(0 5px 15px rgba(0,0,0,0.10))",
              }}
            >
              {/* Subtle breathing scale to communicate liveliness & interactivity */}
              <div
                className="w-full h-full"
                style={{
                  animation: `stickerPulse 4.5s ease-in-out infinite ${(i * 0.35).toFixed(2)}s`,
                }}
              >
                <Image
                  src={s.src}
                  alt={s.label}
                  width={s.w}
                  height={s.h}
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          );
        })}
      {/* Transparent overlay so mouse & touch events reach Matter even over the images */}
      <div className="absolute inset-0 z-10" />
    </div>
  );
}
