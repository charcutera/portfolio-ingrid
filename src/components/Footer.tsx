"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const lines = t.footer.headline;

  return (
    <footer className="relative w-full bg-white text-neutral-900 border-t border-neutral-100 select-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28 flex flex-col justify-between space-y-16">
        
        {/* Main Footer Headline & Direct Contact Links */}
        <div className="space-y-8 max-w-5xl">
          {/* Interactive Animated Headline with Pink-Red Gradient & Kinetic Letter Wave */}
          <Link
            href="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group block cursor-pointer"
          >
            <h2 className="font-alinsa text-5xl sm:text-7xl md:text-8xl lg:text-[8.2rem] xl:text-[9.5rem] uppercase leading-[0.88] tracking-tight">
              {lines.map((line, lineIdx) => (
                <span key={lineIdx} className="block overflow-visible whitespace-nowrap">
                  {line.split("").map((char, charIdx) => {
                    const globalIdx = lineIdx * 15 + charIdx;
                    return (
                      <motion.span
                        key={charIdx}
                        className="inline-block"
                        animate={
                          isHovered && char !== " "
                            ? {
                                y: [0, -12, 3, 0],
                                rotate: [0, (globalIdx % 2 === 0 ? 3.5 : -3.5), 0],
                                transition: {
                                  duration: 0.65,
                                  delay: charIdx * 0.025,
                                  ease: [0.34, 1.56, 0.64, 1],
                                  repeat: Infinity,
                                  repeatDelay: 1.1,
                                },
                              }
                            : { y: 0, rotate: 0 }
                        }
                        style={{
                          display: char === " " ? "inline" : "inline-block",
                        }}
                      >
                        <span
                          className={`transition-all duration-500 ${
                            isHovered
                              ? "bg-gradient-to-r from-[#FF1E8A] via-[#E60039] via-[#FF4580] to-[#C8102E] bg-clip-text text-transparent drop-shadow-[0_6px_20px_rgba(230,0,57,0.22)]"
                              : "text-neutral-950"
                          }`}
                        >
                          {char}
                        </span>
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h2>
          </Link>

          <div className="space-y-5 pt-3">
            {/* Clean Underlined Direct Email */}
            <div>
              <a
                href="mailto:ingridlaragob@gmail.com"
                className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 hover:text-[#E6007A] transition-colors inline-block border-b border-neutral-300 pb-1"
              >
                ingridlaragob@gmail.com
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-7 pt-1">
              <a
                href="https://www.linkedin.com/in/ingrid-gobierno/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar: Navigation & Credits */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-neutral-200/80 text-sm sm:text-base text-neutral-500">
          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              {t.footer.navHome}
            </Link>
            <Link href="/projects" className="hover:text-neutral-900 transition-colors">
              {t.footer.navProjects}
            </Link>
            <Link href="/about" className="hover:text-neutral-900 transition-colors">
              {t.footer.navAbout}
            </Link>
            <Link href="/contact" className="hover:text-neutral-900 transition-colors">
              {t.footer.navContact}
            </Link>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400">
            <span className="font-semibold uppercase tracking-wider text-neutral-700">INGRID</span>
            <span>—</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
