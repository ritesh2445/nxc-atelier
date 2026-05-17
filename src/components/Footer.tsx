import { Link } from "@tanstack/react-router";
import { nav } from "@/data/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* Giant wordmark backdrop */}
      <div className="absolute inset-x-0 -bottom-6 md:-bottom-10 pointer-events-none select-none text-center">
        <p className="font-display italic text-[16vw] leading-[0.85] tracking-tight text-white/[0.035]">
          NXC Badge
        </p>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-32 pb-10">
        {/* Top: tagline + CTA */}
        <div className="grid md:grid-cols-12 gap-10 items-end pb-20 md:pb-28 border-b border-white/10">
          <div className="md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50 mb-6">— Let's collaborate</p>
            <h3 className="font-display italic text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1] tracking-tight">
              Build your presence. <br />
              <span className="text-gold">Own your internet.</span>
            </h3>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.25em]"
              data-magnetic
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition">
                →
              </span>
              Start a project
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-16">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-3 font-display">
              <img
                src={logo}
                alt="NXC Badge"
                className="h-14 w-14 object-contain"
                style={{ mixBlendMode: "screen" }}
              />
              <div className="flex flex-col leading-none">
                <span className="text-base tracking-[0.2em] font-medium">NXC BADGE</span>
                <span className="text-[9px] tracking-[0.35em] text-foreground/50 mt-1.5">EST. 2025</span>
              </div>
            </Link>
            <p className="mt-6 text-sm text-foreground/55 leading-relaxed max-w-xs">
              A people-first digital studio designing brands and websites for creators and personal brands. Led by Ritesh Martawar.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-5">Sitemap</p>
            <ul className="space-y-3 text-sm font-display italic">
              {nav.map(n => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-gold transition">{n.label}</Link>
                </li>
              ))}
              <li><Link to="/faq" className="hover:text-gold transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-5">Elsewhere</p>
            <ul className="space-y-3 text-sm font-display italic">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold transition">LinkedIn ↗</a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-gold transition">Twitter / X ↗</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold transition">Instagram ↗</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-gold transition">Dribbble ↗</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-5">Contact</p>
            <ul className="space-y-3 text-sm font-display italic">
              <li><a href="mailto:hello@nxcbadge.com" className="hover:text-gold transition">hello@nxcbadge.com</a></li>
              <li><span className="text-foreground/55">Mumbai, India</span></li>
              <li><span className="text-foreground/55">+91 · by appointment</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
          <p>© {new Date().getFullYear()} NXC Badge — A studio by Ritesh Martawar</p>
          <p>Crafted in India · Built for the world</p>
        </div>
      </div>
    </footer>
  );
}
