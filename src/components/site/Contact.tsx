import { useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PremiumButton } from "./PremiumButton";
import { cn } from "@/lib/utils";

function Field({
  id,
  label,
  type = "text",
  textarea = false,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const floated = focused || value.length > 0;
  const shared = {
    id,
    name: id,
    required,
    value,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value),
    className: cn(
      "w-full rounded-xl border bg-foreground/[0.02] px-4 pt-7 pb-2.5 text-sm text-foreground outline-none",
      "transition-all duration-[380ms] ease-[cubic-bezier(.22,1,.36,1)]",
      "border-border focus:border-copper/70 focus:bg-foreground/[0.05] focus:shadow-[0_0_0_4px_oklch(0.72_0.145_52/12%)]",
    ),
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 z-10 tracking-[0.2em] uppercase transition-all duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)]",
          floated ? "top-2.5 text-[0.58rem] text-copper-soft" : "top-5 text-[0.7rem] text-muted-foreground",
        )}
      >
        {label}
      </label>
      {textarea ? (
        <textarea rows={5} {...shared} className={cn(shared.className, "resize-none")} />
      ) : (
        <input type={type} {...shared} />
      )}
      <span
        aria-hidden
        className={cn(
          "absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--gradient-copper)] transition-all duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)]",
          focused && "w-[92%]",
        )}
      />
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-ven grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading label="Get in touch" title="Request a free quotation" />
          <Reveal variant="up" delay={120} className="mt-10 space-y-5 text-sm">
            <a
              href="tel:07879593651"
              data-cursor="button"
              className="group flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-copper-soft"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-12">☏</span>
              07879 593651
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <span className="inline-block animate-none">◉</span> Merseyside &amp; Cheshire
            </p>
            <p className="text-muted-foreground">Mon–Sat 8am–6pm · Emergencies 24/7</p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={80}>
          <form
            className="panel space-y-4 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thanks — we'll come back to you shortly.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Your name" />
              <Field id="phone" label="Phone" type="tel" />
            </div>
            <Field id="email" label="Email" type="email" />
            <Field id="message" label="What do you need?" textarea />
            <div className="pt-2">
              <PremiumButton type="submit" size="lg" className="w-full sm:w-auto">
                Request a free quotation
              </PremiumButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
