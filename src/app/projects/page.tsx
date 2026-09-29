"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SAMPLE_PHOTOGRAPHY } from "@/data/photography";
import PhotographyGrid from "@/components/PhotographyGrid";
import { CategoryType } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { getLocalizedProjects } from "@/data/projectsI18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function ProjectsList() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("category") as CategoryType | null;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const allProjects = getLocalizedProjects(language);

  const [activeCategory, setActiveCategory] = useState<CategoryType>(
    catParam && ["ux-ui", "graphic-design", "video"].includes(catParam) ? catParam : "all"
  );

  useEffect(() => {
    if (catParam && ["ux-ui", "graphic-design", "video"].includes(catParam)) {
      setActiveCategory(catParam);
    }
  }, [catParam]);

  const categoryLabels: Record<CategoryType, string> = {
    all: t.projectsPage.tabAll,
    "ux-ui": t.projectsPage.tabUxUi,
    "graphic-design": t.projectsPage.tabGraphicDesign,
    video: t.projectsPage.tabVideo,
  };

  const categoryTabs: {
    key: CategoryType;
    label: string;
    badge: string;
    color: string;
    textColor: string;
    bgLight: string;
    badgeBg: string;
  }[] = [
    {
      key: "all",
      label: t.projectsPage.tabAll,
      badge: t.projectsPage.badgeOverview,
      color: "#171717",
      textColor: "#171717",
      bgLight: "rgba(23, 23, 23, 0.05)",
      badgeBg: "rgba(23, 23, 23, 0.08)",
    },
    {
      key: "ux-ui",
      label: t.projectsPage.tabUxUi,
      badge: t.projectsPage.badgeUxUi,
      color: "#7C3AED",
      textColor: "#6D28D9",
      bgLight: "rgba(124, 58, 237, 0.07)",
      badgeBg: "rgba(124, 58, 237, 0.12)",
    },
    {
      key: "graphic-design",
      label: t.projectsPage.tabGraphicDesign,
      badge: t.projectsPage.badgeGraphicDesign,
      color: "#D946EF",
      textColor: "#C026D3",
      bgLight: "rgba(217, 70, 239, 0.07)",
      badgeBg: "rgba(217, 70, 239, 0.12)",
    },
    {
      key: "video",
      label: t.projectsPage.tabVideo,
      badge: t.projectsPage.badgeVideo,
      color: "#BE123C",
      textColor: "#BE123C",
      bgLight: "rgba(190, 18, 60, 0.07)",
      badgeBg: "rgba(190, 18, 60, 0.12)",
    },
  ];

  const categoryDescriptions: Record<CategoryType, string> = {
    all: t.projectsPage.descriptionAll,
    "ux-ui": t.projectsPage.descriptionUxUi,
    "graphic-design": t.projectsPage.descriptionGraphicDesign,
    video: t.projectsPage.descriptionVideo,
  };

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-36 pb-28 w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-900" />
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-400">
              {t.projectsPage.eyebrow}
            </p>
          </div>

          <h1 className="font-alinsa text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-neutral-950 leading-none">
            {t.projectsPage.title}
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal max-w-3xl leading-relaxed pt-1"
            >
              {categoryDescriptions[activeCategory]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-14 sm:mb-18 pb-6 border-b border-neutral-100">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className="group relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-2 border"
                style={{
                  backgroundColor: isActive ? tab.bgLight : "#FAFAFA",
                  borderColor: isActive ? tab.color : "rgba(229, 229, 229, 0.85)",
                  color: isActive ? tab.textColor : "#525252",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = tab.color;
                    e.currentTarget.style.color = tab.textColor;
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(229, 229, 229, 0.85)";
                    e.currentTarget.style.color = "#525252";
                    e.currentTarget.style.backgroundColor = "#FAFAFA";
                  }
                }}
              >
                <span className="transition-colors">{tab.label}</span>
                <span
                  className="text-[0.65rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: isActive ? tab.badgeBg : "rgba(229, 229, 229, 0.7)",
                    color: isActive ? tab.textColor : "#525252",
                  }}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Content */}
        {activeCategory === "video" ? (
          <div className="space-y-20 sm:space-y-28">
            {/* ── 1. Video Subsection ── */}
            <section className="space-y-8 sm:space-y-10">
              <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                {t.projectsPage.videoSubsection}
              </h2>

              {/* Video Grid 2x1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {filteredProjects.map((project, i) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 20 }}
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

                      {/* Info: Title & Tags */}
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
            </section>

            {/* ── 2. Photography Subsection ── */}
            <section className="space-y-8 sm:space-y-10">
              <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                {t.projectsPage.photographySubsection}
              </h2>

              {/* Photography Masonry Grid */}
              <PhotographyGrid photos={SAMPLE_PHOTOGRAPHY} />
            </section>
          </div>
        ) : (
          /* Standard 2x1 Grid for All Works, UX/UI, Graphic Design */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
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

                      {/* Circular hover action button */}
                      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-neutral-900 group-hover:bg-white group-hover:scale-110 shadow-sm transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>

                      {/* Top-left category tag badge */}
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider">
                        {categoryLabels[project.category] ?? project.category}
                      </div>
                    </div>

                    {/* Info: Title & Tags */}
                    <div className="space-y-2 pt-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-neutral-600 transition-colors">
                        {project.title}
                      </h2>
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
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen bg-white flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProjectsList />
    </Suspense>
  );
}
