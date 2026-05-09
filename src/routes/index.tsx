import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/Marquee";
import { Reveal, StaggerText } from "@/components/Reveal";
import { projects, services, testimonials, faqs } from "@/data/site";
import heroPrism from "@/assets/hero-prism.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NXC Badge — A people-first digital studio for creators" },
      { name: "description", content: "Premium web design & development for creators and personal brands. Studio led by Ritesh Martawar." },
      { property: "og:title", content: "NXC Badge — A people-first digital studio" },
      { property: "og:description", content: "Premium web design and development for creators and personal brands." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Website Design", "Brand Identity", "Web Apps", "SEO", "Logo Design", "Strategy", "Motion"]} />
      <FeaturedWork />
      <WhoWeAre />
      <WhatWeDo />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ----------------- HERO ----------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yScroll = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative h-[110vh] flex items-end overflow-hidden bg-black">
      {/* Animated image layer: continuous slow drift + zoom + scroll parallax */}
      <motion.div style={{ y: yScroll }} className="absolute inset-0">
        <motion.div
          className="absolute inset-[-8%]"
          animate={{
            scale: [1.05, 1.15, 1.08, 1.05],
            x: ["0%", "-2%", "1.5%", "0%"],
            y: ["0%", "1.5%", "-1%", "0%"],
            rotate: [0, 1.2, -0.8, 0],
          }}
          transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
        >
          <video
            src="/hero.mp4"
            poster={heroPrism}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Color wash that pulses */}
        <motion.div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 40%, rgba(255,90,200,0.35), transparent 60%), radial-gradient(50% 50% at 75% 70%, rgba(255,160,60,0.3), transparent 60%)",
          }}
          animate={{ opacity: [0.55, 0.9, 0.6, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft vignette + bottom fade for legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

        {/* Subtle film grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </motion.div>

      {/* Top labels */}
      <motion.div style={{ opacity }} className="absolute top-28 md:top-32 left-6 md:left-10 text-[11px] tracking-[0.25em] uppercase text-foreground/60">
        02479
      </motion.div>
      <motion.div style={{ opacity }} className="absolute top-28 md:top-32 right-6 md:right-10 text-[11px] tracking-[0.25em] uppercase text-foreground/60">
        03569
      </motion.div>

      {/* Headline */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 px-6 md:px-10 pb-20 md:pb-28 max-w-[1500px]">
        <StaggerText
          text="A people first"
          className="font-display italic text-[clamp(3rem,11vw,11rem)] leading-[0.9] tracking-tight"
        />
        <StaggerText
          text="digital studio"
          className="font-display italic text-[clamp(3rem,11vw,11rem)] leading-[0.9] tracking-tight"
        />
      </motion.div>

      {/* Bottom UI */}
      <motion.div style={{ opacity }} className="absolute bottom-6 inset-x-0 px-6 md:px-10 flex items-end justify-between text-[11px] uppercase tracking-[0.25em] text-foreground/55">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.4 }}>
          ↓ Scroll to discover our world
        </motion.div>
        <Link to="/work" className="group inline-flex items-center gap-3 hover:text-foreground transition" data-magnetic>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition">
            ▶
          </span>
          Showreel
        </Link>
      </motion.div>
    </section>
  );
}

