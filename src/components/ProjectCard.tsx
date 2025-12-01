import { Pill } from "./Pill";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
      onClick={() => onSelect(project)}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Pill tone="accent">{project.year}</Pill>
          <span className="text-sm font-medium text-ink-faint">{project.platform}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-ink-soft">{project.title}</h3>
          <p className="text-sm font-medium text-accent">{project.tagline}</p>
          <p className="text-base leading-relaxed text-ink-faint">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.keywords.map((keyword) => (
            <Pill key={keyword}>{keyword}</Pill>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between text-sm text-ink-faint">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="text-accent transition group-hover:translate-x-1 group-hover:text-accent-strong">
          자세히 보기 →
        </span>
      </div>
    </article>
  );
}
