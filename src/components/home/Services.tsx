import { ArrowUpRight } from "lucide-react";
import elec from "../../assets/svc-electrical.jpg";
import inst from "../../assets/svc-installations.jpg";
import sw from "../../assets/svc-switchgear.jpg";
import light from "../../assets/svc-lighting.jpg";
import cable from "../../assets/svc-cable.jpg";
import fire from "../../assets/svc-fire.jpg";

const SERVICES = [
  {
    img: elec,
    title: "Electrical Contracting",
    desc: "Turnkey LT/HT electrical contracting for industrial and commercial projects.",
  },
  {
    img: inst,
    title: "Industrial Installations",
    desc: "Plant equipment installation, motor wiring and power distribution setup.",
  },
  {
    img: sw,
    title: "Switchgear Systems",
    desc: "Design, supply and commissioning of LT panels, MCC and PCC switchgear.",
  },
  {
    img: light,
    title: "Lighting Solutions",
    desc: "Industrial high-bay, façade and area lighting with energy-efficient fixtures.",
  },
  {
    img: cable,
    title: "Cable Management",
    desc: "Cable laying, tray work, glanding and termination to industry standards.",
  },
  {
    img: fire,
    title: "Fire & Safety Systems",
    desc: "Detection, alarm and suppression systems engineered for compliance.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Services & Products
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Complete industrial electrical solutions.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From a single panel to a complete plant electrification, we cover
            every layer of industrial power, engineered, installed and
            certified.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
