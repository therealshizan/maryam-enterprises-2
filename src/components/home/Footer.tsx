import { Phone, Mail, MapPin } from "lucide-react";

import Logo from "../../assets/maryam-enterprises.png";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const QUICK = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const SERVICES = [
  "Electrical Contracting",
  "Industrial Installations",
  "Switchgear Systems",
  "Lighting Solutions",
  "Cable Management",
  "Fire & Safety Systems",
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg">
                <img src={Logo} alt="Maryam Enterprises" className="w-64 object-contain" />
              </span>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/70 leading-relaxed">
              Industrial and electrical solutions trusted by manufacturers,
              logistics operators and commercial clients across India.
            </p>
            <div className="mt-5 flex gap-2">
              {[LiaLinkedin, FaFacebook, BsInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid place-items-center h-9 w-9 rounded-md border border-white/15 text-navy-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.href}>
                  <a
                    href={q.href}
                    className="text-sm text-navy-foreground/75 hover:text-primary transition-colors"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="text-sm text-navy-foreground/75"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+919821025394" className="hover:text-primary">
                  +91 98210 25394
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="mailto:info@maryamenterprises.com"
                  className="hover:text-primary"
                >
                  info@maryamenterprises.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>India, serving clients nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-navy-foreground/60">
          <p>© {new Date().getFullYear()} Maryam Enterprises. All rights reserved.</p>
          <p>Managed By <a href="https://giganexustechnology.com" target="_blank" rel="noopener noreferrer" className="text-primary">Giga Nexus Technology</a></p>
        </div>
      </div>
    </footer>
  );
}
