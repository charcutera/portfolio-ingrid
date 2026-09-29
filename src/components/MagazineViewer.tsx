"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface MagazineViewerProps {
  pages: string[];
  title?: string;
}

export default function MagazineViewer({ pages, title = "Book Magazine" }: MagazineViewerProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const totalPages = pages.length;
  const totalSpreads = Math.ceil(totalPages / 2);

  const [viewMode, setViewMode] = useState<"spread" | "single">("spread");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when fullscreen is active
  useEffect(() => {
    if (isFullscreen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isFullscreen]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && viewMode === "spread") {
        setViewMode("single");
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [viewMode]);

  const maxIndex = viewMode === "spread" ? totalSpreads - 1 : totalPages - 1;

  const handleNext = useCallback(() => {
    if (currentIndex < maxIndex && !isFlipping) {
      setIsFlipping(true);
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsFlipping(false), 300);
    }
  }, [currentIndex, maxIndex, isFlipping]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0 && !isFlipping) {
      setIsFlipping(true);
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsFlipping(false), 300);
    }
  }, [currentIndex, isFlipping]);

  const goToIndex = (target: number) => {
    if (target === currentIndex || isFlipping) return;
    setIsFlipping(true);
    setDirection(target > currentIndex ? 1 : -1);
    setCurrentIndex(target);
    setTimeout(() => setIsFlipping(false), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isFullscreen]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartX.current === null) return;
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - touchStartX.current;
    touchStartX.current = null;

    if (diff < -45) {
      handleNext();
    } else if (diff > 45) {
      handlePrev();
    }
  };

  const leftPageIdx = viewMode === "spread" ? currentIndex * 2 : currentIndex;
  const rightPageIdx = viewMode === "spread" ? currentIndex * 2 + 1 : null;

  const renderStage = (inFullscreen: boolean) => (
    <div
      className={`select-none overflow-hidden transition-all duration-300 ${
        inFullscreen
          ? "fixed inset-0 z-[9999] bg-neutral-950/98 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between items-center text-white"
          : "relative w-full rounded-3xl bg-neutral-950 text-white p-4 sm:p-8 lg:p-10 shadow-2xl border border-neutral-800 flex flex-col justify-center items-center"
      }`}
    >
      {/* Top bar control icons */}
      <div
        className={`w-full ${
          inFullscreen ? "max-w-7xl" : "max-w-5xl"
        } flex items-center justify-between mb-3 sm:mb-4 text-xs text-neutral-400`}
      >
        <div className="flex items-center gap-2">
          {inFullscreen && title && (
            <span className="font-semibold text-white/90 text-sm tracking-wide hidden sm:inline">
              {title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isMobile && (
            <div className="flex items-center bg-neutral-900 rounded-full p-0.5 border border-neutral-800">
              <button
                type="button"
                onClick={() => {
                  if (viewMode !== "spread") {
                    setViewMode("spread");
                    setCurrentIndex(Math.floor(currentIndex / 2));
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === "spread"
                    ? "bg-neutral-800 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
                title={t.magazine.spread}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.magazine.spread}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (viewMode !== "single") {
                    setViewMode("single");
                    setCurrentIndex(currentIndex * 2);
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === "single"
                    ? "bg-neutral-800 text-white shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
                title={t.magazine.single}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.magazine.single}</span>
              </button>
            </div>
          )}

          {/* Fullscreen / Minimize Toggle Button */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!inFullscreen)}
            className={`p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors ${
              inFullscreen
                ? "bg-neutral-900 border border-neutral-800 text-white px-3 py-1.5 flex items-center gap-1.5 shadow-md"
                : ""
            }`}
            title={inFullscreen ? t.magazine.exitFullscreen : t.magazine.fullscreen}
          >
            {inFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4" />
                <span className="text-xs font-medium">{t.magazine.exitFullscreen}</span>
              </>
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Book Container */}
      <div
        className={`relative w-full ${
          inFullscreen ? "max-w-7xl flex-1 flex items-center" : "max-w-5xl"
        } flex items-center justify-center my-2 sm:my-3`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-1 sm:left-3 z-30 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-white text-white hover:text-neutral-950 backdrop-blur-md border border-neutral-700/60 shadow-xl transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none hover:scale-105 active:scale-95"
          aria-label={t.magazine.prevPage}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Magazine Body */}
        <div
          className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing w-full ${
            inFullscreen ? "max-h-[76vh] h-full" : ""
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${viewMode}-${currentIndex}`}
              initial={{ opacity: 0, x: direction > 0 ? 15 : -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -15 : 15 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] border border-neutral-800 bg-neutral-900 ${
                viewMode === "spread"
                  ? inFullscreen
                    ? "w-full max-w-6xl max-h-[76vh] aspect-[2/1.414]"
                    : "w-full max-w-4xl aspect-[2/1.414]"
                  : inFullscreen
                    ? "w-full max-w-xl max-h-[76vh] aspect-[1/1.414]"
                    : "w-full max-w-md aspect-[1/1.414]"
              }`}
            >
              {viewMode === "spread" ? (
                <div className="relative w-full h-full flex">
                  {/* Left Page */}
                  <div className="relative w-1/2 h-full bg-neutral-900 overflow-hidden border-r border-neutral-800/80">
                    {pages[leftPageIdx] ? (
                      <Image
                        src={pages[leftPageIdx]}
                        alt={`Page ${leftPageIdx + 1}`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 700px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xs">
                        {t.magazine.endOfIssue}
                      </div>
                    )}
                    <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/35 via-black/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Center Spine Fold */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-2.5 z-20 pointer-events-none bg-gradient-to-r from-black/35 via-neutral-900/50 to-black/35" />

                  {/* Right Page */}
                  <div className="relative w-1/2 h-full bg-neutral-900 overflow-hidden">
                    {rightPageIdx !== null && pages[rightPageIdx] ? (
                      <Image
                        src={pages[rightPageIdx]}
                        alt={`Page ${rightPageIdx + 1}`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 700px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xs">
                        {t.magazine.backCover}
                      </div>
                    )}
                    <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
                  {pages[leftPageIdx] && (
                    <Image
                      src={pages[leftPageIdx]}
                      alt={`Page ${leftPageIdx + 1}`}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, 650px"
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="absolute right-1 sm:right-3 z-30 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-white text-white hover:text-neutral-950 backdrop-blur-md border border-neutral-700/60 shadow-xl transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none hover:scale-105 active:scale-95"
          aria-label={t.magazine.nextPage}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom selector bar */}
      <div
        className={`w-full ${
          inFullscreen ? "max-w-7xl" : "max-w-5xl"
        } flex items-center justify-center mt-3 pt-3 border-t border-neutral-800/80`}
      >
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToIndex(i)}
              className={`relative px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                currentIndex === i
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
              }`}
            >
              {viewMode === "spread" ? `S${i + 1}` : `P${i + 1}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* In-page magazine stage: retains space when fullscreen is active */}
      <div className={`w-full ${isFullscreen ? "invisible pointer-events-none" : ""}`}>
        {renderStage(false)}
      </div>

      {/* Fullscreen Portal: attached directly to document.body to bypass transformed ancestors */}
      {mounted && isFullscreen && createPortal(renderStage(true), document.body)}
    </div>
  );
}
