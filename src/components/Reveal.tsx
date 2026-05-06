import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerText({ text, className, as: As = "h1" as any, delay = 0 }: { text: string; className?: string; as?: any; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  const v: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.div ref={ref} variants={v} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      <As className="m-0">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
            <motion.span variants={word} className="inline-block">{w}</motion.span>
          </span>
        ))}
      </As>
    </motion.div>
  );
}
