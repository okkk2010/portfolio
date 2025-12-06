export function HeroSection() {
  
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-card md:p-12">
      <div className="absolute inset-0 opacity-60 blur-3xl" aria-hidden>
        <div className="pointer-events-none absolute left-10 top-4 h-48 w-48 rounded-full bg-accent/30" />
        <div className="pointer-events-none absolute right-12 top-20 h-56 w-56 rounded-full bg-blue-200/40" />
      </div>
      <div className="relative grid gap-8 md:grid-cols-1 md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Portfolio</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink-soft md:text-5xl">
            Developer focused on
            <br />
            solving motion sickness
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-faint">
            From a Windows overlay utility (Oculo) that eases 3D game motion sickness to an economy-driven 2D game (Coin Project),
            I build projects with clear problem, approach, and result.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-ink-soft px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-ink"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-ink-soft/20 px-5 py-3 text-sm font-semibold text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
