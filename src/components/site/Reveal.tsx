import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

type Variant = "up" | "left" | "right" | "scale" | "clip" | "mask";

const variants: Record<Variant, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  clip: "reveal-clip",
  mask: "reveal-mask",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  // The observed wrapper stays unclipped — clip-path on the observed node itself
  // can zero out its intersection rect and the reveal never fires.
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref} className={className}>
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={cn("reveal", variants[variant], visible && "is-visible")}
      >
        {children}
      </div>
    </Tag>
  );
}
