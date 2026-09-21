import { Reveal } from "./Reveal";

/**
 * Empty reel placeholder — intentionally contains NO video.
 * Replace the inner frame content with the client's real reel when supplied.
 */
export function Reel() {
  return (
    <section id="reel" className="py-24 lg:py-32">
      <div className="container-ven">
        <Reveal variant="scale">
          <div
            data-cursor="reel"
            className="group relative overflow-hidden rounded-[2rem] border border-border p-1"
            style={{ background: "var(--gradient-panel)" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-[40%] opacity-25 transition-opacity duration-700 group-hover:opacity-50"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0 62%, oklch(0.72 0.145 52 / 70%) 78%, transparent 92%)",
                animation: "ven-border-spin 9s linear infinite",
              }}
            />
            <div className="relative flex aspect-[16/9] flex-col items-center justify-center rounded-[1.8rem] bg-background/92 transition-transform duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[0.995]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1.8rem] shadow-[inset_0_0_120px_-40px_oklch(0.72_0.145_52/45%)]"
              />
              <span
                aria-hidden
                className="shine-layer rounded-[1.8rem]"
              >
                <span className="absolute inset-y-0 -left-1/3 w-1/4 bg-[linear-gradient(90deg,transparent,oklch(1_0_0/8%),transparent)] [animation:ven-shine_6s_ease-in-out_infinite]" />
              </span>

              <p className="eyebrow relative">Our reel</p>

              <div className="relative mt-7 flex h-24 w-24 items-center justify-center">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-copper/40"
                  style={{ animation: "ven-ring 3.2s ease-out infinite" }}
                />
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-border transition-all duration-[500ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110 group-hover:border-copper/70">
                  <svg width="26" height="30" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.4" className="ml-1 text-copper transition-transform duration-[500ms] group-hover:scale-110" aria-hidden>
                    <path d="M2 2 L22 14 L2 26 Z" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <p className="relative mt-7 font-display text-2xl font-extrabold tracking-[0.18em] uppercase sm:text-3xl">
                Video coming soon
              </p>
              <p className="relative mt-3 max-w-sm px-6 text-center text-sm text-muted-foreground">
                Our full workmanship reel is in production. This frame is reserved for it.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
