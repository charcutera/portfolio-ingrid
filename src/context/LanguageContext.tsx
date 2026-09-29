"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "EN" | "ES" | "CAT";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language";

/**
 * Detects the user's preferred language from the browser:
 * - Returns "CAT" if browser language preference starts with Catalan ("ca")
 * - Returns "ES" if browser language preference starts with Spanish ("es")
 * - Defaults to "EN" in all other cases.
 */
function detectBrowserLanguage(): Language {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "EN";
  }

  const candidates: string[] = [];
  if (navigator.languages && navigator.languages.length > 0) {
    for (const l of navigator.languages) {
      if (l) candidates.push(l.toLowerCase());
    }
  }
  if (navigator.language) {
    candidates.push(navigator.language.toLowerCase());
  }

  for (const lang of candidates) {
    if (lang.startsWith("ca")) {
      return "CAT";
    }
    if (lang.startsWith("es")) {
      return "ES";
    }
    if (lang.startsWith("en")) {
      return "EN";
    }
  }

  return "EN";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === "EN" || saved === "ES" || saved === "CAT")) {
        setLanguageState(saved);
      } else {
        // No explicit manual selection saved: detect browser language silently
        const detected = detectBrowserLanguage();
        if (detected !== "EN") {
          setLanguageState(detected);
        }
      }
    } catch {
      // localStorage restricted or private browsing
      const detected = detectBrowserLanguage();
      if (detected !== "EN") {
        setLanguageState(detected);
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
    const htmlLang = lang === "ES" ? "es" : lang === "CAT" ? "ca" : "en";
    document.documentElement.lang = htmlLang;
  };

  useEffect(() => {
    if (mounted) {
      const htmlLang = language === "ES" ? "es" : language === "CAT" ? "ca" : "en";
      document.documentElement.lang = htmlLang;
    }
  }, [language, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
