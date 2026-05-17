import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Section, ServiceIcon } from "@/components/Section";
import { services, pricing } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NXC Badge" },
      { name: "description", content: "Web design, brand identity, web apps, logo, SEO and retainers — for creators and personal brands." },
      { property: "og:title", content: "Services — NXC Badge" },
      { property: "og:description", content: "Everything you need to show up online." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything you need to show up online." sub="Six disciplines, run by a small senior team. Pick one. Pick the lot. We scope honestly either way." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="bg-background p-10 group hover:bg-surface transition">
              <ServiceIcon name={s.icon} />
              <h3 className="font-display text-lg mt-6">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-0 bg-gold transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="How it works.">
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { n: "01", t: "Discovery", d: "A 60-minute call, a brief, a clear scope. We say yes — or we tell you who'd be a better fit." },
            { n: "02", t: "Design & Build", d: "Weekly check-ins, async Loom updates, live staging from week one. No reveal-day surprises." },
            { n: "03", t: "Launch & Grow", d: "Soft launch, hard launch, then optional retainers for content, SEO and the long game." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="border border-border p-10 relative">
              <span className="absolute top-6 right-6 font-display text-gold text-lg">{s.n}</span>
              <h3 className="font-display text-lg">{s.t}</h3>
              <div className="hairline my-5 w-10" />
              <p className="text-foreground/70 leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing" title="Project-based and retainer options. Let's talk.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
          {pricing.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.05} className="bg-background p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{p.tier}</p>
              <h3 className="font-display text-lg mt-3">{p.scope}</h3>
              <div className="hairline my-6 w-10" />
              <p className="font-display text-xl">{p.price}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-primary-foreground" data-magnetic>Start a project →</Link>
        </Reveal>
      </Section>
    </>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 pb-20 md:pb-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-gold" /> {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(1.875rem,4.5vw,3.75rem)] leading-[0.98] max-w-5xl tracking-tight">{title}</h1>
        {sub && <p className="mt-8 max-w-2xl text-lg text-foreground/70 leading-relaxed">{sub}</p>}
      </Reveal>
    </section>
  );
}
