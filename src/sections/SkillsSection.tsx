import { useEffect, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { skills as fallbackSkills } from "../data/skills";
import { portfolioApi } from "../services/portfolioApi";
import type { Skill } from "../types";

export function SkillsSection() {
  const [items, setItems] = useState<Skill[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await portfolioApi.getSkills();
        if (!cancelled) {
          setItems(data);
        }
      } catch (err) {
        if (!cancelled) {
          setItems(fallbackSkills);
          setError("DB 연결에 문제가 있어 로컬 데이터로 대체했습니다.");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="skills" className="space-y-8">
      <SectionHeader
        eyebrow="Skills"
        title="주요 스택과 협업 방식"
        description="React/TypeScript 기반 웹, Unity/ .NET 기반 게임·데스크톱, 그리고 데이터 주도 설계를 중심으로 협업합니다."
      />
      {error && <p className="text-sm text-amber-600">{error}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-card"
          >
            <p className="text-sm font-semibold text-accent">{group.category}</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
