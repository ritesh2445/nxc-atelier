import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { projects } from "@/data/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — NXC Badge" },
      { name: "description", content: "Selected projects from NXC Badge — websites, brands, apps and logos for creators and founders." },
      { property: "og:title", content: "Work — NXC Badge" },
      { property: "og:description", content: "A small portfolio. Carefully chosen." },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", "Branding", "Web", "App", "Logo"] as const;

function WorkPage() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const items = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter as any));
  return (
    <>
      <PageHero eyebrow="Selected work" title="A small portfolio. Carefully chosen." sub="We'd rather show you three projects we obsessed over than thirty we phoned in." />
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} data-magnetic
              className={`px-5 py-2 text-sm border transition ${filter === f ? "bg-gold text-primary-foreground border-gold" : "border-border hover:border-gold hover:text-gold"}`}>
              {f}
            </button>
          ))}
        </div>
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className={i % 3 === 0 ? "md:col-span-2" : ""}>
                <Link to="/work/$slug" params={{ slug: p.slug }} className="group block relative aspect-[16/10] overflow-hidden border border-border" data-magnetic>
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.cover }} />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/70 transition" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-foreground/60">
                      <span>{p.category}</span><span>{p.year}</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.client}</p>
                      <h3 className="font-display text-4xl md:text-5xl mt-2">{p.title}</h3>
                      <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition duration-500">
                        {p.tags.map(t => <span key={t} className="text-xs px-2.5 py-1 border border-gold/40 text-gold">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-32">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl">Have a project of your own?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-primary-foreground" data-magnetic>Start a conversation →</Link>
        </Reveal>
      </section>
    </>
  );
}
