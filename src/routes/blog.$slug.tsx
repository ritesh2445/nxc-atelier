import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} — NXC Badge Journal` },
      { name: "description", content: loaderData.post.excerpt },
      { property: "og:title", content: loaderData.post.title },
      { property: "og:description", content: loaderData.post.excerpt },
    ] : [],
  }),
  errorComponent: ({ error }) => <div className="px-6 py-32 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="px-6 py-32 text-center font-display text-3xl">Post not found.</div>,
  component: PostPage,
});

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "problem", label: "The problem" },
  { id: "approach", label: "Our approach" },
  { id: "takeaway", label: "Takeaway" },
];

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter(p => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      <article className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 pb-24">
        <Reveal>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold mb-6">
            <span>{post.category}</span><span>·</span><span>{post.read} read</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[1] max-w-4xl">{post.title}</h1>
          <p className="mt-8 max-w-2xl text-xl text-foreground/70 leading-relaxed">{post.excerpt}</p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 mt-20">
          <aside className="md:col-span-3 hidden md:block">
            <div className="sticky top-32">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contents</p>
              <ul className="space-y-3 text-sm">
                {toc.map(t => <li key={t.id}><a href={`#${t.id}`} className="text-foreground/70 hover:text-gold transition">— {t.label}</a></li>)}
              </ul>
            </div>
          </aside>
          <div className="md:col-span-9 prose-lg max-w-none space-y-6 text-foreground/85 leading-[1.8] text-lg">
            <h2 id="intro" className="font-display text-3xl text-foreground">Introduction</h2>
            <p>Most creators we meet are accidentally renting their audience. Instagram changes its algorithm, TikTok throttles a niche, YouTube demonetizes overnight — and a year of careful work loses half its value in a weekend.</p>
            <h2 id="problem" className="font-display text-3xl text-foreground">The problem</h2>
            <p>The platforms aren't villains. They're businesses optimizing for their own metrics. The mistake is treating them like real estate when they're actually leases — month-to-month, terms set by someone else.</p>
            <h2 id="approach" className="font-display text-3xl text-foreground">Our approach</h2>
            <p>A site you own does three things a platform never will: it captures attention you don't pay for, it converts that attention into something measurable, and it compounds — every essay, every case study, every project adds value that doesn't disappear.</p>
            <blockquote className="border-l-2 border-gold pl-6 font-display text-2xl text-foreground my-10">"The internet rewards the people who own a place on it."</blockquote>
            <h2 id="takeaway" className="font-display text-3xl text-foreground">Takeaway</h2>
            <p>If you've spent more than two years building an audience and you don't have a home base — a real one, not a Linktree — the next twelve months are the cheapest time to fix that. Start there.</p>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10 flex items-center gap-5">
          <div className="h-14 w-14 rounded-full border border-gold/40 flex items-center justify-center font-display text-gold">RM</div>
          <div>
            <p className="font-display text-lg">Ritesh Martawar</p>
            <p className="text-sm text-muted-foreground">Founder & Creative Director, NXC Badge</p>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 border-t border-border">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">Continue reading</p>
        <div className="grid md:grid-cols-2 gap-6">
          {related.map(p => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block border border-border p-8 hover:border-gold transition" data-magnetic>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{p.category}</p>
              <h3 className="font-display text-2xl mt-4 group-hover:text-gold transition">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-24">
        <Reveal className="border border-border bg-surface/40 p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Like the way we think? Let's build something.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-primary-foreground" data-magnetic>Book a discovery call →</Link>
        </Reveal>
      </section>
    </>
  );
}