/* ----------------- FEATURED WORK ----------------- */
function FeaturedWork() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex items-end justify-between gap-10 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-6">— Featured Work</p>
              <h2 className="font-display italic text-[clamp(2.2rem,5vw,4.5rem)] leading-[1] tracking-tight">
                Design without compromise.
              </h2>
              <p className="mt-6 text-foreground/60 max-w-md leading-relaxed">
                Explore our blend of digital product design, website design and brand identity built for creators.
              </p>
            </div>
            <Link to="/work" className="group inline-flex items-center gap-3 text-sm" data-magnetic>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition">
                →
              </span>
              All Work
            </Link>
          </div>
        </Reveal>

        <div className="mt-20 space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 items-end"
                data-magnetic
              >
                <div className={`md:col-span-7 ${i % 2 ? "md:col-start-6" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className={`md:col-span-4 ${i % 2 ? "md:col-start-2 md:row-start-1 md:text-right" : ""}`}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/40 mb-4">
                    0{i + 1} / {p.year}
                  </p>
                  <h3 className="font-display italic text-4xl md:text-5xl leading-[1]">{p.title}</h3>
                  <p className="mt-4 text-foreground/65 max-w-md md:inline-block">{p.subtitle}</p>
                  <div className={`mt-5 flex flex-wrap gap-2 ${i % 2 ? "md:justify-end" : ""}`}>
                    {p.tags.map(t => (
                      <span key={t} className="text-[11px] uppercase tracking-[0.2em] text-foreground/55 border border-white/15 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- WHO WE ARE ----------------- */
function WhoWeAre() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-44 border-t border-white/5">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">— Who we are</p>
        </div>
        <Reveal className="md:col-span-9">
          <h2 className="font-display italic text-[clamp(1.8rem,3.6vw,3.5rem)] leading-[1.15] tracking-tight">
            NXC Badge is a people-first studio that cares as much about your business and your audience as you do.
            We're big on honesty, collaboration and good coffee — the foundations of every great partnership. No
            project is too small for our A-game. Our promise is simple: turn your ideas, big or small, into brands,
            websites and experiences that truly matter.
          </h2>
          <Link to="/about" className="mt-12 inline-flex items-center gap-3 text-sm" data-magnetic>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition">→</span>
            Discover our spark
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------- WHAT WE DO ----------------- */
function WhatWeDo() {
  const items = services.slice(0, 3).map((s, i) => ({
    n: `0${i + 1}`,
    title: s.title,
    desc: s.desc,
  }));
  return (
    <section className="px-6 md:px-10 py-32 md:py-44 border-t border-white/5">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-10">— What we do</p>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="grid md:grid-cols-12 gap-6 py-10 md:py-14 group">
                <div className="md:col-span-1 text-foreground/40 text-sm">{it.n}</div>
                <h3 className="md:col-span-5 font-display italic text-3xl md:text-5xl leading-[1.05] group-hover:text-gold transition">
                  {it.title}
                </h3>
                <p className="md:col-span-5 md:col-start-8 text-foreground/65 leading-relaxed max-w-lg">
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between flex-wrap gap-6">
          <p className="font-display italic text-2xl md:text-3xl max-w-xl">
            Discover our services and how we shape purpose-driven digital experiences.
          </p>
          <Link to="/services" className="group inline-flex items-center gap-3 text-sm" data-magnetic>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition">→</span>
            What we do
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------- TESTIMONIALS ----------------- */
function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-44 border-t border-white/5">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-6">— Testimonials</p>
        <h2 className="font-display italic text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] max-w-3xl">
          Some words from our valued clients.
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-background p-10 md:p-12">
              <p className="font-display italic text-2xl leading-snug text-foreground/90">"{t.quote}"</p>
              <div className="mt-10">
                <p className="font-display">{t.author}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mt-1">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- FAQ ----------------- */
function FAQ() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-44 border-t border-white/5">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-6">— FAQs</p>
          <h2 className="font-display italic text-4xl md:text-6xl leading-[1.05]">
            Questions, <br />answered.
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-white/10">
            {faqs.slice(0, 6).map((f, i) => (
              <details key={i} className="group border-b border-white/10 py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display italic text-xl md:text-2xl pr-6 group-hover:text-gold transition">
                    {f.q}
                  </span>
                  <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-foreground/60 transition group-open:rotate-45 group-open:bg-gold group-open:text-black group-open:border-gold">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-foreground/65 leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
          <Link to="/faq" className="mt-10 inline-flex items-center gap-3 text-sm" data-magnetic>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition">→</span>
            All questions
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------- FINAL CTA ----------------- */
function FinalCTA() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-48 border-t border-white/5 text-center">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-10">— Let's collaborate</p>
        <h2 className="font-display italic text-[clamp(2.8rem,9vw,9rem)] leading-[0.92] tracking-tight">
          Have a project <br />
          <span className="text-gold">in mind?</span>
        </h2>
        <Link to="/contact" className="group mt-14 inline-flex items-center gap-4 text-sm uppercase tracking-[0.25em]" data-magnetic>
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition text-lg">→</span>
          Start a project
        </Link>
      </div>
    </section>
  );
}
