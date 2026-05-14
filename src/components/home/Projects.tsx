import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import p1 from "../../assets/proj-1.jpg";
import p2 from "../../assets/proj-2.jpg";
import p3 from "../../assets/proj-3.jpg";

const PROJECTS = [
  {
    img: p1,
    client: "Confidential Manufacturing Co.",
    title: "MV Switchgear Room Setup",
    desc: "Complete medium-voltage switchgear room build-out with integrated metering and protection.",
  },
  {
    img: p2,
    client: "Regional Logistics Hub",
    title: "Warehouse High-Bay Lighting",
    desc: "Energy-efficient LED high-bay rollout across a 1.2-lakh sq.ft. distribution facility.",
  },
  {
    img: p3,
    client: "Pharma Plant, North India",
    title: "Plant Electrical Control Room",
    desc: "Turnkey control panels, MCC and cable management for a GMP-compliant pharma facility.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Recent Projects
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Work that speaks for itself.
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              View More <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                  {p.client}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
