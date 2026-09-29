"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { getLocalizedProjects } from "@/data/projectsI18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function GraphicDesignPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const projects = getLocalizedProjects(language).filter((p) => p.category === "graphic-design");

  return (
    <div className="w-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-36 pb-28 w-full">
        {/* Breadcrumb & Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.projectsPage.backToAll}
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-16 space-y-4 border-b border-neutral-100 pb-10">
          <h1 className="font-alinsa text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-neutral-950 leading-none">
            {t.projectsPage.tabGraphicDesign}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal max-w-2xl leading-relaxed">
            {t.projectsPage.descriptionGraphicDesign}
          </p>
        </div>

        {/* Projects Grid — 2x1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
            >
              <Link href={`/projects/${project.id}`} className="group block space-y-4">
                {/* Image Card */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/70">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-neutral-900 group-hover:bg-white group-hover:scale-110 shadow-sm transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-normal leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[0.65rem] sm:text-xs font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full border border-neutral-200/90 bg-neutral-50/90 text-neutral-600 hover:border-neutral-300 transition-colors"
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
      </div>
    </div>
  );
}
