import { SectionHeader } from "../components/SectionHeader";
import { timeline } from "../data/timeline";

export function TimelineSection() {
  return (
    <section id="timeline" className="space-y-8">
      <SectionHeader
        eyebrow="Timeline"
        title="경험의 맥락"
        description="멀미를 줄이는 데스크톱 유틸리티와 경제 기반 게임까지, 실험과 학습을 거쳐온 흐름입니다."
      />
      <div className="space-y-4">
        {timeline.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold text-ink-soft">{item.title}</h3>
              <span className="text-sm font-semibold text-accent">{item.period}</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {item.items.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
