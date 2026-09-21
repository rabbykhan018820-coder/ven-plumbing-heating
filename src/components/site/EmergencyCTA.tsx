import { Reveal } from "./Reveal";
import { PremiumButton } from "./PremiumButton";

export function EmergencyCTA() {
  return (
    <section id="areas" className="py-8 lg:py-16">
      <div className="container-ven">
        <Reveal variant="clip">
          <div className="relative overflow-hidden rounded-[2rem] border border-border px-6 py-16 text-center sm:px-14 lg:py-24">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-[130px]"
              style={{
                background: "radial-gradient(circle, oklch(0.72 0.145 52 / 26%), transparent 62%)",
                animation: "ven-aurora 12s ease-in-out infinite",
              }}
            />
            <p className="eyebrow relative">Emergency call-outs</p>
            <h2 className="relative mt-5 font-display text-4xl leading-[0.95] font-extrabold tracking-tight uppercase sm:text-6xl">
              Plumbing problem?
              <br />
              <span className="text-copper">Don&apos;t wait.</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              Covering Merseyside &amp; Cheshire. If water is going where it shouldn&apos;t, call us now and
              we&apos;ll talk you through shutting it off while we&apos;re on the way.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-3">
              <PremiumButton href="tel:07879593651" size="lg" icon="phone">
                Call 07879 593651
              </PremiumButton>
              <PremiumButton
                href="https://maps.google.com/?q=Merseyside"
                size="lg"
                variant="ghost"
              >
                Get directions
              </PremiumButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
