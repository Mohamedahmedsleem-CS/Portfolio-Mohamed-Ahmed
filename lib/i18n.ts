export type Lang = "ar" | "en";
export type Dir = "rtl" | "ltr";

export const DEFAULT_LANG: Lang = "ar";
export const LANG_KEY = "portfolio_lang";

export type LocalizedString = Record<Lang, string>;

export function getLocalized(field: LocalizedString, lang: Lang): string {
  return field[lang];
}

export function getTextDir(lang: Lang): Dir {
  return lang === "ar" ? "rtl" : "ltr";
}

/** @deprecated Use getTextDir for element-level direction only. Layout stays LTR. */
export function getDir(lang: Lang): Dir {
  return getTextDir(lang);
}

export const translations = {
  ar: {
    hero: {
      eyebrow: "تطوير واجهات وتطبيقات ويب بتقنية React.js",
      headline:
        "أبني لك موقعًا أو متجرًا إلكترونيًا احترافيًا يليق بعلامتك التجارية",
      subtitle:
        "مرحبًا، أنا محمد أحمد، مطوّر واجهات أمامية (React.js) مقيم في جدة، أساعد الشركات على إطلاق مواقع وتطبيقات ويب سريعة وموثوقة.",
      cta: "شاهد أعمالي",
    },
    projects: {
      headingBefore: "مجموعة مختارة من",
      headingHighlight: "أحدث أعمالي",
      checkLiveSite: "زيارة الموقع",
    },
    clients: {
      headingBefore: "كلمات طيبة من",
      headingHighlight: "عملاء راضين",
    },
    experience: {
      headingBefore: "خبرتي",
      headingHighlight: "العملية",
    },
    approach: {
      headingBefore: "آلية",
      headingHighlight: "عملي",
      phases: [
        {
          order: "المرحلة 1",
          title: "التخطيط والاستراتيجية",
          description:
            "نحدّد معًا أهداف الموقع والجمهور المستهدف والوظائف الأساسية، ونتفق على هيكل الموقع والتنقّل والمحتوى المطلوب.",
        },
        {
          order: "المرحلة 2",
          title: "التطوير والمتابعة",
          description:
            "بعد الاتفاق على الخطة، أبدأ التطوير وأطلعك على التقدّم في كل مرحلة بوضوح.",
        },
        {
          order: "المرحلة 3",
          title: "الإطلاق والتسليم",
          description:
            "أحوّل التصميم المعتمد إلى موقع متكامل جاهز للإطلاق بأداء عالٍ.",
        },
      ],
    },
    footer: {
      headingBefore: "هل أنت مستعد للارتقاء بحضورك",
      headingHighlight: "الرقمي",
      headingAfter: "؟",
      paragraph:
        "تواصل معي اليوم ولنتحدث عن كيفية مساعدتك في تحقيق أهدافك.",
      cta: "لنتواصل",
      copyright: "جميع الحقوق محفوظة © 2024 محمد سليم",
    },
    languageToggle: {
      ariaLabel: "التبديل إلى الإنجليزية",
    },
  },
  en: {
    hero: {
      eyebrow: "Frontend Web & App Development with React.js",
      headline:
        "I build professional websites and web apps that grow your business",
      subtitle:
        "Hi, I'm Mohamed Ahmed, a React.js frontend developer based in Jeddah. I help businesses launch fast, reliable web experiences.",
      cta: "View my work",
    },
    projects: {
      headingBefore: "A selection of",
      headingHighlight: "recent projects",
      checkLiveSite: "Check Live Site",
    },
    clients: {
      headingBefore: "Kind words from",
      headingHighlight: "satisfied clients",
    },
    experience: {
      headingBefore: "My",
      headingHighlight: "work experience",
    },
    approach: {
      headingBefore: "My",
      headingHighlight: "approach",
      phases: [
        {
          order: "Phase 1",
          title: "Planning & Strategy",
          description:
            "We map out your site's goals, audience, and core features, and agree on structure, navigation, and content.",
        },
        {
          order: "Phase 2",
          title: "Development & Progress Updates",
          description:
            "Once the plan is set, I start building and keep you updated at every step.",
        },
        {
          order: "Phase 3",
          title: "Development & Launch",
          description:
            "I turn the approved design into a complete, high-performance site ready to launch.",
        },
      ],
    },
    footer: {
      headingBefore: "Ready to take your",
      headingHighlight: "digital",
      headingAfter: " presence to the next level?",
      paragraph:
        "Reach out today and let's discuss how I can help you reach your goals.",
      cta: "Let's get in touch",
      copyright: "Copyright © 2024 Mohamed Selim",
    },
    languageToggle: {
      ariaLabel: "Switch to Arabic",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
