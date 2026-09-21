import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import { PremiumButton } from "./PremiumButton";
import { cn } from "@/lib/utils";

const HEADLINE = ["Warm", "homes.", "Clean", "work.", "No", "fuss."];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 820);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPointer({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const depth = Math.min(scrollY, 600);

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.145 52 / 22%), transparent 65%)",
          animation: "ven-aurora 14s ease-in-out infinite",
        }}
      />
      <div className="container-ven grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p
            className={cn(
              "eyebrow transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Merseyside &amp; Cheshire · Gas Safe registered
          </p>

          <h1 className="mt-6 font-display text-[2.7rem] leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            {HEADLINE.map((word, i) => (
              <span key={word + i} className="mr-3 inline-block overflow-hidden align-bottom">
                <span
                  style={{ transitionDelay: `${160 + i * 80}ms` }}
                  className={cn(
                    "inline-block transition-all duration-[760ms] ease-[cubic-bezier(.22,1,.36,1)]",
                    i > 3 && "text-copper",
                    mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                  )}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            style={{ transitionDelay: "720ms" }}
            className={cn(
              "mt-7 max-w-lg text-base leading-relaxed text-muted-foreground transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Boiler installations, central heating, bathrooms and emergency repairs — delivered with the
            care of a small team that turns up on time and tidies up after itself.
          </p>

          <div
            style={{ transitionDelay: "840ms" }}
            className={cn(
              "mt-9 flex flex-wrap gap-3 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            <PremiumButton href="#contact" size="lg">
              Get a free quotation
            </PremiumButton>
            <PremiumButton href="tel:07879593651" size="lg" variant="ghost" icon="phone">
              Call 07879 593651
            </PremiumButton>
            <PremiumButton href="#services" size="lg" variant="ghost" icon="down">
              Explore services
            </PremiumButton>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.68rem] tracking-[0.22em] uppercase">
            {["Free quotations", "Fully insured", "Emergency call-outs", "Merseyside & Cheshire"].map(
              (item, i) => (
                <li
                  key={item}
                  style={{ transitionDelay: `${900 + i * 90}ms` }}
                  className={cn(
                    "group cursor-default text-muted-foreground transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:text-copper-soft",
                    mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                    {item}
                  </span>
                  <span className="block h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Image + floating cards */}
        <div
          className={cn(
            "relative transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
          style={{ transform: `translate3d(${pointer.x * 14}px, ${pointer.y * 14 - depth * 0.05}px, 0)` }}
        >
          <div
            data-cursor="view"
            className="group relative overflow-hidden rounded-[2rem] border border-border transition-[border-radius,box-shadow] duration-[600ms] ease-[cubic-bezier(.22,1,.36,1)] hover:rounded-[1.25rem] hover:shadow-[var(--shadow-lift)]"
          >
            <img
              src={heroImg}
              width={1280}
              height={1600}
              alt="VEN engineer installing a modern boiler"
              className="h-[26rem] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04] sm:h-[34rem]"
              style={{ transform: `scale(${1 + depth * 0.00016})` }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.17_0.012_260/85%),transparent_55%)] transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="eyebrow">Gas Safe · Reg. work</span>
            </div>
          </div>

          <div
            className="panel absolute -top-6 -left-4 hidden px-5 py-4 backdrop-blur-md transition-shadow duration-500 hover:shadow-[var(--glow-copper)] sm:block"
            style={{
              animation: "ven-float 7s ease-in-out infinite",
              transform: `rotate(${pointer.x * 3}deg) translate3d(${pointer.x * -22}px, ${pointer.y * -16}px, 0)`,
            }}
          >
            <p className="font-display text-2xl font-extrabold">12+</p>
            <p className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">Years on the tools</p>
          </div>

          <div
            className="panel absolute -right-3 bottom-10 hidden px-5 py-4 backdrop-blur-md transition-shadow duration-500 hover:shadow-[var(--glow-copper)] sm:block"
            style={{
              animation: "ven-float 9s ease-in-out infinite",
              transform: `rotate(${pointer.x * -3}deg) translate3d(${pointer.x * 24}px, ${pointer.y * 18}px, 0)`,
            }}
          >
            <p className="font-display text-2xl font-extrabold text-copper">24/7</p>
            <p className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">Emergency call-outs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
