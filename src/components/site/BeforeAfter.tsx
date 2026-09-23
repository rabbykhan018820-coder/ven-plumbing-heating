import { useCallback, useRef, useState } from "react";
import { ArrowLeftRight, ImagePlus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function Placeholder({ side }: { side: "Before" | "After" }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-card">
      <span aria-hidden className="absolute inset-0 opacity-25 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/70 text-copper"><ImagePlus size={25} strokeWidth={1.4} /></span>
      <strong className="relative mt-5 font-display text-2xl font-extrabold uppercase sm:text-3xl">{side} image</strong>
      <span className="relative mt-2 text-xs tracking-[0.15em] text-muted-foreground uppercase">Replace with client project photo</span>
    </div>
  );
}

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const frame = useRef<HTMLDivElement | null>(null);
  const update = useCallback((clientX: number) => {
    const bounds = frame.current?.getBoundingClientRect();
    if (!bounds) return;
    setPosition(Math.min(94, Math.max(6, ((clientX - bounds.left) / bounds.width) * 100)));
  }, []);

  return (
    <section id="before-after" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-ven">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <SectionHeading label="Before / after" title="The difference is in the finish" />
          <p className="max-w-lg text-sm leading-6 text-muted-foreground lg:justify-self-end">Drag across the frame to compare the transformation. Both image positions are ready for your genuine project photography.</p>
        </div>
        <Reveal variant="scale" className="mt-12">
          <div className="relative rounded-[1.5rem] border border-border bg-card p-2 shadow-[var(--shadow-lift)]">
            <div
              ref={frame}
              className="relative aspect-[16/9] min-h-[25rem] touch-none select-none overflow-hidden rounded-[1.1rem] border border-border bg-background md:min-h-0"
              onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); update(event.clientX); }}
              onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) update(event.clientX); }}
            >
              <Placeholder side="After" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
                <div className="absolute inset-y-0 left-0 grayscale" style={{ width: frame.current?.clientWidth ? `${frame.current.clientWidth}px` : "100vw" }}><Placeholder side="Before" /></div>
              </div>
              <span className="absolute top-5 left-5 rounded-full border border-border bg-background/75 px-4 py-2 font-display text-[0.65rem] font-extrabold tracking-[0.18em] uppercase backdrop-blur-md">Before</span>
              <span className="absolute top-5 right-5 rounded-full border border-copper/40 bg-background/75 px-4 py-2 font-display text-[0.65rem] font-extrabold tracking-[0.18em] text-copper uppercase backdrop-blur-md">After</span>
              <div className="pointer-events-none absolute inset-y-0 w-px bg-copper shadow-[0_0_28px_var(--copper)]" style={{ left: `${position}%` }}>
                <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-copper bg-background text-copper shadow-[var(--glow-copper)]"><ArrowLeftRight size={21} /></span>
              </div>
              <input aria-label="Before and after comparison" type="range" min="6" max="94" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}