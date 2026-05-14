import { ArrowRight, FolderOpen } from "lucide-react";
import { Button } from "../../components/ui/button";
import heroImg from "../../assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Industrial electrical switchgear facility"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-xs font-medium uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Industrial & Electrical Solutions
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
            Maryam <span className="text-primary">Enterprises</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Powering industry with reliable electrical contracting, switchgear,
            and end-to-end industrial installations, engineered for safety,
            built for uptime.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="text-base">
              <a href="#contact">
                Get In Touch <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-white/5 text-white border-white/30 hover:bg-white/10 hover:text-white"
            >
              <a href="#projects">
                <FolderOpen className="h-4 w-4" /> View Our Projects
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
