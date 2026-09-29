"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    window.addEventListener("resize", resize);
    resize();

    // Exact Brand Palette: Deep Wine, Crimson, Fuchsia & Bright Rose
    const brandColors = [
      { r: 95, g: 5, b: 5 },       // #5F0505 (Deep Wine)
      { r: 132, g: 20, b: 44 },    // #84142C (Crimson)
      { r: 161, g: 27, b: 110 },   // #A11B6E (Fuchsia)
      { r: 217, g: 43, b: 136 },   // #D92B88 (Bright Rose)
    ];

    const render = () => {
      time += 0.0035;

      const w = canvas.width;
      const h = canvas.height;

      // Base White Canvas
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      // Liquid Fluid Mesh Wave Points
      const blobs = [
        {
          x: w * 0.35 + Math.sin(time * 0.9) * w * 0.3,
          y: h * 0.35 + Math.cos(time * 0.7) * h * 0.25,
          radius: Math.min(w, h) * 0.5 + Math.sin(time * 1.2) * 80,
          color: brandColors[1], // #84142C
          alpha: 0.6,
        },
        {
          x: w * 0.65 + Math.cos(time * 0.8) * w * 0.3,
          y: h * 0.45 + Math.sin(time * 1.1) * h * 0.3,
          radius: Math.min(w, h) * 0.55 + Math.cos(time * 0.9) * 90,
          color: brandColors[2], // #A11B6E
          alpha: 0.65,
        },
        {
          x: w * 0.5 + Math.sin(time * 1.3) * w * 0.25,
          y: h * 0.7 + Math.cos(time * 0.9) * h * 0.25,
          radius: Math.min(w, h) * 0.45 + Math.sin(time * 0.8) * 70,
          color: brandColors[0], // #5F0505
          alpha: 0.5,
        },
        {
          x: w * 0.2 + Math.cos(time * 1.1) * w * 0.2,
          y: h * 0.65 + Math.sin(time * 0.6) * h * 0.2,
          radius: Math.min(w, h) * 0.4 + Math.cos(time * 1.4) * 60,
          color: brandColors[3], // #D92B88
          alpha: 0.55,
        },
      ];

      // Draw Blended Fluid Blobs
      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        const { r, g, b } = blob.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${blob.alpha})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${blob.alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-white text-neutral-900 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* 60FPS Fluid Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none filter blur-[75px] opacity-85 transform scale-110"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
