import { Pill } from "./Pill";
import type { Project } from "../types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 px-4 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Pill tone="accent">{project.year}</Pill>
              <span className="text-sm font-medium text-ink-faint">{project.platform}</span>
            </div>
            <h3 className="text-2xl font-semibold text-ink-soft">{project.title}</h3>
            <p className="text-sm font-medium text-accent">{project.tagline}</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-slate-200 px-3 py-1 text-sm text-ink-faint hover:border-accent hover:text-accent"
            onClick={onClose}
          >
            닫기
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <InfoBlock title="Problem" body={project.problem} />
          <InfoBlock title="Approach" body={project.approach} />
          <InfoBlock title="Result" body={project.result} />
          <InfoBlock title="Learnings" body={project.learned} />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <InfoBlock title="Role" body={project.role} />
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="text-sm font-semibold text-ink-soft">Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-md bg-white px-2 py-1 text-xs font-medium text-ink-faint shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:border-accent-strong hover:text-accent-strong"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

type InfoBlockProps = {
  title: string;
  body: string;
};

function InfoBlock({ title, body }: InfoBlockProps) {
  return (
    <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">{title}</p>
      <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
