const ITEMS = [
  "Boiler installations",
  "Central heating",
  "Bathroom fitting",
  "Emergency repairs",
  "Power flushing",
  "Landlord certificates",
  "Radiator upgrades",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="group relative overflow-hidden border-y border-border py-5">
      <div
        className="flex w-max gap-10 [animation:ven-marquee_38s_linear_infinite] group-hover:[animation-duration:70s]"
        style={{ willChange: "transform" }}
      >
        {row.map((item, i) => (
          <span
            key={item + i}
            className="flex items-center gap-10 font-display text-sm tracking-[0.28em] text-muted-foreground uppercase transition-colors duration-500 group-hover:text-foreground"
          >
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-copper transition-transform duration-500 group-hover:rotate-[135deg]" />
          </span>
        ))}
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(to_right,var(--ink),transparent)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(to_left,var(--ink),transparent)]"
      />
    </div>
  );
}
