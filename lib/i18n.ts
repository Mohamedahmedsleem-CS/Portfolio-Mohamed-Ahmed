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
      eyebrow: "مواقع ومتاجر ويب تجذب العملاء وتزيد الطلبات",
      headline: "موقع أو متجر احترافي يبيع من أول زيارة",
      subtitle:
        "أنا محمد أحمد، مطوّر واجهات أمامية في جدة. أساعد الشركات والمتاجر على بناء مواقع سريعة، جذابة، وتحوّل الزوار إلى عملاء.",
      cta: "شاهد الأعمال",
    },
    projects: {
      headingBefore: "نماذج من",
      headingHighlight: "أعمالي",
      checkLiveSite: "زيارة المشروع",
    },
    clients: {
      headingBefore: "آراء عملاء",
      headingHighlight: "وثقوا في شغلي",
    },
    experience: {
      headingBefore: "خبرة عملية",
      headingHighlight: "تخدم مشروعك",
    },
    approach: {
      headingBefore: "طريقة عمل",
      headingHighlight: "واضحة وبسيطة",
      phases: [
        {
          order: "الخطوة 1",
          title: "فهم الهدف ووضع الخطة",
          description:
            "نبدأ بفهم نشاطك، جمهورك، والنتيجة التي تريدها من الموقع. بعدها نحدد الصفحات، تجربة المستخدم، والمحتوى الذي يخدم هدفك التجاري.",
        },
        {
          order: "الخطوة 2",
          title: "تصميم وتنفيذ باحتراف",
          description:
            "أحوّل الخطة إلى واجهة عملية وسريعة، مع متابعة واضحة أثناء التنفيذ حتى تكون الصورة كاملة عندك في كل مرحلة.",
        },
        {
          order: "الخطوة 3",
          title: "تسليم وتجهيز للإطلاق",
          description:
            "أراجع التفاصيل، أحسّن التجربة، وأجهّز الموقع ليظهر بشكل احترافي على الجوال والكمبيوتر قبل التسليم النهائي.",
        },
      ],
    },
    footer: {
      headingBefore: "جاهز تطلع بموقع",
      headingHighlight: "يبيع ويقنع",
      headingAfter: "؟",
      paragraph:
        "خلينا نحول فكرتك إلى موقع أو متجر سريع، واضح، ومناسب لعملاءك.",
      cta: "ابدأ مشروعك الآن",
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
