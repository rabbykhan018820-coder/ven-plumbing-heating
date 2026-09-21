import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

export function SectionHeading({
  label,
  title,
  align = "left",
  className,
}: {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <p
        className={cn(
          "eyebrow reveal reveal-up transition-all",
          visible && "is-visible",
        )}
      >
        {label}
      </p>
      <h2
        style={{ transitionDelay: "90ms" }}
        className={cn(
          "reveal reveal-up mt-4 font-display text-4xl leading-[0.95] font-extrabold tracking-tight uppercase sm:text-5xl lg:text-6xl",
          visible && "is-visible",
        )}
      >
        {title}
      </h2>
      <span
        style={{ transitionDelay: "260ms", transform: visible ? "scaleX(1)" : "scaleX(0)" }}
        className={cn(
          "rule-draw mt-7 block h-px w-40 bg-[var(--gradient-copper)]",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
