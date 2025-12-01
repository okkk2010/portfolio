export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-card md:p-12">
      <div className="absolute inset-0 opacity-60 blur-3xl" aria-hidden>
        <div className="pointer-events-none absolute left-10 top-4 h-48 w-48 rounded-full bg-accent/30" />
        <div className="pointer-events-none absolute right-12 top-20 h-56 w-56 rounded-full bg-blue-200/40" />
      </div>
      <div className="relative grid gap-8 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Portfolio</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink-soft md:text-5xl">
            멀미를 줄이는
            <br />
            문제 해결형 개발자
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-faint">
            3D 게임 멀미를 완화하는 Windows 오버레이 유틸리티(Oculo)부터 경제/이벤트를 결합한 2D
            게임(Coin Project)까지, 문제-접근-결과가 명확한 프로젝트를 만듭니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-ink-soft px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-ink"
              href="#projects"
            >
              프로젝트 보기
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-ink-soft/20 px-5 py-3 text-sm font-semibold text-ink-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              href="#contact"
            >
              연락하기
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 to-slate-100/80 p-6 shadow-inner backdrop-blur">
            <p className="text-sm font-semibold text-accent">Key Focus</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>• Problem → Approach → Result로 구조화된 스토리</li>
              <li>• 데이터 주도 UI/UX와 프리셋 기반 확장성</li>
              <li>• 게임/데스크톱/웹을 넘나드는 실험적 개발</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
