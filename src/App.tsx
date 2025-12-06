import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { TimelineSection } from "./sections/TimelineSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-paper/90">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold text-ink-soft">Portfolio · 문제 해결형</span>
          <nav className="hidden items-center gap-5 text-sm font-medium text-ink-faint md:flex">
            <a className="hover:text-accent" href="#projects">
              Projects
            </a>
            <a className="hover:text-accent" href="#skills">
              Skills
            </a>
            <a className="hover:text-accent" href="#timeline">
              Timeline
            </a>
            <a className="hover:text-accent" href="#about">
              About
            </a>
            <a className="hover:text-accent" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:py-16">
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
