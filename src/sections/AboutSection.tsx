import { SectionHeader } from "../components/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="space-y-8">
      <SectionHeader
        eyebrow="About"
        title="Engineering philosophy"
        description="Value fast problem definition, iterative improvement, data-driven UI, and collaboration-first culture."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card">
          <h3 className="text-lg font-semibold text-ink-soft">Strengths</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>- Organize every deliverable as Problem → Approach → Result</li>
            <li>- Maximize reuse with data-driven design and UI/UX presets</li>
            <li>- Lead iterative improvements from QA/user feedback</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card">
          <h3 className="text-lg font-semibold text-ink-soft">Interests</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>- Interaction patterns that reduce motion sickness / steady gaze</li>
            <li>- UI patterns that span games, desktop, and web</li>
            <li>- Repeating experiments to products with Unity and WinForms</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
