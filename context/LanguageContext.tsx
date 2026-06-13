"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import {
  DEFAULT_LANG,
  LANG_KEY,
  Lang,
  Translations,
  getTextDir,
  translations,
} from "@/lib/i18n";

const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

type LanguageContextValue = {
  lang: Lang;
  textDir: ReturnType<typeof getTextDir>;
  setLanguage: (nextLang: Lang) => void;
  toggleLanguage: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLanguage(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = "ltr";
}

function readSavedLanguage(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;

  try {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    if (saved === "ar" || saved === "en") return saved;

    const legacy = localStorage.getItem("lang") as Lang | null;
    if (legacy === "ar" || legacy === "en") {
      localStorage.setItem(LANG_KEY, legacy);
      localStorage.removeItem("lang");
      return legacy;
    }
  } catch {
    // ignore storage failures
  }

  return DEFAULT_LANG;
}

function persistLanguage(lang: Lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // ignore storage failures
  }
  applyDocumentLanguage(lang);
  window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}

function subscribeToLanguage(callback: () => void) {
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguageSnapshot(): Lang {
  return readSavedLanguage();
}

function getLanguageServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  React.useEffect(() => {
    applyDocumentLanguage(lang);
  }, [lang]);

  const setLanguage = useCallback((nextLang: Lang) => {
    persistLanguage(nextLang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const current = readSavedLanguage();
    const nextLang: Lang = current === "ar" ? "en" : "ar";
    persistLanguage(nextLang);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      textDir: getTextDir(lang),
      setLanguage,
      toggleLanguage,
      t: translations[lang],
    }),
    [lang, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

/** Remounts children whenever language changes so animated sections re-init cleanly. */
export function LanguageContent({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  return <div key={lang}>{children}</div>;
}
