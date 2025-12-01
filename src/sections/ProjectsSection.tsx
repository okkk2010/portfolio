import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../types";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(projects[0]);

  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        eyebrow="Projects"
        title="문제 해결이 명확한 프로젝트"
        description="Oculo와 Coin Project를 중심으로, 문제 → 접근 → 결과가 드러나는 스토리텔링에 맞춰 정리했습니다."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelected} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
