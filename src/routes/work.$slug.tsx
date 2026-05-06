import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.project.title} — NXC Badge` },
      { name: "description", content: `Case study: ${loaderData.project.title} for ${loaderData.project.client}.` },
      { property: "og:title", content: `${loaderData.project.title} — NXC Badge` },
      { property: "og:description", content: `Case study: ${loaderData.project.title} for ${loaderData.project.client}.` },
    ] : [],
  }),
  errorComponent: ({ error }) => <div className="px-6 py-32 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="px-6 py-32 text-center font-display text-3xl">Project not found.</div>,
  component: CasePage,
});

function CasePage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex(p => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  return (
    <>
      <section className="relative h-[80vh] -mt-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: project.cover }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-10 flex items-end pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{project.category} · {project.year}</p>
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95]">{project.title}</h1>
            <p className="mt-4 text-foreground/70">For {project.client}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Services</p>
            <ul className="mt-4 space-y-2">
              {project.tags.map(t => <li key={t} className="font-display text-xl">{t}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-6 text-foreground/80 leading-relaxed text-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Overview</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">{project.client} came to us with a problem most creators eventually have — a presence that no longer matched the work.</h2>
            <p>We rebuilt from first principles. New positioning, a new visual system, a hand-built site that loads in under a second and reads like a small magazine. The brief was simple: feel inevitable.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(n => (
            <Reveal key={n} delay={n * 0.05} className="aspect-[3/4] border border-border" >
              <div className="h-full w-full" style={{ background: project.cover }} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Results</p>
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            {[
              { n: "3.2×", l: "Inquiries / month" },
              { n: "0.8s", l: "Avg. load time" },
              { n: "Top 3", l: "Niche search ranking" },
            ].map(r => (
              <div key={r.l}>
                <p className="font-display text-6xl text-gold">{r.n}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{r.l}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-16 border-l-2 border-gold pl-6 max-w-3xl font-display text-2xl leading-snug">
            "The site genuinely changed the kind of clients I attract. Worth every rupee."
            <footer className="mt-4 text-sm text-muted-foreground not-italic">— {project.client}</footer>
          </blockquote>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="block group" data-magnetic>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Next project</p>
              <p className="font-display text-4xl md:text-6xl group-hover:text-gold transition">{next.title}</p>
            </div>
            <span className="font-display text-3xl text-gold">→</span>
          </div>
        </Link>
      </section>
    </>
  );
}
