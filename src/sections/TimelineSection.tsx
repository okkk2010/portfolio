import { useEffect, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { timeline as fallbackTimeline } from "../data/timeline";
import { portfolioApi } from "../services/portfolioApi";
import type { TimelineItem } from "../types";

export function TimelineSection() {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await portfolioApi.getTimeline();
        if (!cancelled) {
          setItems(data);
        }
      } catch (err) {
        if (!cancelled) {
          setItems(fallbackTimeline);
          setError("DB 연결에 문제가 있어 로컬 데이터로 대체했습니다.");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="timeline" className="space-y-8">
      <SectionHeader
        eyebrow="Timeline"
        title="경험의 맥락"
        description="멀미를 줄이는 데스크톱 유틸리티와 경제 기반 게임까지, 실험과 학습을 거쳐온 흐름입니다."
      />
      {error && <p className="text-sm text-amber-600">{error}</p>}
      <div className="space-y-4">
        {items.map((item) => (
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
