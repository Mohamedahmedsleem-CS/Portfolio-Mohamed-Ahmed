import type { LocalizedString } from "@/lib/i18n";

export const navItems = [
  {
    name: { ar: "نبذة", en: "About" } satisfies LocalizedString,
    link: "#about",
  },
  {
    name: { ar: "الأعمال", en: "Projects" } satisfies LocalizedString,
    link: "#projects",
  },
  {
    name: { ar: "آراء العملاء", en: "Testimonials" } satisfies LocalizedString,
    link: "#testimonials",
  },
  {
    name: { ar: "تواصل", en: "Contact" } satisfies LocalizedString,
    link: "#contact",
  },
];

export const gridItems = [
  {
    id: 1,
    title: {
      ar: "أتعامل مع مشروعك كمنتج له هدف واضح، وليس مجرد شكل جميل.",
      en: "I put client collaboration first, with clear and continuous communication throughout the project.",
    } satisfies LocalizedString,
    description: { ar: "", en: "" } satisfies LocalizedString,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: {
      ar: "تواصل واضح ومرونة تناسب وقتك.",
      en: "Fully flexible with communication across time zones.",
    } satisfies LocalizedString,
    description: { ar: "", en: "" } satisfies LocalizedString,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: { ar: "تقنيات حديثة", en: "My tech stack" } satisfies LocalizedString,
    description: {
      ar: "أدوات تساعد موقعك يكون أسرع وأسهل في التطوير",
      en: "Always improving my skills",
    } satisfies LocalizedString,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: {
      ar: "واجهات تجمع بين الشكل الاحترافي والتجربة السهلة.",
      en: "Passionate about technology and building high-quality web products.",
    } satisfies LocalizedString,
    description: { ar: "", en: "" } satisfies LocalizedString,
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: {
      ar: "حلول ويب قابلة للنمو من الفكرة إلى الإطلاق.",
      en: "Currently building an e-commerce store.",
    } satisfies LocalizedString,
    description: {
      ar: "من الفكرة إلى الإطلاق",
      en: "The inside scoop",
    } satisfies LocalizedString,
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: {
      ar: "عندك فكرة موقع أو متجر؟ خلينا نحولها لمنتج جاهز.",
      en: "Want to start a project together?",
    } satisfies LocalizedString,
    description: { ar: "", en: "" } satisfies LocalizedString,
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 7,
    title: {
      ar: "موارد التنمية الأولى للاستشارات المالية",
      en: "First Resources Development Financial Consulting",
    } satisfies LocalizedString,
    des: {
      ar: "موقع تعريفي يعرض خدمات الاستشارات المالية بثقة ووضوح، ويسهّل على العميل طلب الاستشارة.",
      en: "A premium Arabic corporate site for a financial consulting firm: polished RTL UX, clear service presentation, trustworthy branding, and consultation CTAs that build trust and drive inquiries.",
    } satisfies LocalizedString,
    img: "/first-resources.jpeg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://www.fdrfinconsult.com/",
  },
  {
    id: 8,
    title: {
      ar: "شركة مهايع الصناعية",
      en: "Mahiaa Company Industrial",
    } satisfies LocalizedString,
    des: {
      ar: "موقع مؤسسي يعرض خدمات الشركة الصناعية والتوريدات والجودة، مع تجربة سهلة لطلب عرض سعر.",
      en: "An industrial company website showcasing supply capabilities, materials, services, quality standards, a gallery, and a quote-request flow, with a strong corporate identity and fully responsive layout.",
    } satisfies LocalizedString,
    img: "/mahiaa.jpeg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://mahiaacompanyindustrial.com/",
  },
  {
    id: 9,
    title: {
      ar: "الفرع الإلكتروني لعطارة المكارم المميزة",
      en: "Al Makarem E-Branch Store",
    } satisfies LocalizedString,
    des: {
      ar: "متجر إلكتروني عربي يسهّل تصفح المنتجات والعروض والبحث والسلة لزيادة الطلبات.",
      en: "A complete Arabic e-commerce store with products, categories, pricing, discounts, cart, and search, delivering a smooth buying experience tailored to local customers.",
    } satisfies LocalizedString,
    img: "/store-1.jpeg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://almakarim-almumayyaza.vercel.app/",
  },
  {
    id: 1,
    title: { ar: "Gericht", en: "Gericht" } satisfies LocalizedString,
    des: {
      ar: "واجهة مطعم أنيقة تساعد العميل يتصفح القائمة ويصل للمعلومات بسرعة.",
      en: "Discover the perfect meal at Gericht. Enjoy a seamless dining experience with easy menu access and simple reservations.",
    } satisfies LocalizedString,
    img: "/res.jpeg",
    iconLists: ["/re.svg", "/ts.svg", "/bootstrap-4.svg"],
    link: " https://reactjsrest.vercel.app/",
  },
  {
    id: 2,
    title: { ar: "Tiem Zone", en: "Tiem Zone" } satisfies LocalizedString,
    des: {
      ar: "تجربة تسوق واضحة لعرض الساعات بطريقة جذابة وسهلة.",
      en: "Simplify your shopping experience with Tiem Zone. Seamlessly browse and find the perfect watch for any occasion.",
    } satisfies LocalizedString,
    img: "/watch.jpeg",
    iconLists: ["/html-1.svg", "/bootstrap-4.svg", "/logo-javascript.svg"],
    link: "https://time-zone-red.vercel.app/",
  },
  {
    id: 3,
    title: { ar: "MovieMingle", en: "MovieMingle" } satisfies LocalizedString,
    des: {
      ar: "موقع أفلام تفاعلي ببحث سريع وعرض منظم وتجربة سلسة.",
      en: "A dynamic movie website using React.js, integrating third-party APIs for real-time movie data with search, dynamic content rendering, and responsive design.",
    } satisfies LocalizedString,
    img: "/movei.jpeg",
    iconLists: [
      "/re.svg",
      "/bootstrap-4.svg",
      "/logo-javascript.svg",
      "/axios1.svg",
    ],
    link: "https://moviereactjs.vercel.app/",
  },
  {
    id: 4,
    title: { ar: "FlavorFind", en: "FlavorFind" } satisfies LocalizedString,
    des: {
      ar: "قائمة طعام ديناميكية تساعد المستخدم يختار بسرعة وبدون تعقيد.",
      en: "Explore a world of flavors with FlavorFind's dynamic menu. Effortlessly discover new dishes and customize your meal experience in just a few clicks.",
    } satisfies LocalizedString,
    img: "/menu.jpeg",
    iconLists: ["/re.svg", "/bootstrap-4.svg", "/logo-javascript.svg"],
    link: "https://menureactjs.vercel.app/",
  },
  {
    id: 5,
    title: { ar: "QueryQuest", en: "QueryQuest" } satisfies LocalizedString,
    des: {
      ar: "منصة أسئلة وأجوبة بتجربة واضحة للوصول للمعلومة بسهولة.",
      en: "Unlock knowledge with QueryQuest. Engage in dynamic conversations, ask questions, and get real-time answers from a vibrant community of experts.",
    } satisfies LocalizedString,
    img: "/q&a.jpeg",
    iconLists: ["/re.svg", "/bootstrap-4.svg", "/logo-javascript.svg"],
    link: " https://question-neon-pi.vercel.app/",
  },
  {
    id: 6,
    title: { ar: "BuildCon", en: "BuildCon" } satisfies LocalizedString,
    des: {
      ar: "واجهة عقارية منظمة تساعد المستخدم يستكشف العقارات بثقة.",
      en: "Discover your dream property with BuildCon. Browse listings, explore detailed features, and find the perfect home or investment opportunity—all in one seamless experience.",
    } satisfies LocalizedString,
    img: "/real.jpeg",
    iconLists: ["/html-1.svg", "/bootstrap-4.svg", "/logo-javascript.svg"],
    link: "https://real-estate-bootstrap5.vercel.app/",
  },
];

