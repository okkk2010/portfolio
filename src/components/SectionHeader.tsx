type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-ink-soft md:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-base text-ink-faint">{description}</p> : null}
      </div>
    </div>
  );
}
