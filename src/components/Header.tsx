"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "CAT", label: "Català" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language];

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [pathname]);

  // Click outside listener for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none py-3">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between md:justify-center relative">
        {/* Desktop Centered Floating Navigation Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center space-x-1 bg-white/85 p-1.5 rounded-full border border-neutral-200/80 backdrop-blur-xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-neutral-950 font-bold"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {/* Active Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-neutral-200/80"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}

          {/* Subtle divider */}
          <div className="w-px h-4 bg-neutral-200/80 mx-1" />

          {/* Language Selector Dropdown Button */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none ${
                langMenuOpen
                  ? "bg-white text-neutral-950 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-neutral-200/80"
                  : "text-neutral-700 hover:text-neutral-950 hover:bg-white/60"
              }`}
              aria-label="Change language"
              title="Change language"
            >
              <Globe className="w-4 h-4 text-neutral-500" />
              <span>{language}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                  langMenuOpen ? "rotate-180 text-neutral-700" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full mt-2 w-36 bg-white/95 backdrop-blur-2xl rounded-2xl border border-neutral-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.12)] p-1.5 z-50 flex flex-col gap-0.5"
                >
                  {LANGUAGES.map((lang) => {
                    const isSelected = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors text-left ${
                          isSelected
                            ? "bg-neutral-100 text-neutral-950 font-bold"
                            : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{lang.code}</span>
                          <span className="text-[0.7rem] text-neutral-400 font-normal">
                            {lang.label}
                          </span>
                        </div>
                        {isSelected && (
                          <Check className="w-3.5 h-3.5 text-neutral-950" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Nav Floating Bar */}
        <div className="pointer-events-auto md:hidden flex items-center justify-between w-full bg-white/90 px-5 py-3 rounded-full border border-neutral-200/80 backdrop-blur-xl shadow-md">
          <div className="font-bold font-sans tracking-widest text-sm uppercase text-neutral-950">
            INGRID
          </div>

          {/* Mobile Animated Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="relative w-8 h-8 flex flex-col items-center justify-center space-y-1 focus:outline-none"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-4 h-[1.5px] bg-neutral-900 rounded-full block origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-4 h-[1.5px] bg-neutral-900 rounded-full block origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-4 h-[1.5px] bg-neutral-900 rounded-full block origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden mx-6 mt-2 rounded-2xl border border-neutral-200 bg-white/95 backdrop-blur-2xl p-4 shadow-xl"
          >
            <motion.nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-100 text-neutral-950 font-bold"
                        : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A11B6E]" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile Language Selector */}
              <div className="pt-3 mt-1 border-t border-neutral-100 flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === "EN" ? "Language" : "Idioma"}</span>
                </div>
                <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-full border border-neutral-200/60">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setLanguage(lang.code)}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                        language === lang.code
                          ? "bg-white text-neutral-950 shadow-sm"
                          : "text-neutral-500 hover:text-neutral-950"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
