import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest('a,button,[data-magnetic]'));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="h-3 w-3 rounded-full bg-[#F5F5F0]"
          style={{ mixBlendMode: "difference" }}
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 1.4 : 1, opacity: hover ? 0.4 : 0.25 }}
          className="h-10 w-10 rounded-full border border-[#F5F5F0]/40"
          style={{ mixBlendMode: "difference" }}
        />
      </motion.div>
    </>
  );
}
