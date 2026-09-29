"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoItem } from "@/types/project";

interface PhotographyGridProps {
  photos: PhotoItem[];
}

export default function PhotographyGrid({ photos }: PhotographyGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Aspect ratio mapping to CSS aspect ratio classes
  const getAspectClass = (ratio: PhotoItem["aspectRatio"]) => {
    switch (ratio) {
      case "16/9":
        return "aspect-[16/9]";
      case "4/3":
        return "aspect-[4/3]";
      case "1/1":
        return "aspect-square";
      case "9/16":
        return "aspect-[9/16]";
      case "3/4":
        return "aspect-[3/4]";
      case "4/5":
        return "aspect-[4/5]";
      default:
        return "aspect-[4/3]";
    }
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
  }, [selectedIndex, photos.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, photos.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext, handleClose]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const renderPhotoCard = (photo: PhotoItem, originalIndex: number, animDelay: number) => {
    const aspectClass = getAspectClass(photo.aspectRatio);

    return (
      <motion.div
        key={photo.id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: animDelay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div
          onClick={() => setSelectedIndex(originalIndex)}
          className="group relative w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/70 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
        >
          <div className={`relative w-full ${aspectClass} overflow-hidden`}>
            <Image
              src={photo.url}
              alt={photo.title || "Photography"}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-600 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* ── Single Responsive Masonry Grid (prevents duplicate Image elements in DOM) ── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6 [column-fill:_balance]">
        {photos.map((photo, index) => (
          <div key={photo.id} className="break-inside-avoid mb-5 sm:mb-6">
            {renderPhotoCard(photo, index, (index % 6) * 0.04)}
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal with Carousel Navigation ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar imagen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left arrow button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right arrow button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <motion.div
              key={photos[selectedIndex].id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[88vh] flex items-center justify-center cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[selectedIndex].url}
                alt=""
                className="max-h-[85vh] max-w-[85vw] sm:max-w-[80vw] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
