import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { team } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NXC Badge" },
      { name: "description", content: "A studio led by Ritesh Martawar. We work with creators and personal brands who refuse to be generic." },
      { property: "og:title", content: "About — NXC Badge" },
      { property: "og:description", content: "Craft. Clarity. Partnership. Excellence." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Craft", d: "We sweat the parts you'll never see, because that's why the parts you see feel right." },
  { t: "Clarity", d: "No jargon, no smoke. Clear scopes, clear prices, clear next steps — every week." },
  { t: "Partnership", d: "We work with you, not for you. Long after launch, we're still in your corner." },
  { t: "Excellence", d: "If it isn't worth doing properly, we don't do it. Standards over volume, always." },
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind", "Framer", "Sanity", "Figma", "Vercel"];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The studio" title="A studio for creators who treat their brand like the business it is." sub="NXC Badge is led by Ritesh Martawar — a designer-developer who spent six years inside agencies before deciding to build something quieter, sharper and significantly more honest." />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] border border-border bg-gradient-to-br from-surface to-background relative">
              <div className="absolute inset-0 flex items-center justify-center font-display text-9xl text-gold/30">RM</div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 space-y-5 text-foreground/80 leading-relaxed">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Founder note</p>
            <p className="font-display text-2xl text-foreground leading-snug">"I started NXC Badge because creators deserve the same caliber of work that Fortune 500s pay millions for — without the bureaucracy that makes it bad."</p>
            <p>I grew up watching the internet democratize creative careers, then spent my early career inside agencies that treated creators like a budget tier. The work was templated. The relationships were transactional. The output, mostly, was forgettable.</p>
            <p>NXC Badge is the studio I wished existed when I first started. Small enough to care, senior enough to deliver, opinionated enough to push back. We work with people we believe in, on projects we'd put on our wall.</p>
            <p className="text-gold font-display text-xl">— Ritesh Martawar</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal><p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Values</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl">Four pillars. Non-negotiable.</h2></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05} className="bg-background p-10">
              <p className="font-display text-gold text-sm tracking-widest">0{i + 1}</p>
              <h3 className="font-display text-2xl mt-4">{v.t}</h3>
              <div className="hairline my-5 w-10" />
              <p className="text-foreground/70 leading-relaxed">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal><p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Stack</p>
          <h2 className="font-display text-4xl md:text-6xl">Tools we trust.</h2></Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map(s => <span key={s} className="border border-border px-5 py-2.5 text-sm hover:border-gold hover:text-gold transition">{s}</span>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal><p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Team</p>
          <h2 className="font-display text-4xl md:text-6xl">Six people. One standard.</h2></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {team.map((m, i) => {
            const initials = m.name.split(" ").map(n => n[0]).join("");
            return (
              <Reveal key={m.name} delay={i * 0.05} className="border border-border p-8 text-center group hover:border-gold transition">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-surface to-background border border-border group-hover:border-gold/60 transition flex items-center justify-center font-display text-3xl text-gold">{initials}</div>
                <h3 className="font-display text-xl mt-6">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal className="border border-border p-12 md:p-16 bg-surface/40">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">The ecosystem</p>
          <h2 className="font-display text-3xl md:text-5xl mt-6 max-w-3xl leading-tight">NXC Badge is part of a larger network of studios, creators and operators — quietly building the next generation of creator-first brands.</h2>
          <p className="mt-6 text-foreground/70 max-w-2xl leading-relaxed">For our clients, that means access to writers, photographers, motion designers and strategists when a project calls for it — without the bloat of a traditional agency roster.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">Want to work together?</h2>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-gold px-8 py-4 text-primary-foreground" data-magnetic>Start the conversation →</Link>
        </Reveal>
      </section>
    </>
  );
}
