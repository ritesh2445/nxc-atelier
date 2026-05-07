export const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export const services = [
  { icon: "monitor", title: "Website Design & Development", desc: "Editorial, conversion-focused websites engineered from scratch — no templates, no shortcuts." },
  { icon: "palette", title: "Brand Identity & Visual Design", desc: "Logos, type systems and visual languages that make your brand impossible to confuse with anyone else." },
  { icon: "code", title: "Web Apps / SaaS Products", desc: "Production-grade React applications, dashboards and tools — built to scale with your audience." },
  { icon: "logo", title: "Logo Design", desc: "Marks with meaning. Considered, timeless and built to live across every surface you'll ever need." },
  { icon: "search", title: "SEO & Performance Optimization", desc: "Technical SEO, Core Web Vitals and content architecture so the right people actually find you." },
  { icon: "refresh", title: "Maintenance & Retainers", desc: "An always-on partner for iteration, content drops, experiments and the next phase of growth." },
];

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const projects = [
  { slug: "atelier-noir", title: "Atelier Noir", client: "Fashion Editor", category: "Web", subtitle: "A digital home for a fashion editor", year: "2025", tags: ["UI Design", "Brand Design"], image: work1, cover: "linear-gradient(135deg,#1a1410,#2b1a0c)" },
  { slug: "vertex-studio", title: "Vertex Studio", client: "Music Producer", category: "Branding", subtitle: "Identity for a producer with range", year: "2025", tags: ["Brand Design", "Packaging"], image: work2, cover: "linear-gradient(135deg,#0f1418,#1c2630)" },
  { slug: "mira-protocol", title: "Mira Protocol", client: "AI Founder", category: "App", subtitle: "A calmer interface for an AI tool", year: "2024", tags: ["UX Design", "UI Design"], image: work3, cover: "linear-gradient(135deg,#181018,#2a1428)" },
  { slug: "north-cellar", title: "North Cellar", client: "Wine Curator", category: "Web", subtitle: "An e-commerce site reimagined", year: "2024", tags: ["UI Design", "UX Design", "Brand"], image: work4, cover: "linear-gradient(135deg,#16110a,#2a1d10)" },
];

export const testimonials = [
  { quote: "Ritesh translated a vague idea into a brand I'm genuinely proud to send people to. It feels like me — but sharper.", author: "Aarav K.", role: "Creator, 320K subs" },
  { quote: "We launched a week early, ranked on page one in two months, and tripled inquiries. The craft is the strategy.", author: "Sana M.", role: "Founder, Lumen Studio" },
  { quote: "Most agencies sell you a website. NXC Badge sells you a presence — there's a real difference.", author: "Devansh R.", role: "Author & Speaker" },
];

export const team = [
  { name: "Ritesh Martawar", role: "Founder & Creative Director" },
  { name: "Ishan Apte", role: "Co-Founder & Outreach" },
  { name: "Rushi Mahajan", role: "Design" },
  { name: "Vishal Pandey", role: "Backend Developer" },
  { name: "Meghant Darji", role: "Backend Developer" },
  { name: "Saksham Jiddewar", role: "Social Media Manager" },
];

export const pricing = [
  { tier: "Starter", scope: "Logo + Brand Identity", price: "₹25K–₹60K" },
  { tier: "Launch", scope: "Website 5–8 pages", price: "₹75K–₹1.5L" },
  { tier: "Growth", scope: "Website + Brand + SEO", price: "₹1.5L–₹3L" },
  { tier: "Custom", scope: "Web App / SaaS — scoped", price: "₹3L+" },
];

export const posts = [
  { slug: "websites-for-creators", title: "Why creators need websites, not link-in-bios", excerpt: "The platform you don't own can change the rules overnight. Here's what to build instead — and why it pays back in years, not weeks.", category: "Web Design for Creators", read: "6 min" },
  { slug: "brand-systems-101", title: "Brand systems for personal brands", excerpt: "Logo, type, color, voice — and the boring decisions that separate a memorable brand from a forgettable one.", category: "Brand Identity", read: "8 min" },
  { slug: "case-atelier-noir", title: "Case study: Atelier Noir", excerpt: "How we rebuilt a fashion editor's digital home in 28 days — and tripled her press inquiries in the first month.", category: "Case Studies", read: "5 min" },
  { slug: "stack-2025", title: "Our 2025 build stack", excerpt: "Next.js, React, Tailwind, Sanity, Framer — and the small choices that quietly make sites feel premium.", category: "Tech & Tools", read: "7 min" },
  { slug: "seo-for-creators", title: "SEO that actually works for creators", excerpt: "Forget keyword stuffing. Here's how to be the obvious answer when someone Googles your name or your niche.", category: "Web Design for Creators", read: "9 min" },
];

export const faqs = [
  { cat: "Working with us", q: "What's your typical project timeline?", a: "Brand identity: 2–3 weeks. Websites: 4–8 weeks depending on scope. Web apps: 8–16 weeks. We share a week-by-week plan before kickoff so nothing surprises you." },
  { cat: "Working with us", q: "Do you work with creators outside India?", a: "Yes — we work with creators and founders worldwide. Most of our communication is async, with one weekly call in your timezone." },
  { cat: "Working with us", q: "Who actually does the work?", a: "A small senior team. Ritesh leads creative direction on every project. You'll meet the designer and developer assigned to your build on day one." },
  { cat: "Working with us", q: "Can you take over a half-built project?", a: "Sometimes — it depends on the codebase. We'll do a paid 1-week audit and tell you honestly whether to continue or rebuild." },
  { cat: "Pricing & Payments", q: "How do you price projects?", a: "Fixed scope = fixed price. Open-ended work runs on a monthly retainer. We share full numbers in our first call — no surprise invoices, ever." },
  { cat: "Pricing & Payments", q: "Do you offer payment plans?", a: "Yes. Standard split is 40% to start, 30% at design approval, 30% at launch. For larger projects we can spread it across more milestones." },
  { cat: "Pricing & Payments", q: "Do you take equity?", a: "Occasionally, for early-stage founders we believe in. Cash-only is the default and always an option." },
  { cat: "Pricing & Payments", q: "Do prices include hosting?", a: "First year of hosting on Vercel / Cloudflare is included on Launch and above. After that it's typically ₹0–₹2K/month depending on traffic." },
  { cat: "Technical", q: "What stack do you build on?", a: "Next.js or React with TypeScript, Tailwind, Sanity / Payload for CMS, deployed on Vercel or Cloudflare. We pick boring, fast, well-supported tools." },
  { cat: "Technical", q: "Will I be able to edit the site myself?", a: "Yes. Every site ships with a CMS so you can update copy, images and posts without touching code." },
  { cat: "Technical", q: "Do you handle SEO?", a: "Technical SEO is included on every site (Core Web Vitals, schema, sitemaps, internal linking). Ongoing content SEO is offered as a retainer." },
  { cat: "Technical", q: "What about post-launch support?", a: "30 days of free post-launch fixes. After that, optional retainers from ₹15K/month for ongoing iteration, content and experiments." },
];
