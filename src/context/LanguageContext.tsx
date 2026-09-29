"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "EN" | "ES" | "CAT";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === "EN" || saved === "ES" || saved === "CAT")) {
        setLanguageState(saved);
      }
    } catch {
      // localStorage unavailable or restricted
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
