import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroParticles } from "@/components/HeroParticles";
import { Marquee } from "@/components/Marquee";
import { Reveal, StaggerText } from "@/components/Reveal";
import { projects, services, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NXC Badge — Web design studio for creators & personal brands" },
      { name: "description", content: "We design and build digital identities for creators who refuse to be generic. A studio by Ritesh Martawar." },
      { property: "og:title", content: "NXC Badge — Build your presence. Own your internet." },
      { property: "og:description", content: "Premium web design and development for creators and personal brands." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-24 pt-24">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
        <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-10 py-20">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-gold mb-8 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-gold" /> NXC Badge · Est. atelier
          </motion.p>
          <StaggerText
            text="Build your presence. Own your internet."
            className="font-display text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl"
          />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 max-w-xl text-lg text-foreground/70 leading-relaxed">
            We design and build digital identities for creators who refuse to be generic.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/work" className="border border-foreground/30 px-7 py-3.5 text-sm hover:border-gold hover:text-gold transition" data-magnetic>
              See our work
            </Link>
            <Link to="/contact" className="bg-gold px-7 py-3.5 text-sm text-primary-foreground hover:opacity-90 transition" data-magnetic>
              Book a call →
            </Link>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Scroll ↓
        </motion.div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Website Design", "Brand Identity", "Web Apps", "SEO", "Logo Design", "Strategy"]} />

      {/* WHAT WE DO */}
      <Section eyebrow="What we do" title="Three disciplines. One obsession with craft.">
        <div className="grid md:grid-cols-3 gap-px bg-border mt-16">
          {[
            { t: "Design", d: "Editorial direction, brand systems, type and color — the soul of how your work is felt before it's understood." },
            { t: "Development", d: "Hand-built React and Next.js. Performance, accessibility and motion that make sites feel inevitable." },
            { t: "Strategy", d: "Positioning, narrative and SEO architecture so the work isn't just beautiful — it actually converts." },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.1} className="bg-background p-10 md:p-14">
              <p className="font-display text-gold text-sm tracking-widest">0{i + 1}</p>
              <div className="hairline my-6 w-12" />
              <h3 className="font-display text-3xl">{c.t}</h3>
              <p className="mt-5 text-foreground/70 leading-relaxed">{c.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WORK */}
      <Section eyebrow="Selected work" title="Recent commissions" right={<Link to="/work" className="text-sm text-gold hover:underline">All work →</Link>}>
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/work/$slug" params={{ slug: p.slug }} className="group block relative aspect-[4/3] overflow-hidden border border-border" data-magnetic>
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.cover }} />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/70 transition" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-foreground/60">
                    <span>{p.category}</span><span>{p.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                    <div className="mt-3 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition duration-500">
                      {p.tags.map(t => <span key={t} className="text-xs px-2.5 py-1 border border-gold/40 text-gold">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ABOUT SNIPPET */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] bg-gradient-to-br from-surface to-background border border-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center font-display text-8xl text-gold/30">RM</div>
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Ritesh Martawar</div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">The studio</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A small studio with one rule: every project leaves better than it came in.</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">NXC Badge is led by Ritesh Martawar — a designer-developer who left agency life to build a place where creators get treated like the artists they are. No templates. No farmed-out work. Just careful, considered craft.</p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-gold border-b border-gold/50 pb-1">Meet Ritesh →</Link>
          </Reveal>
        </div>
      </Section>

      {/* SERVICES TEASER */}
      <Section eyebrow="Services" title="Everything you need to show up online.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-16">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="bg-background p-8 group hover:bg-surface transition">
              <ServiceIcon name={s.icon} />
              <h3 className="font-display text-xl mt-6">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              <div className="mt-5 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Words" title="From clients we're proud of.">
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className="border border-border p-8 bg-surface/40">
              <p className="text-gold font-display text-3xl leading-none">"</p>
              <p className="mt-4 text-foreground/80 leading-relaxed">{t.quote}</p>
              <div className="hairline my-6 w-10" />
              <p className="font-display">{t.author}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NXC BADGE BANNER */}
      <section className="relative py-24 my-24 overflow-hidden border-y border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">The ecosystem</p>
          <h3 className="mt-6 font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">Part of the NXC Badge ecosystem — a network of studios, creators and quietly serious operators.</h3>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] max-w-5xl">Ready to build something <em className="text-gold not-italic">remarkable?</em></h2>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-gold px-8 py-4 text-primary-foreground" data-magnetic>
            Book a discovery call →
          </Link>
        </Reveal>
      </section>
    </>
  );
}

export function Section({ eyebrow, title, right, children }: { eyebrow?: string; title?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-28">
      {(eyebrow || title) && (
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{eyebrow}</p>}
              {title && <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">{title}</h2>}
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
