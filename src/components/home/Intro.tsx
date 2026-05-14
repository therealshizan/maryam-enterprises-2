import { Check } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "80+", label: "Trusted Clients" },
  { value: "10+", label: "Industries Served" },
];

const EXPERTISE = [
  "LT & HT Electrical Contracting",
  "Industrial & Plant Installations",
  "Switchgear & Panel Engineering",
  "Cable Laying & Termination",
  "Lighting & Power Distribution",
  "Fire & Safety Systems",
];

export function Intro() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Engineering reliable industrial power, end to end.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Maryam Enterprises is a trusted name in industrial and electrical
              solutions, delivering turnkey contracting, installation and
              maintenance services to factories, commercial complexes and
              institutions. With over a decade of on-ground expertise, we
              combine certified engineering, safety-first execution and on-time
              delivery to keep your operations running.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl lg:text-4xl font-bold font-display text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-12">
            <div
              className="rounded-2xl p-8 lg:p-10 bg-card border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-xl font-semibold text-foreground">
                Our core expertise
              </h3>
              <ul className="mt-6 space-y-4">
                {EXPERTISE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary shrink-0">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
