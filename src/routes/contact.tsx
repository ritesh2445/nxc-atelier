import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NXC Badge" },
      { name: "description", content: "Start a project, book a discovery call, or just say hello." },
      { property: "og:title", content: "Contact — NXC Badge" },
      { property: "og:description", content: "Let's build something together." },
    ],
  }),
  component: ContactPage,
});

type FormData = {
  name: string; email: string; type: string; budget: string; brief: string; source: string;
};

function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("inquiry", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something together." sub="Tell us a little about the project. We reply to every inquiry within one working day — usually faster." />

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <Field label="Your name" error={errors.name?.message}>
                <input {...register("name", { required: "Required" })} className="input" placeholder="Ritesh Martawar" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register("email", { required: "Required" })} className="input" placeholder="you@studio.com" />
              </Field>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Project type">
                  <select {...register("type")} className="input">
                    {["Website Design", "Brand Identity", "Logo Design", "Web App / SaaS", "SEO", "Maintenance Retainer", "Not sure yet"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Budget">
                  <select {...register("budget")} className="input">
                    {["Under ₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L–₹5L", "₹5L+", "Let's discuss"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Tell us about the project" error={errors.brief?.message}>
                <textarea rows={6} {...register("brief", { required: "Required" })} className="input" placeholder="What are you building? What's the timeline? Anything we should know..." />
              </Field>
              <Field label="How did you hear about us?">
                <input {...register("source")} className="input" placeholder="Twitter, a friend, Google..." />
              </Field>
              <button type="submit" className="bg-gold px-8 py-4 text-primary-foreground inline-flex items-center gap-2 hover:opacity-90 transition" data-magnetic>
                Send inquiry →
              </button>
              {sent && <p className="text-gold text-sm">Inquiry received. We'll be in touch within one working day.</p>}
            </form>
          </Reveal>

          <aside className="md:col-span-5 space-y-10">
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Or book directly</p>
              <div className="mt-4 border border-border bg-surface/40 aspect-square flex flex-col items-center justify-center text-center p-8">
                <p className="font-display text-2xl">Discovery call</p>
                <p className="text-sm text-muted-foreground mt-2">30 minutes · Zoom · Free</p>
                <a href="#" className="mt-6 border border-gold text-gold px-6 py-2.5 hover:bg-gold hover:text-primary-foreground transition" data-magnetic>Open Calendly →</a>
                <p className="text-xs text-muted-foreground mt-6">Calendly embed placeholder</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Elsewhere</p>
              <ul className="mt-4 space-y-3">
                <li><a href="mailto:hello@nxcbadge.com" className="hover:text-gold transition">hello@nxcbadge.com</a></li>
                <li><a href="#" className="hover:text-gold transition">LinkedIn ↗</a></li>
                <li><a href="#" className="hover:text-gold transition">Twitter / X ↗</a></li>
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <style>{`.input{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:0.85rem 0;color:var(--foreground);outline:none;font-size:1rem;transition:border-color .25s}.input:focus{border-color:var(--gold)}select.input{appearance:none}textarea.input{resize:vertical}`}</style>
    </>
  );
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
