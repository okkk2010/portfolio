import { SectionHeader } from "../components/SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <SectionHeader
        eyebrow="Contact"
        title="함께 이야기해요"
        description="프로젝트 협업, 상담, 피드백 환영합니다."
      />
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-card md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink-soft">Email</p>
          <p className="text-sm text-ink-faint">example@portfolio.dev</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-ink-soft px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-ink"
            href="mailto:example@portfolio.dev"
          >
            메일 보내기
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-ink-soft/20 px-5 py-3 text-sm font-semibold text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
