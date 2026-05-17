import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — NXC Badge" },
      { name: "description", content: "Notes on web design, brand identity, SEO and the craft of building for creators." },
      { property: "og:title", content: "Journal — NXC Badge" },
      { property: "og:description", content: "Field notes from the studio." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Journal" title="Notes from the studio." sub="Long-form thinking on web design, brand systems, SEO and the craft of building things that last." />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group block border border-border" data-magnetic>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#1a1410] to-[#2b1a0c]" />
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
                  <span>Featured</span><span>·</span><span>{featured.category}</span><span>·</span><span>{featured.read}</span>
                </div>
                <h2 className="font-display text-xl md:text-xl mt-6 group-hover:text-gold transition">{featured.title}</h2>
                <p className="mt-5 text-foreground/70 leading-relaxed">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-gold">Read essay →</span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block border border-border p-8 hover:border-gold transition h-full" data-magnetic>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
                  <span>{p.category}</span><span>·</span><span>{p.read}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl mt-5 group-hover:text-gold transition leading-tight">{p.title}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold">Read →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
