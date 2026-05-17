import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function Section({ eyebrow, title, right, children }: { eyebrow?: string; title?: string; right?: ReactNode; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32">
      {(eyebrow || title) && (
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              {eyebrow && <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-5">— {eyebrow}</p>}
              {title && <h2 className="font-display italic text-lg md:text-lg max-w-3xl leading-[1.05]">{title}</h2>}
            </div>
            {right}
          </div>
        </Reveal>
      )}
      {children}
    </section>
  );
}

export function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    monitor: "M3 5h18v11H3zM8 21h8M12 17v4",
    palette: "M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 3-2 4-4 4h-2a2 2 0 0 0-2 2c0 1 1 2 1 3a2 2 0 0 1-1 3z",
    code: "M8 6l-6 6 6 6M16 6l6 6-6 6",
    logo: "M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z",
    search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM21 21l-4.3-4.3",
    refresh: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-gold" fill="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name] ?? paths.monitor} />
    </svg>
  );
}
