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
          console.log("Timeline fetch failed, using fallback:", err);
          setItems(fallbackTimeline);
          setError("DB connection failed. Showing local fallback data.");
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
        title="Experience timeline"
        description="From motion-sickness overlay utility to an economy-driven 2D game, summarized by year."
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
                <li key={line}>- {line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
