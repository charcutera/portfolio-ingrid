"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import {
  FigmaIcon,
  AfterEffectsIcon,
  IllustratorIcon,
  PhotoshopIcon,
  DaVinciIcon,
  FramerIcon,
  BlenderIcon,
  FrontendIcon,
} from "@/components/ui/software-icons";

const TOOL_ICONS: Record<string, React.ReactNode> = {
  Figma: <FigmaIcon className="w-7 h-7" />,
  "Adobe After Effects": <AfterEffectsIcon className="w-7 h-7" />,
  Frontend: <FrontendIcon className="w-7 h-7" />,
  "Adobe Illustrator": <IllustratorIcon className="w-7 h-7" />,
  "Adobe Photoshop": <PhotoshopIcon className="w-7 h-7" />,
  "DaVinci Resolve": <DaVinciIcon className="w-7 h-7" />,
  "Cinema 4D & Blender": <BlenderIcon className="w-7 h-7" />,
  "Cinema 4D y Blender": <BlenderIcon className="w-7 h-7" />,
  "Cinema 4D i Blender": <BlenderIcon className="w-7 h-7" />,
  "Framer / Webflow": <FramerIcon className="w-7 h-7 text-neutral-900" />,
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <div className="w-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-[#E6007A] selection:text-white">
      {/* 1. Hero Header — Full-width immersive image with Ingrid centered */}
      <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] min-h-[520px] max-h-[850px] overflow-hidden bg-neutral-950 border-b border-neutral-100">
        {/* Background Image — Full bleed */}
        <Image
          src="/about_me_header.png"
          alt="Ingrid Lara"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none z-10" />

        {/* Content Overlaid at Bottom */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8"
            >
              {/* Bottom Left — Title */}
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/80 block">
                  Ingrid Lara
                </span>
                <h1 className="font-alinsa text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] text-white uppercase tracking-tight leading-[0.85] select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                  {t.about.heroTitle}
                </h1>
              </div>

              {/* Bottom Right — Definition */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-normal max-w-lg leading-relaxed drop-shadow-md text-left md:text-right pb-1 sm:pb-2">
                {t.about.heroSubtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Main About Content - Professional Experience (30% Viewport Peek) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-20 sm:pb-28 space-y-24 sm:space-y-32 w-full bg-white relative z-10">
        
        {/* Category 1: Professional Experience */}
        <section className="space-y-10 sm:space-y-12">
          <h2 className="font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight border-b border-neutral-200 pb-4">
            {t.about.experienceHeading}
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {t.about.experiences.map((exp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-5 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-base text-neutral-600 font-normal">
                    {exp.company}
                  </p>
                  <p className="text-sm font-medium text-neutral-500 pt-1">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-7 md:pl-6 lg:pl-10">
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2: Studies & Education */}
        <section className="space-y-10 sm:space-y-12">
          <h2 className="font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight border-b border-neutral-200 pb-4">
            {t.about.educationHeading}
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {t.about.education.map((edu, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-5 space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-neutral-600 font-normal">
                    {edu.institution}
                  </p>
                  <p className="text-sm font-medium text-neutral-500 pt-1">
                    {edu.isCurrent ? (
                      <>
                        {edu.period.split("—")[0]}—{" "}
                        <span className="text-[#E6007A] font-bold">
                          {edu.period.split("—")[1]?.trim()}
                        </span>
                      </>
                    ) : (
                      edu.period
                    )}
                  </p>
                </div>
                <div className="md:col-span-7 md:pl-6 lg:pl-10">
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Awards */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="md:col-span-5 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                  {t.about.award.title}
                </h3>
                <p className="text-base text-neutral-600 font-normal">
                  {t.about.award.level}
                </p>
                <p className="text-sm font-medium text-neutral-500 pt-1">
                  {t.about.award.period}
                </p>
              </div>
              <div className="md:col-span-7 md:pl-6 lg:pl-10">
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-xl">
                  {t.about.award.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 3: Creative Toolkit (Software Logo Grid) */}
        <section className="space-y-10 sm:space-y-12">
          <h2 className="font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight border-b border-neutral-200 pb-4">
            {t.about.toolsHeading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.tools.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200/70 flex flex-col justify-between space-y-4 hover:border-[#E6007A]/50 hover:bg-white hover:shadow-[0_4px_20px_rgba(230,0,122,0.1)] transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-lg transition-transform duration-200 group-hover:scale-110">
                    {TOOL_ICONS[item.tool] ?? <FrontendIcon className="w-7 h-7" />}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-[#E6007A] transition-colors">
                    {item.tool}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
