import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/data/site";
import logo from "@/assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      {/* Logo (top-left) */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-auto">
        <Link to="/" className="flex items-baseline gap-1.5 font-display" onClick={() => setOpen(false)}>
          <span className="text-lg tracking-tight">NXC Badge</span>
          <span className="text-[10px] text-foreground/60 align-super">™</span>
        </Link>
      </div>

      {/* Centered glass pill nav */}
      <motion.nav
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        className={`hidden md:flex pointer-events-auto absolute top-5 left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 px-2 py-1.5 text-[13px] backdrop-blur-xl transition-colors ${
          scrolled ? "bg-black/55" : "bg-black/30"
        }`}
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        {nav.filter(n => n.to !== "/").map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="rounded-full px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground bg-white/10" }}
          >
            {n.label}
          </Link>
        ))}
        <Link to="/contact" className="rounded-full px-4 py-2 text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground bg-white/10" }}>
          Contact
        </Link>
      </motion.nav>

      {/* Right: menu trigger */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-auto">
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-white/10 transition"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-px w-4 bg-foreground transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-foreground transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="pointer-events-auto fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {nav.map((n, i) => (
              <motion.div key={n.to} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                <Link to={n.to} onClick={() => setOpen(false)} className="font-display text-5xl md:text-7xl hover:text-gold transition">{n.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <Link to="/contact" onClick={() => setOpen(false)} className="font-display text-5xl md:text-7xl text-gold">Contact →</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
