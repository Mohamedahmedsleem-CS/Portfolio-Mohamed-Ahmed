"use client";

import { navItems } from "@/data";
import { LanguageContent } from "@/context/LanguageContext";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { FloatingNav } from "@/components/ui/FloatingNav";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full relative">
        <div className="absolute top-6 right-6 z-[6000]">
          <LanguageToggle />
        </div>
        <LanguageContent>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </LanguageContent>
        <FloatingWhatsApp />
      </div>
    </main>
  );
};

export default Home;