export const testimonials = [
  {
    quote: {
      ar: "محمد كان واضح وملتزم من البداية. فهم المطلوب بسرعة، والنتيجة كانت موقع احترافي يعكس صورة أفضل للعلامة.",
      en: "Collaborating with Mohamed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mohamed's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and enhance your brand, Mohamed is the ideal partner.",
    } satisfies LocalizedString,
    name: { ar: "محمد عمر", en: "Mohamed Omar" } satisfies LocalizedString,
    title: { ar: "عميل مستقل", en: "Freelance Client" } satisfies LocalizedString,
    img: "/profile.svg",
  },
  {
    quote: {
      ar: "محمد يهتم بالتفاصيل ويكتب كود منظم. لا ينفذ فقط، بل يفكر في تجربة المستخدم وجودة النتيجة.",
      en: "Working with Mohamed was a fantastic experience. His attention to detail, proactive approach, and ability to meet deadlines were truly impressive. Throughout our work together, Mohamed consistently demonstrated a strong understanding of React.js, producing clean and efficient code that enhanced the functionality of our projects.",
    } satisfies LocalizedString,
    name: {
      ar: "عبدالرحمن علاء",
      en: "Abdelrahman Alaa",
    } satisfies LocalizedString,
    title: {
      ar: "مدرّب واجهات أمامية",
      en: "Front-End Instructor",
    } satisfies LocalizedString,
    img: "/alaa.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: {
      ar: "تطوير واجهات أمامية",
      en: "Frontend Engineer Intern",
    } satisfies LocalizedString,
    desc: {
      ar: "تطوير واجهات React.js تفاعلية وسهلة الاستخدام.",
      en: "Helped build a web platform with React.js, improving interactivity.",
    } satisfies LocalizedString,
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: {
      ar: "تطوير متاجر إلكترونية",
      en: "E-commerce Store",
    } satisfies LocalizedString,
    desc: {
      ar: "متاجر تعرض المنتجات والعروض والسلة بطريقة واضحة.",
      en: "Designed and developed an e-commerce website with React.js.",
    } satisfies LocalizedString,
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: {
      ar: "مشاريع عملاء مستقلة",
      en: "Freelance App Dev Project",
    } satisfies LocalizedString,
    desc: {
      ar: "تنفيذ مشاريع ويب من الفكرة حتى التسليم.",
      en: "Led a client web app from concept to deployment.",
    } satisfies LocalizedString,
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: {
      ar: "واجهات احترافية",
      en: "Lead Frontend Developer",
    } satisfies LocalizedString,
    desc: {
      ar: "واجهات حديثة مناسبة لمواقع الشركات والمتاجر.",
      en: "Built and maintained user-facing features with modern frontend technologies.",
    } satisfies LocalizedString,
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Mohamedahmedsleem-CS",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mohamed-ahmed-a3319b187/",
  },
];
