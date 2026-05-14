import { Phone, MessageCircle } from "lucide-react";
import { Button } from "../../components/ui/button";

export function CtaBand() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-navy text-navy-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, oklch(0.72 0.16 60 / 0.35), transparent 45%), radial-gradient(circle at 80% 100%, oklch(0.4 0.1 250 / 0.4), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Let's Build Together
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Need Help with Industrial Solutions?{" "}
            <span className="text-primary">We Are Experts.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-navy-foreground/80">
            Talk to our engineers about your project, get a quick quote, a site
            visit, or technical advice.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="text-base">
              <a href="tel:+919821025394">
                <Phone className="h-4 w-4" /> Call +91 98210 25394
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-white/5 text-white border-white/30 hover:bg-white/10 hover:text-white"
            >
              <a
                href="https://wa.me/919821025394"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
