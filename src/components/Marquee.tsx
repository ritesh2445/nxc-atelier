export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-6 bg-surface/40">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="font-display text-xl md:text-xl px-8 whitespace-nowrap text-foreground/90">
            {t} <span className="text-gold mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
