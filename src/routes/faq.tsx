import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — NXC Badge" },
      { name: "description", content: "Answers to common questions about working with NXC Badge — process, pricing, timelines and tech." },
      { property: "og:title", content: "FAQ — NXC Badge" },
      { property: "og:description", content: "Process, pricing, timelines, tech." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const cats = Array.from(new Set(faqs.map(f => f.cat)));
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered honestly." sub="If something here doesn't cover your situation, write to us — we reply to every question." />
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pb-24">
        {cats.map((cat, ci) => (
          <Reveal key={cat} delay={ci * 0.05} className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">{cat}</p>
            <div className="border-t border-border">
              {faqs.filter(f => f.cat === cat).map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </Reveal>
        ))}
        <Reveal className="mt-24 border border-border bg-surface/40 p-12 text-center">
          <h2 className="font-display text-xl md:text-lg">Still wondering?</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-primary-foreground" data-magnetic>Ask us directly →</Link>
        </Reveal>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between gap-6 py-6 text-left group" data-magnetic>
        <span className="font-display text-xl md:text-lg group-hover:text-gold transition">{q}</span>
        <span className={`text-gold text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="pb-6 pr-12 text-foreground/70 leading-relaxed max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
