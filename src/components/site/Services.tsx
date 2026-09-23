import { useState } from "react";
import {
  ArrowUpRight,
  CircleDotDashed,
  Droplets,
  Flame,
  Gauge,
  Pipette,
  ShowerHead,
  Toilet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import heating from "@/assets/service-heating.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import repairs from "@/assets/service-repairs.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Service = {
  no: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  image: string;
};

const SERVICES: Service[] = [
  { no: "01", title: "Leak Detection & Repair", copy: "Pinpointing hidden leaks quickly, then making a clean, lasting repair with minimal disruption.", icon: Droplets, image: repairs },
  { no: "02", title: "Drain Cleaning", copy: "Professional clearing for slow, blocked or recurring drains, with the cause properly investigated.", icon: CircleDotDashed, image: repairs },
  { no: "03", title: "Faucet & Fixture Repair", copy: "Precise repairs and upgrades for taps, showers and fixtures, finished neatly and tested thoroughly.", icon: ShowerHead, image: bathroom },
  { no: "04", title: "Toilet Repair & Replacement", copy: "Reliable fixes for leaks, flushing faults and blockages, plus careful full replacements when required.", icon: Toilet, image: bathroom },
  { no: "05", title: "Water Heater Services", copy: "Servicing, fault diagnosis and efficient replacement options to keep hot water dependable.", icon: Flame, image: heating },
  { no: "06", title: "Pipe Repair", copy: "Safe repairs for damaged, corroded or burst pipework using durable, professional-grade materials.", icon: Pipette, image: heating },
  { no: "07", title: "Emergency Plumbing", copy: "Fast help for urgent leaks, bursts and loss of water, with clear guidance while we travel to you.", icon: Gauge, image: repairs },
  { no: "08", title: "General Plumbing", copy: "Trusted everyday plumbing, maintenance and practical improvements for homes and landlords.", icon: Wrench, image: bathroom },
];

function ServiceItem({ service, active, onActivate }: { service: Service; active: boolean; onActivate: () => void }) {
  const Icon = service.icon;
  return (
    <Button
      type="button"
      onClick={onActivate}
      onMouseEnter={onActivate}
      aria-expanded={active}
      variant="ghost"
      className={cn(
        "group relative h-auto w-full justify-start overflow-hidden rounded-none border-t border-border p-0 text-left whitespace-normal transition-[background-color,border-color] duration-500 last:border-b hover:bg-foreground/[0.035] hover:text-foreground",
        active && "border-copper/50 bg-foreground/[0.035]",
      )}
    >
      <span className={cn("absolute inset-y-0 left-0 w-0.5 origin-top bg-copper transition-transform duration-500", active ? "scale-y-100" : "scale-y-0")} />
      <span className="grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 px-3 py-5 sm:grid-cols-[4rem_1fr_auto] sm:px-5">
        <span className={cn("font-display text-2xl font-extrabold transition-all duration-500 sm:text-3xl", active ? "translate-x-1 text-copper" : "text-muted-foreground")}>{service.no}</span>
        <span>
          <span className="block font-display text-base font-extrabold uppercase sm:text-xl">{service.title}</span>
          <span className={cn("grid transition-[grid-template-rows,opacity] duration-500 md:hidden", active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <span className="overflow-hidden"><span className="block max-w-md pt-3 pr-4 text-sm leading-6 text-muted-foreground">{service.copy}</span></span>
          </span>
        </span>
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500", active ? "rotate-6 border-copper bg-copper text-primary-foreground shadow-[var(--glow-copper)]" : "border-border text-muted-foreground")}>
          <Icon size={17} strokeWidth={1.6} />
        </span>
      </span>
    </Button>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const selected = SERVICES[active] ?? SERVICES[0];
  if (!selected) return null;
  const SelectedIcon = selected.icon;

  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <span aria-hidden className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-copper/10 blur-[120px]" />
      <div className="container-ven">
        <SectionHeading label="What we do" title="Eight ways we keep things flowing" />
        <div className="mt-14 grid items-start gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(20rem,.9fr)] lg:gap-16">
          <Reveal variant="left">
            <div className="relative z-10">{SERVICES.map((service, index) => <ServiceItem key={service.no} service={service} active={active === index} onActivate={() => setActive(index)} />)}</div>
          </Reveal>

          <Reveal variant="right" className="sticky top-28 hidden md:block">
            <div className="group relative min-h-[35rem] overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[var(--shadow-lift)]">
              <img key={selected.no} src={selected.image} alt="" className="absolute inset-0 h-full w-full animate-fade-in object-cover opacity-45 transition-transform duration-[1400ms] group-hover:scale-105" />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink)_5%,transparent_78%)]" />
              <span className="absolute inset-0 bg-[linear-gradient(to_bottom_right,var(--ink)_0%,transparent_50%)]" />
              <div className="relative flex min-h-[35rem] flex-col justify-between p-7 lg:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-7xl font-extrabold text-foreground/10 lg:text-8xl">{selected.no}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-copper/50 bg-background/60 text-copper backdrop-blur-md"><SelectedIcon size={24} strokeWidth={1.5} /></span>
                </div>
                <div key={`${selected.no}-copy`} className="animate-fade-in">
                  <p className="eyebrow">Selected service</p>
                  <h3 className="mt-4 font-display text-3xl leading-none font-extrabold uppercase lg:text-5xl">{selected.title}</h3>
                  <p className="mt-5 max-w-md text-sm leading-6 text-foreground/70">{selected.copy}</p>
                  <a href="#contact" className="group/link mt-8 inline-flex items-center gap-3 font-display text-xs font-extrabold tracking-[0.16em] uppercase">
                    Discuss this service <ArrowUpRight size={17} className="text-copper transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}