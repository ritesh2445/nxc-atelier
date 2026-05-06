import { lazy, Suspense, useEffect, useState } from "react";

const Canvas3D = lazy(() => import("./HeroParticlesCanvas"));

export function HeroParticles() {
  const [enable, setEnable] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasGL = !!document.createElement("canvas").getContext("webgl");
    if (!reduce && hasGL) setEnable(true);
  }, []);
  if (!enable) {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.18),transparent_60%)]" />
      </div>
    );
  }
  return (
    <Suspense fallback={null}>
      <div className="absolute inset-0 -z-10">
        <Canvas3D />
      </div>
    </Suspense>
  );
}
