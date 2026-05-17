export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-6 bg-surface/40">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="font-display italic text-xl md:text-3xl px-8 whitespace-nowrap text-foreground/80">
            {t} <span className="text-gold mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
