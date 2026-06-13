"use client";

import { useLanguage } from "@/context/LanguageContext";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const { lang, textDir } = useLanguage();

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={`${item.id}-${lang}`}
            title={<span dir={textDir}>{item.title[lang]}</span>}
            description={
              item.description[lang] ? (
                <span dir={textDir}>{item.description[lang]}</span>
              ) : (
                ""
              )
            }
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
