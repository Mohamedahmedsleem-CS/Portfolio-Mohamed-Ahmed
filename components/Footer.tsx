"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { useLanguage } from "@/context/LanguageContext";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const getSocialLabel = (img: string) => {
  if (img.includes("git")) return "GitHub";
  if (img.includes("link")) return "LinkedIn";
  if (img.includes("wha")) return "WhatsApp";
  return "Social media profile";
};

const Footer = () => {
  const { lang, t, textDir } = useLanguage();

  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]" dir={textDir}>
          {t.footer.headingBefore}{" "}
          <span className="text-purple">{t.footer.headingHighlight}</span>
          {t.footer.headingAfter}
        </h1>
        <p
          dir={textDir}
          className="text-white-200 md:mt-10 my-5 text-center"
        >
          {t.footer.paragraph}
        </p>
        <a href="mailto:mohamedselim29511@gmail.com">
          <MagicButton
            title={t.footer.cta}
            icon={<FaLocationArrow />}
            position="right"
            textDir={textDir}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p
          dir={textDir}
          className="md:text-base text-sm md:font-normal font-light"
        >
          {t.footer.copyright}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={getSocialLabel(info.img)}
              >
                <img src={info.img} alt="" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
