import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "ghost";
  size?: "md" | "lg";
  icon?: "arrow" | "phone" | "down" | "none";
  className?: string;
  cursor?: string;
};

function Icon({ icon }: { icon: NonNullable<Props["icon"]> }) {
  if (icon === "none") return null;
  if (icon === "phone")
    return (
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-rotate-12 group-hover:scale-110">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      </span>
    );
  if (icon === "down")
    return (
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-1">
        ↓
      </span>
    );
  return (
    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
      ↗
    </span>
  );
}

export function PremiumButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "solid",
  size = "md",
  icon = "arrow",
  className,
  cursor = "button",
}: Props) {
  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-[0.14em] uppercase",
    "transition-[transform,box-shadow,background-color,color,border-color] duration-[380ms] ease-[cubic-bezier(.22,1,.36,1)]",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "lg" ? "px-8 py-4 text-xs sm:text-[0.8rem]" : "px-6 py-3 text-[0.7rem]",
    variant === "solid"
      ? "text-primary-foreground shadow-[0_10px_30px_-14px_oklch(0.72_0.145_52/60%)] hover:shadow-[var(--glow-copper)]"
      : "border border-border text-foreground backdrop-blur-sm hover:border-copper/60 hover:text-copper-soft hover:shadow-[0_12px_40px_-20px_oklch(0.72_0.145_52/60%)]",
    className,
  );

  const inner = (
    <>
      {variant === "solid" && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{ background: "var(--gradient-copper)" }}
        />
      )}
      {variant === "ghost" && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-foreground/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      <span aria-hidden className="shine-layer">
        <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,oklch(1_0_0/35%),transparent)] opacity-0 group-hover:opacity-100 group-hover:[animation:ven-shine_850ms_ease-out]" />
      </span>
      <span className="relative z-10 flex items-center gap-2">
        {icon === "phone" && <Icon icon="phone" />}
        <span className="transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]">{children}</span>
        {icon !== "phone" && <Icon icon={icon} />}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} data-cursor={cursor} className={base}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} data-cursor={cursor} className={base}>
      {inner}
    </button>
  );
}
