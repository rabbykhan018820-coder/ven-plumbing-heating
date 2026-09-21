import { useRef, useState } from "react";
import heating from "@/assets/service-heating.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import repairs from "@/assets/service-repairs.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    no: "01",
    title: "Central heating installations",
    copy: "Full system design, new radiators, smart controls and balanced flow across the house.",
    img: heating,
  },
  {
    no: "02",
    title: "Boiler servicing & repairs",
    copy: "Annual services, fault finding and same-week repairs on all major boiler brands.",
    img: heating,
  },
  {
    no: "03",
    title: "Bathroom installations",
    copy: "From first fix to final seal — tiling, wet rooms, showers and fitted suites.",
    img: bathroom,
  },
  {
    no: "04",
    title: "Emergency plumbing",
    copy: "Leaks, burst pipes and no-heat call-outs handled fast, day or night.",
    img: repairs,
  },
];

function ServiceRow({ s, index }: { s: (typeof SERVICES)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <Reveal variant={index % 2 === 0 ? "left" : "right"} delay={index * 90}>
      <a
        ref={ref}
        href="#contact"
        data-cursor="explore"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 8, y: ((e.clientY - r.top) / r.height - 0.5) * 6 });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)` }}
        className={cn(
          "group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-border px-2 py-8",
          "transition-[transform,background-color,box-shadow] duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)]",
          "hover:bg-foreground/[0.03] hover:shadow-[var(--shadow-lift)] active:scale-[0.995] sm:px-6",
        )}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--gradient-copper)] transition-transform duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
        />
        <span className="font-display text-xl font-extrabold text-muted-foreground transition-all duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-125 group-hover:text-copper sm:text-2xl">
          {s.no}
        </span>

        <span className="min-w-0">
          <span className="block font-display text-xl leading-tight font-extrabold tracking-tight uppercase transition-transform duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-2 sm:text-3xl">
            {s.title}
          </span>
          <span className="mt-2 block max-w-xl text-sm text-muted-foreground transition-all duration-[420ms] group-hover:translate-x-2 group-hover:text-foreground/80">
            {s.copy}
          </span>
        </span>

        <span className="flex items-center gap-4">
          <span className="relative hidden h-20 w-32 overflow-hidden rounded-xl opacity-0 transition-all duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0 group-hover:opacity-100 md:block md:translate-x-4">
            <img
              src={s.img}
              alt=""
              loading="lazy"
              width={1200}
              height={912}
              className="h-full w-full object-cover transition-transform duration-[700ms] group-hover:scale-110"
            />
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-sm transition-all duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:border-copper group-hover:bg-copper group-hover:text-primary-foreground">
            <span className="transition-transform duration-[420ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </span>
      </a>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-ven">
        <SectionHeading label="What we do" title="Heating & plumbing, done properly" />
        <div className="mt-14">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.no} s={s} index={i} />
          ))}
          <span className="block border-t border-border" />
        </div>
      </div>
    </section>
  );
}
