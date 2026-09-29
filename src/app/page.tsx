"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

// Loaded dynamically — Matter.js is browser-only
const StickerPhysics = dynamic(() => import("@/components/StickerPhysics"), {
  ssr: false,
});

import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { getLocalizedProjects } from "@/data/projectsI18n";
import { Project } from "@/types/project";

/* ─── Fade-up animation variant ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [isOnline, setIsOnline] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const allLocalized = getLocalizedProjects(language);
  const featuredIds = ["five-stars", "salvatge-energy", "book-magazine"];
  const featuredProjects = featuredIds
    .map((id) => allLocalized.find((p) => p.id === id))
    .filter(Boolean) as Project[];

  useEffect(() => {
    // Starts in gray and turns into glowing intense green after 1.8s
    const timer = setTimeout(() => {
      setIsOnline(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO — Sticker physics + animated headline
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full h-[90vh] sm:h-[91vh] lg:h-[92vh] min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 border-b border-neutral-100 overflow-hidden"
        style={{ background: "#f8f8f8" }}
      >
        {/* Physics sticker playground — sits behind text */}
        <StickerPhysics />

        {/* Text content — above stickers */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center space-y-7 relative z-20 pointer-events-none"
        >
          {/* Spaced-letter name */}
          <h1
            className="font-alinsa text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[15.5rem]
                       tracking-tight uppercase leading-none select-none text-neutral-950
                       drop-shadow-[0_4px_24px_rgba(255,255,255,0.9)]
                       [text-shadow:_0_2px_16px_rgba(255,255,255,1),_0_6px_32px_rgba(255,255,255,0.85),_0_12px_24px_rgba(0,0,0,0.07)]"
          >
            INDY
          </h1>

          {/* Tagline — continuous text without enters */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 font-normal max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 select-none"
          >
            {t.home.tagline}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 pointer-events-auto pt-2 select-none"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 bg-neutral-950 text-white text-sm font-semibold
                         px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors select-none"
            >
              {t.home.viewProjects} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-neutral-300 text-neutral-700 text-sm font-semibold
                         px-6 py-3 rounded-full hover:border-neutral-500 hover:text-neutral-900 transition-colors bg-white/70 backdrop-blur-sm select-none"
            >
              {t.home.getInTouch}
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Left Role Description (Satoshi) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 lg:left-12 z-20 pointer-events-auto select-none"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-200/80 bg-white/80 backdrop-blur-md shadow-sm select-none">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span
                className={`w-2 h-2 rounded-full transition-all duration-700 ease-out ${
                  isOnline
                    ? "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.45)]"
                    : "bg-neutral-300"
                }`}
              />
            </div>
            <p className="font-sans text-xs sm:text-sm font-medium text-neutral-700 tracking-tight select-none">
              {t.home.rolePill}
            </p>
          </div>
        </motion.div>

        {/* Subtle bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/60 to-transparent pointer-events-none z-10" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. FEATURED PROJECTS — 1×3 vertical stack (Viewport Peek)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-8">
        {/* Section header — visible by default so it peeks above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end justify-between mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-neutral-950 leading-none">
            {t.home.projectsHeading}
          </h2>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            {t.home.viewAll}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Project cards — vertical stack with full-width images */}
        <div className="flex flex-col gap-14 sm:gap-20">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
            >
              <Link href={`/projects/${project.id}`} className="group block space-y-4">
                {/* Full-width Image with integrated Arrow */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1] rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                  {/* Clean circular arrow button inside image */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-neutral-900 group-hover:bg-white group-hover:scale-110 shadow-sm transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Row: Title on Left, Subtle Neutral Tags on Right */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                    <span className="relative inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      {/* Base text */}
                      <span className="text-neutral-950 transition-opacity duration-300 group-hover:opacity-0">
                        {project.title}
                      </span>
                      {/* Pink-to-red gradient on hover (from Let's Have a Conversation) */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-[#FF1E8A] via-[#E60039] via-[#FF4580] to-[#C8102E] bg-[length:200%_auto] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-gradient-shift drop-shadow-[0_2px_12px_rgba(230,0,57,0.22)] select-none pointer-events-none"
                      >
                        {project.title}
                      </span>
                    </span>
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[0.7rem] sm:text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-neutral-200/90 bg-neutral-50/90 text-neutral-600 hover:border-neutral-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. DISCIPLINES — Graphic Design · Video · UX/UI
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mb-14 sm:mb-18 md:mb-20"
        >
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-neutral-950 leading-none">
            {t.home.disciplinesHeading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {t.home.disciplines.map((d, i) => (
            <motion.div
              key={d.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={i}
              variants={fadeUp}
            >
              <Link href={`/projects?category=${d.slug}`} className="group block h-full">
                <div
                  className="h-full rounded-2xl border bg-neutral-50/60 hover:bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.04)]"
                  style={{
                    borderColor: "rgba(229,229,229,0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = d.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229,229,229,0.8)";
                  }}
                >
                  {/* Top: emoji glyph + label */}
                  <div className="space-y-5">
                    <span
                      className="text-2xl transition-colors select-none leading-none block"
                      style={{ color: d.color }}
                      aria-hidden
                    >
                      {d.emoji}
                    </span>
                    <h3 className="font-sans font-bold uppercase tracking-wider text-lg sm:text-xl text-neutral-950">
                      {d.label}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {d.description}
                    </p>
                  </div>

                  {/* Bottom: browse link */}
                  <div className="pt-8">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-neutral-400 transition-colors"
                      style={{}}
                    >
                      <span className="group-hover:hidden">{t.home.browseWorks}</span>
                      <span className="hidden group-hover:inline" style={{ color: d.color }}>{t.home.browseWorks}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. EXPERIENCE — Brief timeline
      ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="flex items-end justify-between mb-14 sm:mb-18 md:mb-20"
        >
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-neutral-950 leading-none">
            {t.home.experienceHeading}
          </h2>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            {t.home.fullBio}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <ul className="flex flex-col gap-8 sm:gap-10">
          {t.home.experience.map((exp, i) => (
            <motion.li
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={i}
              variants={fadeUp}
              className="flex items-baseline justify-between gap-4 sm:gap-6 group"
            >
              {/* Role & Company on Left */}
              <div className="space-y-1 min-w-0 pr-2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-950 tracking-tight leading-snug">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal">
                  {exp.company}
                  <span className="text-neutral-300 mx-1.5">·</span>
                  {exp.location}
                </p>
              </div>

              {/* Period & Duration on Right */}
              <div className="text-right shrink-0 space-y-0.5">
                <span className="text-xs sm:text-sm md:text-base font-semibold block text-neutral-950">
                  {exp.period}
                </span>
                <span className="text-[0.7rem] sm:text-xs text-neutral-400 font-medium block">
                  {exp.duration}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

    </div>
  );
}
