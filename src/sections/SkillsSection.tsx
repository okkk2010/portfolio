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
          console.log("Skills fetch failed, using fallback:", err);
          setItems(fallbackSkills);
          setError("DB connection failed. Showing local fallback data.");
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
        title="Core stacks and ways of working"
        description="Focused on React/TypeScript for web, Unity/.NET for games/desktop, and data-driven design."
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
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
