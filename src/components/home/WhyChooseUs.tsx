import {
  Award,
  ShieldCheck,
  HardHat,
  Users,
  Clock,
  HeartHandshake,
} from "lucide-react";

const ITEMS = [
  {
    icon: Award,
    title: "Industry Experience",
    desc: "Over a decade of executing complex industrial and commercial electrical projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "ISI-grade materials, tested workmanship and documented QA at every milestone.",
  },
  {
    icon: HardHat,
    title: "Safety Compliance",
    desc: "Strict adherence to electrical safety codes, PPE protocols and site SOPs.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    desc: "Certified electricians, supervisors and project engineers on every site.",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    desc: "Milestone-driven delivery with transparent progress reporting to clients.",
  },
  {
    icon: HeartHandshake,
    title: "Reliable Service",
    desc: "Long-term partnerships backed by responsive maintenance and support.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted partners for mission-critical work.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl bg-card border border-border p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
