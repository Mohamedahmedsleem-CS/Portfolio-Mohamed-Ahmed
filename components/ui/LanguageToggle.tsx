"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.languageToggle.ariaLabel}
      className="relative inline-flex h-10 min-w-[5.5rem] overflow-hidden rounded-lg border border-white/[0.2] p-[1px] transition-transform duration-300 hover:scale-105 focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-medium leading-none text-white backdrop-blur-3xl">
        <span className="leading-none translate-y-[1px]">
          {lang === "ar" ? "English" : "عربي"}
        </span>
      </span>
    </button>
  );
};

export default LanguageToggle;
