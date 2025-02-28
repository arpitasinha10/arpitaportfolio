import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!href?.startsWith('#')) return;
      const element = document.querySelector(href);
      if (!element) return;
      element.scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white relative">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
