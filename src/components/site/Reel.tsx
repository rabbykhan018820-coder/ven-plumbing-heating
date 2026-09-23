import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const REELS = ["01", "02", "03", "04"];
const DESKTOP_POSITIONS = ["lg:translate-y-10 lg:-rotate-2", "lg:-translate-y-3 lg:rotate-1", "lg:translate-y-5 lg:-rotate-1", "lg:-translate-y-7 lg:rotate-2"];

export function Reel() {
  return (
    <section id="reel" className="overflow-hidden py-24 lg:py-36">
      <div className="container-ven">
        <div className="flex items-end justify-between gap-8">
          <SectionHeading label="Behind the work" title="Four reels. One standard." />
          <p className="hidden max-w-xs pb-2 text-right text-sm leading-6 text-muted-foreground md:block">A future home for real site moments, careful finishes and the people behind the work.</p>
        </div>
        <Reveal variant="up">
          <div className="-mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pt-8 pb-14 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-3 lg:pb-20 [&::-webkit-scrollbar]:hidden">
            {REELS.map((number, index) => (
              <article key={number} data-cursor="reel" className={`group relative w-[76vw] shrink-0 snap-center transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-3 sm:w-[19rem] lg:w-auto ${DESKTOP_POSITIONS[index] ?? ""}`}>
                {/* Replace with client's real reel */}
                <div className="reel-frame relative aspect-[9/16] overflow-hidden rounded-[1.4rem] border border-border bg-card p-1 shadow-[var(--shadow-lift)] transition-[border-color,box-shadow] duration-500 group-hover:border-copper/60 group-hover:shadow-[var(--glow-copper)]">
                  <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.15rem] bg-background">
                    <span aria-hidden className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_50%_38%,color-mix(in_oklab,var(--copper)_18%,transparent),transparent_48%)]" />
                    <span aria-hidden className="absolute inset-0 opacity-20 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:2.25rem_2.25rem]" />
                    <span aria-hidden className="absolute -inset-y-10 -left-1/2 w-1/3 skew-x-[-18deg] bg-foreground/[0.06] transition-transform duration-1000 group-hover:translate-x-[520%]" />
                    <span className="absolute top-5 left-5 font-display text-xs font-extrabold tracking-[0.18em] text-copper">REEL {number}</span>
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-copper/40 bg-background/50 text-copper backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                      <span className="absolute inset-2 rounded-full border border-border" />
                      <Play size={25} strokeWidth={1.4} fill="currentColor" className="relative ml-1" />
                    </span>
                    <p className="relative mt-6 font-display text-sm font-extrabold tracking-[0.16em] uppercase">Video coming soon</p>
                    <p className="relative mt-2 text-xs text-muted-foreground">Reserved for your real work</p>
                    <span className="absolute right-5 bottom-5 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">9 : 16</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}