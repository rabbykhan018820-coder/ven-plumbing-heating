import { PremiumButton } from "./PremiumButton";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "reel", label: "Reel" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-ven flex flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-[0.28em] uppercase">VEN</p>
            <p className="mt-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
              Plumbing &amp; Heating · Merseyside &amp; Cheshire
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-cursor="button"
                className="group text-xs tracking-[0.22em] text-muted-foreground uppercase transition-all duration-300 hover:translate-x-0.5 hover:text-foreground"
              >
                {l.label}
                <span className="block h-px w-0 bg-copper transition-all duration-[360ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <PremiumButton href="https://facebook.com" variant="ghost">
              View Facebook
            </PremiumButton>
            <button
              type="button"
              aria-label="Back to top"
              data-cursor="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)] hover:rotate-[12deg] hover:border-copper hover:shadow-[var(--glow-copper)] active:scale-95"
            >
              <span className="text-sm transition-transform duration-[420ms] group-hover:-translate-y-1 group-hover:text-copper">
                ↑
              </span>
            </button>
          </div>
        </div>

        <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} VEN Plumbing &amp; Heating
        </p>
      </div>
    </footer>
  );
}
