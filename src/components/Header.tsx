import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex h-8 w-8 items-center justify-center border border-gold/60 text-gold font-display text-sm">N</span>
          <span className="font-display text-lg tracking-wide">NXC <span className="text-gold">Badge</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="relative text-foreground/80 hover:text-foreground transition-colors"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition" data-magnetic>
            Book a Call →
          </Link>
          <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block h-px w-6 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {nav.map((n, i) => (
              <motion.div key={n.to} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                <Link to={n.to} onClick={() => setOpen(false)} className="font-display text-4xl">{n.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <Link to="/contact" onClick={() => setOpen(false)} className="bg-gold px-6 py-3 text-primary-foreground">Book a Call →</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
