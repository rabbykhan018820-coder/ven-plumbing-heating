import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setDone(true), reduced ? 80 : 900);
    const t2 = setTimeout(() => setHidden(true), reduced ? 200 : 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[120] flex items-center justify-center bg-background transition-all duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)]"
      style={{
        opacity: done ? 0 : 1,
        clipPath: done ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
      }}
    >
      <div className="text-center">
        <span className="font-display text-5xl font-extrabold tracking-[0.3em] text-ivory">VEN</span>
        <span
          className="mt-4 block h-px w-32 origin-left bg-[var(--gradient-copper)]"
          style={{ animation: "ven-logo-line 800ms cubic-bezier(.22,1,.36,1) forwards" }}
        />
      </div>
    </div>
  );
}
