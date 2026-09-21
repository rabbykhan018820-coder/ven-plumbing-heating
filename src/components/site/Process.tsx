import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const STEPS = [
  { no: "01", title: "Call or message", copy: "Tell us what's going on. We'll ask the right questions first time." },
  { no: "02", title: "Free quotation", copy: "A clear written price with no call-out fee and no vague extras." },
  { no: "03", title: "Booked in", copy: "A firm date and an arrival window we actually stick to." },
  { no: "04", title: "Clean handover", copy: "Tested, explained, tidied — plus aftercare if anything needs a look." },
];

function Step({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="group relative pl-14">
      <span
        aria-hidden
        className="absolute top-2 left-[1.375rem] w-px origin-top bg-border transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]"
        style={{ height: "100%", transform: visible ? "scaleY(1)" : "scaleY(0)", transitionDelay: `${index * 120}ms` }}
      />
      <span
        style={{ transitionDelay: `${index * 120}ms` }}
        className={cn(
          "absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background font-display text-xs font-extrabold transition-all duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)]",
          "group-hover:scale-110 group-hover:border-copper group-hover:text-copper group-hover:shadow-[var(--glow-copper)]",
          visible ? "scale-100 opacity-100" : "scale-50 opacity-0",
        )}
      >
        {step.no}
      </span>
      <div
        style={{ transitionDelay: `${index * 120 + 120}ms` }}
        className={cn(
          "reveal reveal-up pb-12 transition-transform duration-500 group-hover:translate-x-1",
          visible && "is-visible",
        )}
      >
        <h3 className="font-display text-xl font-extrabold tracking-tight uppercase sm:text-2xl">{step.title}</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {step.copy}
        </p>
      </div>
    </li>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container-ven grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading label="How it works" title="Four steps, zero guesswork" />
        <ol className="relative">
          {STEPS.map((s, i) => (
            <Step key={s.no} step={s} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
