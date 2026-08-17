import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Journey } from "@/sections/Journey";
import { Lessons } from "@/sections/Lessons";
import { Projects } from "@/sections/Projects";
import { CaseStudies } from "@/sections/CaseStudies";
import { Ecosystem } from "@/sections/Ecosystem";
import { Skills } from "@/sections/Skills";
import { Future } from "@/sections/Future";
import { Contact } from "@/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Lessons />
        <Projects />
        <CaseStudies />
        <Ecosystem />
        <Skills />
        <Future />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
