import pharma from "../../assets/ind-pharma.jpg";
import logistics from "../../assets/ind-logistics.jpg";
import commercial from "../../assets/ind-commercial.jpg";
import industrial from "../../assets/ind-industrial.jpg";
import education from "../../assets/ind-education.jpg";

const INDUSTRIES = [
  { img: pharma, title: "Pharmaceutical", desc: "Cleanroom-grade installations and compliant power systems." },
  { img: logistics, title: "Logistics & Warehousing", desc: "High-bay lighting and large-scale distribution panels." },
  { img: commercial, title: "Commercial", desc: "Office buildings, retail and mixed-use complexes." },
  { img: industrial, title: "Industrial & Manufacturing", desc: "Heavy-load plant electrification and motor control." },
  { img: education, title: "Educational Institutions", desc: "Campus-wide power, lighting and safety systems." },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Industries Served
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Powering sectors that can't afford downtime.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((i) => (
            <article
              key={i.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/5]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={i.img}
                alt={i.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">{i.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {i.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
