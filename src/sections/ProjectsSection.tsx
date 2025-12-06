import { useEffect, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { projects as fallbackProjects } from "../data/projects";
import { portfolioApi } from "../services/portfolioApi";
import type { Project } from "../types";

export function ProjectsSection() {
  const [items, setItems] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await portfolioApi.getProjects();
        if (!cancelled) {
          setItems(data);
          setSelected(data[0] ?? null);
        }
      } catch (err) {
        if (!cancelled) {
          console.log("Projects fetch failed, using fallback:", err);
          setItems(fallbackProjects);
          setSelected(fallbackProjects[0] ?? null);
          setError("DB connection failed. Showing local fallback data.");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        eyebrow="Projects"
        title="Projects that show clear problem-solving"
        description="Centered on Oculo and Coin Project, highlighting problem definition, approach, and results."
      />
      {error && <p className="text-sm text-amber-600">{error}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelected} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
