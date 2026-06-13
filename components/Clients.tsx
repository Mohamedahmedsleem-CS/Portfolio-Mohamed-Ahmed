"use client";

import React from "react";

import { useLanguage } from "@/context/LanguageContext";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  const { lang, t, textDir } = useLanguage();

  const localizedTestimonials = testimonials.map((item) => ({
    quote: item.quote[lang],
    name: item.name[lang],
    title: item.title[lang],
    img: item.img,
  }));

  return (
    <div className="py-20 " id="testimonials">
      <h1 className="heading" dir={textDir}>
        {t.clients.headingBefore}{" "}
        <span className="text-purple">{t.clients.headingHighlight}</span>
      </h1>
      <div className="flex flex-col items-center maxx-lg:mt-10 ">
        <InfiniteMovingCards
          key={lang}
          items={localizedTestimonials}
          direction="right"
          speed="slow"
          textDir={textDir}
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
