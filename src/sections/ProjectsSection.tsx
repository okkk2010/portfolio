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
          setItems(fallbackProjects);
          setSelected(fallbackProjects[0] ?? null);
          setError("DB 연결에 문제가 있어 로컬 데이터로 대체했습니다.");
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
        title="문제 해결이 명확한 프로젝트"
        description="Oculo와 Coin Project를 중심으로, 문제 → 접근 → 결과가 드러나는 스토리텔링에 맞춰 정리했습니다."
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
