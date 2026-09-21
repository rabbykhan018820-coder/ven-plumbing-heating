import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PremiumButton } from "./PremiumButton";
import { useActiveSection } from "@/hooks/useReveal";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "reel", label: "Reel" },
  { id: "process", label: "Process" },
  { id: "areas", label: "Areas" },
  { id: "contact", label: "Contact" },
];

const IDS = LINKS.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)]",
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <div className="container-ven flex items-center justify-between gap-6">
        <a
          href="#top"
          data-cursor="button"
          className="group font-display text-xl font-extrabold tracking-[0.28em] uppercase"
        >
          <span className="transition-colors duration-300 group-hover:text-copper">VEN</span>
          <span className="ml-2 hidden text-[0.6rem] tracking-[0.3em] text-muted-foreground transition-all duration-500 group-hover:tracking-[0.42em] group-hover:text-copper-soft sm:inline">
            Plumbing &amp; Heating
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-cursor="button"
                className={cn(
                  "group relative rounded-full px-4 py-2 text-[0.72rem] tracking-[0.2em] uppercase",
                  "transition-all duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)] hover:translate-x-[2px]",
                  isActive ? "text-copper-soft" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 rounded-full border transition-all duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)]",
                    isActive
                      ? "scale-100 border-copper/35 bg-copper/10 opacity-100"
                      : "scale-90 border-transparent opacity-0",
                  )}
                />
                <span className="relative z-10">{l.label}</span>
                <span
                  aria-hidden
                  className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-copper transition-all duration-[360ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-6"
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PremiumButton href="#contact">Get a free quote</PremiumButton>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            data-cursor="button"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-copper/60 active:scale-95 lg:hidden"
          >
            <span
              className={cn(
                "absolute h-px w-5 bg-foreground transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
                open ? "rotate-45" : "-translate-y-1",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-foreground transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
                open ? "-rotate-45" : "translate-y-1",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[70] flex flex-col bg-background/97 backdrop-blur-xl transition-all duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="mt-28 flex flex-1 flex-col gap-2 px-6">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 120 + i * 70 : 0}ms` }}
              className={cn(
                "border-b border-border py-5 font-display text-3xl font-extrabold tracking-tight uppercase transition-all duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)] active:scale-[0.98] active:text-copper",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              {l.label}
            </a>
          ))}
          <div
            style={{ transitionDelay: `${open ? 460 : 0}ms` }}
            className={cn(
              "mt-8 transition-all duration-[520ms]",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <PremiumButton href="#contact" size="lg" className="w-full">
              Get a free quote
            </PremiumButton>
          </div>
        </div>
      </div>
    </header>
  );
}
