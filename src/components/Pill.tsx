type PillProps = {
  children: string;
  tone?: "accent" | "muted";
};

export function Pill({ children, tone = "muted" }: PillProps) {
  const toneClasses =
    tone === "accent"
      ? "bg-accent/10 text-accent border-accent/30"
      : "bg-white/60 text-ink-faint border-slate-200";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses}`}
    >
      {children}
    </span>
  );
}
