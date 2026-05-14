import { Link } from "react-router-dom";
import { CtaBand } from "../components/home/CtaBand";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";

import servicesHero from "../assets/service-hero.png";

import {
    ArrowRight,
    ShieldCheck,
    HardHat,
    Wrench,
    Cable,
    Factory,
    Warehouse,
    Building2,
    GraduationCap,
    ClipboardCheck,
    PhoneCall,
} from "lucide-react";

const SERVICES = [
    {
        icon: Wrench,
        title: "Electrical Contracting",
        desc: "Complete LT & HT electrical contracting solutions for industrial and commercial projects.",
    },
    {
        icon: Factory,
        title: "Industrial Installations",
        desc: "Reliable installation services for plants, machinery and industrial infrastructure.",
    },
    {
        icon: ShieldCheck,
        title: "Switchgear Systems",
        desc: "Safe and scalable switchgear and power distribution systems.",
    },
    {
        icon: Cable,
        title: "Cable Management",
        desc: "Structured cable tray, conduit and routing systems for efficient operations.",
    },
    {
        icon: HardHat,
        title: "Fire & Safety Systems",
        desc: "Industrial fire alarm, detection and safety compliance solutions.",
    },
    {
        icon: ClipboardCheck,
        title: "Maintenance & AMC",
        desc: "Preventive maintenance and annual maintenance contracts for uptime assurance.",
    },
];

const INDUSTRIES = [
    {
        icon: Factory,
        title: "Industrial Plants",
        desc: "High-performance electrical infrastructure for manufacturing facilities.",
    },
    {
        icon: Warehouse,
        title: "Warehouses & Logistics",
        desc: "Efficient lighting, power and automation systems for logistics operations.",
    },
    {
        icon: Building2,
        title: "Commercial Buildings",
        desc: "Reliable electrical systems for offices, retail and commercial spaces.",
    },
    {
        icon: GraduationCap,
        title: "Educational Institutions",
        desc: "Safe and dependable electrical systems for campuses and institutions.",
    },
];

const PROCESS = [
    "Consultation",
    "Site Inspection",
    "Planning & Design",
    "Installation",
    "Testing & Commissioning",
    "Maintenance Support",
];

function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                    <img
                        src={servicesHero}
                        alt="Industrial Electrical Services"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                        className="absolute inset-0"
                        style={{ background: "var(--gradient-hero)" }}
                    />

                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                        <div className="max-w-3xl">
                            <nav className="text-xs uppercase tracking-[0.2em] text-white/70">
                                <Link to="/" className="hover:text-primary">
                                    Home
                                </Link>

                                <span className="mx-2">/</span>

                                <span className="text-primary">Services</span>
                            </nav>

                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
                                Our <span className="text-primary">Services</span>
                            </h1>

                            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
                                Complete industrial electrical solutions engineered for safety,
                                reliability and operational excellence.
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
                </section>

                {/* Intro */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-5">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    What We Deliver
                                </span>

                                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                    Complete industrial electrical infrastructure.
                                </h2>
                            </div>

                            <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Maryam Enterprises provides end-to-end industrial and
                                    commercial electrical services tailored for modern business
                                    operations and critical infrastructure environments.
                                </p>

                                <p>
                                    From electrical contracting and switchgear systems to cable
                                    management, lighting and safety infrastructure, every project
                                    is executed with precision engineering and certified
                                    workmanship.
                                </p>

                                <p>
                                    We combine technical expertise, industry compliance and
                                    execution excellence to ensure safe, scalable and reliable
                                    electrical systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Main Services
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Solutions built for industrial performance.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {SERVICES.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="group rounded-xl bg-card border border-border p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                                        {title}
                                    </h3>

                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Industries We Serve
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Powering mission-critical sectors.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 gap-5">
                            {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="rounded-xl border border-border bg-card p-8"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                                        {title}
                                    </h3>

                                    <p className="mt-2 text-muted-foreground leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 lg:py-24 bg-navy text-navy-foreground relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-25"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 20% 0%, oklch(0.72 0.16 60 / 0.35), transparent 45%)",
                        }}
                    />

                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Project Workflow
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Structured execution process.
                            </h2>
                        </div>

                        <div className="mt-14 grid grid-cols-2 lg:grid-cols-6 gap-4">
                            {PROCESS.map((step, index) => (
                                <div
                                    key={step}
                                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
                                >
                                    <div className="mx-auto grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold">
                                        {index + 1}
                                    </div>

                                    <h3 className="mt-4 text-sm font-semibold">{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 lg:py-24 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-navy text-navy-foreground p-10 lg:p-16 text-center relative overflow-hidden">
                            <div className="max-w-3xl mx-auto">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Let’s Build Together
                                </span>

                                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                    Need Reliable Industrial Solutions?
                                </h2>

                                <p className="mt-6 text-navy-foreground/80 text-lg leading-relaxed">
                                    Talk to our engineering team about your project, get expert
                                    consultation and execution support.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                                        <PhoneCall className="h-5 w-5" />
                                        Call Now
                                    </button>

                                    <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition-colors">
                                        WhatsApp Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaBand />
            </main>

            <Footer />
        </div>
    )
}

export default ServicesPage;