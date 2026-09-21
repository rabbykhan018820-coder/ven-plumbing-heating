import { useEffect, useRef, useState } from "react";

/** Desktop-only custom cursor. Disabled on touch and reduced-motion devices. */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      const value = el?.dataset["cursor"] ?? "";
      setActive(Boolean(value));
      setLabel(value && value !== "button" ? value : "");
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      document.body.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dot}
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-copper transition-opacity duration-300"
        style={{ opacity: label ? 0 : 1 }}
      />
      <div
        ref={ring}
        className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-copper/60 backdrop-blur-[1px] transition-[width,height,background-color,border-color] duration-[380ms] ease-[cubic-bezier(.22,1,.36,1)]"
        style={{
          width: label ? 78 : active ? 54 : 30,
          height: label ? 78 : active ? 54 : 30,
          backgroundColor: label ? "oklch(0.72 0.145 52 / 92%)" : "transparent",
          borderColor: label ? "transparent" : undefined,
        }}
      >
        <span className="font-display text-[0.6rem] font-bold tracking-[0.2em] text-primary-foreground uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
