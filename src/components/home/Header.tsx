import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import logo from "../../assets/maryam-enterprises.png";
import orangeLogo from "../../assets/maryam-enterprises-orange.png";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Navigate to home if not already there
    if (location.pathname !== "/") {
      navigate("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home, just scroll to contact
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">

          <span
            className={`font-display font-bold text-lg tracking-tight ${scrolled ? "text-foreground" : "text-white"
              }`}
          >
            <img src={scrolled ? orangeLogo : logo} alt="Maryam Enterprises" className="h-64 w-64 object-contain" />
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={n.label === "Contact" ? handleContactClick : undefined}
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground/80" : "text-white/90"
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="tel:+919821025394" aria-label="Call us">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${scrolled ? "" : "text-white hover:text-white hover:bg-white/10"}`}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-1 mt-8">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={(e) => {
                      if (n.label === "Contact") {
                        handleContactClick(e);
                      }
                      setOpen(false);
                    }}
                    className="px-3 py-3 rounded-md text-base font-medium hover:bg-secondary"
                  >
                    {n.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="tel:+919821025394">
                    <Phone className="h-4 w-4" /> +91 98210 25394
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
