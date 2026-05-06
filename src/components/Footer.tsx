import { Link } from "@tanstack/react-router";
import { nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center border border-gold/60 text-gold font-display text-sm">N</span>
              <span className="font-display text-lg">NXC <span className="text-gold">Badge</span></span>
            </div>
            <p className="mt-6 font-display text-3xl md:text-4xl leading-tight max-w-md">Build your presence. Own your internet.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-gold border-b border-gold/50 pb-1" data-magnetic>
              Let's build something →
            </Link>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Sitemap</p>
            <ul className="space-y-2.5 text-sm">
              {nav.map(n => <li key={n.to}><Link to={n.to} className="hover:text-gold transition">{n.label}</Link></li>)}
              <li><Link to="/faq" className="hover:text-gold transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Elsewhere</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="mailto:hello@nxcbadge.com" className="hover:text-gold transition">hello@nxcbadge.com</a></li>
              <li><a href="#" className="hover:text-gold transition">LinkedIn ↗</a></li>
              <li><a href="#" className="hover:text-gold transition">Twitter / X ↗</a></li>
              <li><a href="#" className="hover:text-gold transition">Instagram ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} NXC Badge. A studio by Ritesh Martawar.</p>
          <p>Crafted in India · Built for the world.</p>
        </div>
      </div>
    </footer>
  );
}
