"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { SAMPLE_PROJECTS } from "@/data/projects";
import { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { getLocalizedProject, getLocalizedProjects } from "@/data/projectsI18n";

const MagazineViewer = dynamic(() => import("@/components/MagazineViewer"), {
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-neutral-950 rounded-3xl border border-neutral-800 text-neutral-500 text-xs font-mono uppercase tracking-wider animate-pulse">
      Loading magazine...
    </div>
  ),
  ssr: false,
});

/* ─── Animation variants ──────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ─── Section label component ─────────────────────────────────────────────── */
function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neutral-400 tabular-nums">
        {number}
      </span>
      <span className="h-px flex-1 max-w-[2rem] bg-neutral-200" />
      <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neutral-400">
        {label}
      </span>
    </div>
  );
}

/* ─── Image gallery component ─────────────────────────────────────────────── */
function MediaGallery({ assets }: { assets: NonNullable<Project["mediaAssets"]> }) {
  if (!assets?.length) return null;
  return (
    <div className={`grid gap-5 mt-6 ${assets.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
      {assets.map((asset, idx) => {
        const isFullSpan = asset.aspectRatio === "16/9" && assets.length > 2;
        const aspectClass =
          asset.aspectRatio === "1/1"
            ? "aspect-square"
            : asset.aspectRatio === "4/3"
            ? "aspect-[4/3]"
            : asset.aspectRatio === "3/4"
            ? "aspect-[3/4]"
            : asset.aspectRatio === "4/5"
            ? "aspect-[4/5]"
            : asset.aspectRatio === "9/16"
            ? "aspect-[9/16]"
            : "aspect-[16/9]";

        return (
          <figure
            key={idx}
            className={`group overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-sm ${
              isFullSpan ? "sm:col-span-2" : "col-span-1"
            }`}
          >
            <div className={`relative w-full ${aspectClass}`}>
              <Image
                src={asset.url}
                alt={asset.caption ?? "Project image"}
                fill
                className="object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                sizes={
                  isFullSpan
                    ? "(max-width: 1280px) 100vw, 1200px"
                    : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px"
                }
              />
            </div>
          </figure>
        );
      })}
    </div>
  );
}

/* ─── Bullet list component ───────────────────────────────────────────────── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
          <span className="mt-[0.4em] shrink-0 w-1 h-1 rounded-full bg-neutral-400 block" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const project = getLocalizedProject(id, language);
  if (!project) notFound();

  const { caseStudy } = project;

  /* YouTube video embed URL helper */
  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0` : null;
  };
  const youtubeEmbedUrl = getYoutubeEmbedUrl(project.youtubeUrl);

  /* Related projects — ensure 2 items for 2x1 grid */
  const allLocalized = getLocalizedProjects(language);
  const featuredOthers = allLocalized.filter(
    (p) => p.featured && p.id !== project.id
  );
  const relatedProjects = featuredOthers.length >= 2
    ? featuredOthers.slice(0, 2)
    : [
        ...featuredOthers,
        ...allLocalized.filter(
          (p) => p.id !== project.id && !featuredOthers.some((fo) => fo.id === p.id)
        ),
      ].slice(0, 2);

  /* Category discipline links */
  const disciplines = [
    { slug: "ux-ui", label: t.caseStudyUI.catUxUi },
    { slug: "graphic-design", label: t.caseStudyUI.catGraphicDesign },
    { slug: "video", label: t.caseStudyUI.catVideo },
  ];

  return (
    <div className="w-full flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">

      {/* ════════════════════════════════════════════════════════════════════
          HERO — Cover image / Video Player + project meta
      ════════════════════════════════════════════════════════════════════ */}
      <section className="w-full">
        {/* Back nav */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.caseStudyUI.backToAll}
          </Link>
        </div>

        {/* Full-width media: YouTube player if video, else Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
        >
          {youtubeEmbedUrl ? (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 shadow-md">
              <iframe
                src={youtubeEmbedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div
              className={`relative w-full ${
                project.coverAspectRatio === "16/9"
                  ? "aspect-[16/9]"
                  : "aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.4/1]"
              } rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm`}
            >
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-400">
                  <span className="text-xs uppercase tracking-widest font-semibold">Cover Frame</span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Project title + summary + meta */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-10 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Left — Title & summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 space-y-5"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-[0.65rem] sm:text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-neutral-200/90 bg-neutral-50/90 text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight text-neutral-950 leading-none">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
                {project.fullDescription ?? project.shortDescription}
              </p>

              {project.youtubeUrl && (
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 border-b border-neutral-950 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
                >
                  {t.caseStudyUI.watchYouTube} <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {!project.youtubeUrl && project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 border-b border-neutral-950 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
                >
                  {t.caseStudyUI.viewLive} <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>

            {/* Right — Meta stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 space-y-6"
            >
              <dl className="space-y-5">
                {[
                  {
                    label: t.caseStudyUI.metaCategory,
                    value:
                      project.category === "video"
                        ? t.caseStudyUI.catVideo
                        : project.category === "ux-ui"
                        ? t.caseStudyUI.catUxUi
                        : t.caseStudyUI.catGraphicDesign,
                  },
                  ...(project.client ? [{ label: t.caseStudyUI.metaClient, value: project.client }] : []),
                  ...(project.year ? [{ label: t.caseStudyUI.metaYear, value: project.year }] : []),
                  ...(project.timeframe ? [{ label: t.caseStudyUI.metaTimeframe, value: project.timeframe }] : []),
                  ...(project.productionTime ? [{ label: t.caseStudyUI.metaProductionTime, value: project.productionTime }] : []),
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-1">
                    <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-neutral-400">
                      {label}
                    </dt>
                    <dd className="text-sm sm:text-base font-semibold text-neutral-950 capitalize">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SHOWCASE GALLERY (FOR PROJECTS WITHOUT A FULL CASE STUDY)
      ════════════════════════════════════════════════════════════════════ */}
      {!caseStudy && !project.youtubeUrl && (
        <div className="w-full border-t border-neutral-100 bg-neutral-50/50 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
            {/* Optional Highlights / Key Context */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="max-w-3xl space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-900" />
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    {t.caseStudyUI.projectOverviewTitle}
                  </p>
                </div>
                <h2 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-950">
                  {t.caseStudyUI.keyDetailsNotes}
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 leading-relaxed"
                    >
                      <span className="mt-[0.45em] shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-900 block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Media Gallery / Posters */}
            {project.mediaAssets?.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="space-y-6 pt-4"
              >
                <div
                  className={`grid gap-8 sm:gap-10 ${
                    project.mediaAssets.length === 2
                      ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                      : project.mediaAssets.length >= 3
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 max-w-3xl mx-auto"
                  }`}
                >
                  {project.mediaAssets.map((asset, idx) => {
                    const aspectClass =
                      asset.aspectRatio === "3/4"
                        ? "aspect-[3/4]"
                        : asset.aspectRatio === "4/5"
                        ? "aspect-[4/5]"
                        : asset.aspectRatio === "1/1"
                        ? "aspect-square"
                        : asset.aspectRatio === "9/16"
                        ? "aspect-[9/16]"
                        : asset.aspectRatio === "4/3"
                        ? "aspect-[4/3]"
                        : "aspect-[16/9]";

                    return (
                      <figure
                        key={idx}
                        className="group flex flex-col space-y-3 overflow-hidden rounded-2xl bg-white border border-neutral-200/90 shadow-sm p-3 transition-shadow hover:shadow-md"
                      >
                        <div
                          className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-neutral-100`}
                        >
                          <Image
                            src={asset.url}
                            alt={asset.caption ?? `Project media ${idx + 1}`}
                            fill
                            className="object-cover group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        {asset.caption && (
                          <figcaption className="px-2 pb-1 text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                            {asset.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          CASE STUDY SECTIONS
      ════════════════════════════════════════════════════════════════════ */}
      {caseStudy && (
        <div className="w-full border-t border-neutral-100">

          {/* ── 01 · DEFINING THE CHALLENGE ─────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-20 pb-16 sm:pb-20"
          >
            <SectionEyebrow number="01" label={t.caseStudyUI.eyebrow01} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4 space-y-2">
                <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                  {t.caseStudyUI.challengeTitle}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-10">
                {/* Problem Statement */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                    {t.caseStudyUI.problemStatement}
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                    {caseStudy.challenge.problemStatement}
                  </p>
                </div>
                {/* Goal */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                    {t.caseStudyUI.goal}
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                    {caseStudy.challenge.goal}
                  </p>
                </div>
                {/* Role */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                    {t.caseStudyUI.myRole}
                  </h3>
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                    {caseStudy.challenge.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── 02 · RESEARCH ────────────────────────────────────────────── */}
          {caseStudy.research && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              variants={fadeUp}
              className="w-full bg-neutral-50/60"
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
                <SectionEyebrow number="02" label={t.caseStudyUI.eyebrow02} />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-4 space-y-2">
                    <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                      {t.caseStudyUI.researchTitle}
                    </h2>
                  </div>
                  <div className="lg:col-span-8 space-y-8">
                    <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                      {caseStudy.research.overview}
                    </p>
                    {caseStudy.research.insights?.length && (
                      <div className="space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                          {t.caseStudyUI.keyInsights}
                        </h3>
                        <BulletList items={caseStudy.research.insights} />
                      </div>
                    )}
                    {caseStudy.research.mediaAssets?.length && (
                      <MediaGallery assets={caseStudy.research.mediaAssets} />
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* ── 03 · CONCEPT & PROCESS ───────────────────────────────────── */}
          {caseStudy.concept && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={2}
              variants={fadeUp}
              className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20"
            >
              <SectionEyebrow number="03" label={t.caseStudyUI.eyebrow03} />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-4 space-y-2">
                  <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                    {t.caseStudyUI.conceptTitle}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-8">
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                    {caseStudy.concept.overview}
                  </p>
                  {caseStudy.concept.process && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                        {t.caseStudyUI.processTitle}
                      </h3>
                      <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                        {caseStudy.concept.process}
                      </p>
                    </div>
                  )}
                  {caseStudy.concept.mediaAssets?.length && (
                    <MediaGallery assets={caseStudy.concept.mediaAssets} />
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* ── 04 · PROTOTYPING / WIREFRAMES ───────────────────────────── */}
          {caseStudy.prototyping && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={3}
              variants={fadeUp}
              className="w-full bg-neutral-50/60"
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
                <SectionEyebrow
                  number="04"
                  label={caseStudy.prototyping.eyebrow ?? "Prototyping & Creation"}
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-4 space-y-2">
                    <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                      {caseStudy.prototyping.title ?? "Build"}
                    </h2>
                  </div>
                  <div className="lg:col-span-8 space-y-8">
                    <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                      {caseStudy.prototyping.overview}
                    </p>
                    {caseStudy.prototyping.mediaAssets?.length && (
                      <MediaGallery assets={caseStudy.prototyping.mediaAssets} />
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* ── 05 · REFINEMENT / HIGH FIDELITY PROTOTYPE ────────────────── */}
          {caseStudy.refinement && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={4}
              variants={fadeUp}
              className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20"
            >
              <SectionEyebrow
                number="05"
                label={caseStudy.refinement.eyebrow ?? "Refinement"}
              />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10">
                <div className="lg:col-span-4 space-y-2">
                  <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                    {caseStudy.refinement.title ?? "Refine"}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                    {caseStudy.refinement.overview}
                  </p>
                  {caseStudy.refinement.changes?.length && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                        {t.caseStudyUI.keyUpdates}
                      </h3>
                      <BulletList items={caseStudy.refinement.changes} />
                    </div>
                  )}
                </div>
              </div>

              {/* Full-width Mockups Grid — occupies 100% of container width */}
              {caseStudy.refinement.mediaAssets?.length && (
                <div className="w-full mt-6">
                  <MediaGallery assets={caseStudy.refinement.mediaAssets} />
                </div>
              )}

              {/* Interactive Magazine Flipbook Viewer */}
              {caseStudy.refinement.magazinePages?.length && (
                <div className="w-full mt-8">
                  <MagazineViewer
                    pages={caseStudy.refinement.magazinePages}
                    title={project.title}
                  />
                </div>
              )}

              {/* Grouped image rows — each group is its own grid row */}
              {caseStudy.refinement.mediaAssetGroups?.length && (
                <div className="w-full mt-6 space-y-5">
                  {caseStudy.refinement.mediaAssetGroups.map((group, gi) => {
                    const cols = group.length >= 4 ? 4 : group.length === 3 ? 3 : 2;
                    const gridClass =
                      cols === 4
                        ? "grid gap-4 grid-cols-2 sm:grid-cols-4"
                        : cols === 3
                        ? "grid gap-4 grid-cols-1 sm:grid-cols-3"
                        : "grid gap-5 grid-cols-1 sm:grid-cols-2";
                    return (
                      <div key={gi} className={gridClass}>
                        {group.map((asset, ai) => {
                          const aspectClass =
                            asset.aspectRatio === "1/1"
                              ? "aspect-square"
                              : asset.aspectRatio === "4/3"
                              ? "aspect-[4/3]"
                              : asset.aspectRatio === "9/16"
                              ? "aspect-[9/16]"
                              : "aspect-[16/9]";
                          return (
                            <figure
                              key={ai}
                              className="group overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-sm"
                            >
                              <div className={`relative w-full ${aspectClass}`}>
                                <Image
                                  src={asset.url}
                                  alt={asset.caption ?? "Project image"}
                                  fill
                                  className="object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                                  sizes={
                                    cols === 4
                                      ? "(max-width: 640px) 50vw, 25vw"
                                      : cols === 3
                                      ? "(max-width: 640px) 100vw, 33vw"
                                      : "(max-width: 640px) 100vw, 50vw"
                                  }
                                />
                              </div>
                            </figure>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.section>
          )}


          {/* ── 06 · CONCLUSIONS ────────────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={5}
            variants={fadeUp}
            className="w-full bg-white border-t border-neutral-100"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
              <SectionEyebrow
                number="06"
                label={t.caseStudyUI.eyebrow06}
              />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-4 space-y-2">
                  <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-none">
                    {t.caseStudyUI.conclusionsTitle}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-10">
                  {/* Subtext 1: Results */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      {t.caseStudyUI.resultsTitle}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                      {caseStudy.results.resultsText ??
                        (Array.isArray(caseStudy.results.results)
                          ? caseStudy.results.results.join(" ")
                          : caseStudy.results.results)}
                    </p>
                  </div>

                  {/* Subtext 2: Learnings */}
                  <div className="space-y-3 pt-8 border-t border-neutral-100">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      {t.caseStudyUI.learningsTitle}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                      {caseStudy.results.learningsText ??
                        (Array.isArray(caseStudy.results.learnings)
                          ? caseStudy.results.learnings.join(" ")
                          : caseStudy.results.learnings)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── PROJECT RESOURCES & DELIVERABLES ─────────────────────────── */}
          {(project.externalUrl || project.documentUrl || (project.documents && project.documents.length > 0)) && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={6}
              variants={fadeUp}
              className="w-full border-t border-neutral-200/80 bg-neutral-50"
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl border border-neutral-200 bg-white shadow-sm">
                  <div className="space-y-2 max-w-xl">
                    {project.deliverablesEyebrow !== null && (
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neutral-900" />
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                          {project.deliverablesEyebrow ?? t.caseStudyUI.deliverablesEyebrowDefault}
                        </p>
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950">
                      {project.deliverablesTitle ?? t.caseStudyUI.deliverablesTitleDefault}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {project.deliverablesDescription ?? t.caseStudyUI.deliverablesDescriptionDefault}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 shrink-0">
                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-neutral-950 text-white font-semibold text-sm hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:scale-[1.02]"
                      >
                        <span>{t.caseStudyUI.openFigma}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.documents?.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        download={doc.name}
                        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-neutral-300 bg-white text-neutral-900 font-semibold text-sm hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200 shadow-sm hover:scale-[1.02]"
                      >
                        <Download className="w-4 h-4" />
                        <span>{doc.label}</span>
                        {doc.language && (
                          <span className="text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                            {doc.language}
                          </span>
                        )}
                      </a>
                    ))}
                    {!project.documents && project.documentUrl && (
                      <a
                        href={project.documentUrl}
                        download={project.documentName ?? "FiveStarsDocument-CAT.pdf"}
                        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-neutral-300 bg-white text-neutral-900 font-semibold text-sm hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200 shadow-sm hover:scale-[1.02]"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t.caseStudyUI.downloadDoc}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          CHECK OTHER PROJECTS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-24 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mb-14 sm:mb-16"
        >
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-neutral-950 leading-none">
            {t.caseStudyUI.otherProjectsTitle}
          </h2>
        </motion.div>

        {/* Related projects — 2x1 Grid (2 items in the row) */}
        {relatedProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
            {relatedProjects.map((p, i) => (
              <motion.article
                key={p.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
              >
                <Link href={`/projects/${p.id}`} className="group block space-y-4">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/70">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-neutral-900 group-hover:bg-white group-hover:scale-110 shadow-sm transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="space-y-2 pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight group-hover:text-neutral-600 transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-[0.65rem] sm:text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-neutral-200/90 bg-neutral-50/90 text-neutral-600"
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
        )}

        {/* Discipline categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
          variants={fadeUp}
          className="border-t border-neutral-100 pt-12"
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-6">
            {t.caseStudyUI.browseByDiscipline}
          </p>
          <div className="flex flex-wrap gap-3">
            {disciplines.map((d) => (
              <Link
                key={d.slug}
                href={`/projects/${d.slug}`}
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-neutral-200 text-sm font-semibold text-neutral-600 hover:border-neutral-950 hover:text-neutral-950 hover:bg-neutral-50 transition-all duration-200"
              >
                {d.label}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
