import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import heating from "@/assets/service-heating.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import repairs from "@/assets/service-repairs.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

// Replace these entries with the client's nine real project photos.
const PROJECTS = [
  { image: heating, label: "Heating project" }, { image: bathroom, label: "Bathroom project" }, { image: repairs, label: "Repair project" },
  { image: bathroom, label: "Fixture project" }, { image: heating, label: "Boiler project" }, { image: repairs, label: "Pipework project" },
  { image: heating, label: "Radiator project" }, { image: bathroom, label: "Shower project" }, { image: repairs, label: "Emergency project" },
];

const SLOTS = [
  "left-[2%] top-[6%] w-[23%] -rotate-3", "right-[1%] top-[4%] w-[21%] rotate-3", "left-[5%] bottom-[5%] w-[19%] rotate-2", "right-[4%] bottom-[3%] w-[22%] -rotate-2",
  "left-[25%] top-[1%] w-[15%] rotate-2", "right-[24%] top-[2%] w-[14%] -rotate-3", "left-[27%] bottom-[1%] w-[14%] -rotate-2", "right-[26%] bottom-[2%] w-[15%] rotate-3",
];

export function WorkGallery() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const change = (step: number) => { setDirection(step); setActive((current) => (current + step + PROJECTS.length) % PROJECTS.length); };
  const surrounding = PROJECTS.map((project, index) => ({ ...project, index })).filter((project) => project.index !== active);
  const featured = PROJECTS[active] ?? PROJECTS[0];
  if (!featured) return null;

  return (
    <section id="work" className="overflow-hidden py-24 lg:py-36">
      <div className="container-ven">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading label="Selected work" title="Nine details. One craft." />
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-extrabold"><span className="text-copper">{String(active + 1).padStart(2, "0")}</span> / 09</span>
            <button type="button" aria-label="Previous project" onClick={() => change(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-copper hover:text-copper active:scale-95"><ArrowLeft size={17} /></button>
            <button type="button" aria-label="Next project" onClick={() => change(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-copper bg-copper text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"><ArrowRight size={17} /></button>
          </div>
        </div>

        <Reveal variant="scale" className="mt-12">
          <div className="relative h-[31rem] sm:h-[40rem] lg:h-[47rem]">
            {surrounding.map((project, index) => (
              <button key={project.index} type="button" onClick={() => { setDirection(project.index > active ? 1 : -1); setActive(project.index); }} aria-label={`Feature ${project.label}`} className={cn("group absolute hidden aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-lift)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:z-30 hover:scale-105 hover:border-copper/50 sm:block", SLOTS[index])}>
                <img src={project.image} alt="Replaceable project placeholder" className="h-full w-full object-cover opacity-65 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" />
                <span className="absolute right-2 bottom-2 rounded-full bg-background/75 px-2 py-1 text-[0.55rem] tracking-[0.12em] uppercase backdrop-blur-md">{String(project.index + 1).padStart(2, "0")}</span>
              </button>
            ))}

            <div key={active} className={cn("absolute top-1/2 left-1/2 z-20 aspect-[4/3] w-[92%] overflow-hidden rounded-xl border border-copper/40 bg-card shadow-[var(--glow-copper)] transition-transform duration-700 sm:w-[54%] lg:w-[50%]", direction > 0 ? "gallery-enter-next" : "gallery-enter-prev")}>
              <img src={featured.image} alt="Replaceable featured project placeholder" className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-[linear-gradient(to_top,var(--ink),transparent_58%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                <div><p className="eyebrow">Project placeholder</p><h3 className="mt-2 font-display text-2xl font-extrabold uppercase sm:text-4xl">{featured.label}</h3></div>
                <span className="font-display text-4xl font-extrabold text-foreground/30 sm:text-6xl">{String(active + 1).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex gap-3 overflow-x-auto px-1 pb-2 sm:hidden [scrollbar-width:none]">
              {PROJECTS.map((project, index) => <button key={index} type="button" onClick={() => setActive(index)} aria-label={`Feature ${project.label}`} className={cn("h-16 w-20 shrink-0 overflow-hidden rounded-md border transition-all", index === active ? "border-copper opacity-100" : "border-border opacity-45")}><img src={project.image} alt="" className="h-full w-full object-cover" /></button>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}