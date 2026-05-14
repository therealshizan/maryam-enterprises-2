import {
    ArrowRight,
    Factory,
    Warehouse,
    Building2,
    GraduationCap,
    Hospital,
    MapPin,
    ShieldCheck,
    HardHat,
    Clock3,
    BadgeCheck,
    ClipboardCheck,
} from "lucide-react";

import { Header } from "../components/home/Header";
import { Footer } from "../components/home/Footer";
import { CtaBand } from "../components/home/CtaBand";

import projectsHero from "../assets/projects.jpeg";
import { Link } from "react-router-dom";


const FEATURED_PROJECTS = [
    {
        industry: "Pharmaceutical",
        title: "Pharma Manufacturing Facility",
        client: "Confidential Pharma Client",
        location: "Mumbai, Maharashtra",
        image:
            "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
        desc: "Complete electrical infrastructure, LT panel integration, cable management and industrial safety systems for a pharmaceutical production facility.",
    },
    {
        industry: "Warehousing",
        title: "Logistics Warehouse Infrastructure",
        client: "Leading Logistics Company",
        location: "Bhiwandi, Maharashtra",
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
        desc: "Warehouse lighting systems, industrial distribution setup and emergency safety infrastructure for large-scale logistics operations.",
    },
    {
        industry: "Commercial",
        title: "Corporate Office Electrical Setup",
        client: "Commercial Business Group",
        location: "Pune, Maharashtra",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
        desc: "Commercial electrical systems, structured wiring and energy-efficient infrastructure for modern office operations.",
    },
];

const GALLERY = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
];

const INDUSTRIES = [
    {
        icon: Hospital,
        title: "Pharma Projects",
        desc: "Production facilities, clean-room electrical systems and compliant infrastructure projects.",
    },
    {
        icon: Warehouse,
        title: "Warehousing Projects",
        desc: "Industrial lighting, safety systems and logistics infrastructure execution.",
    },
    {
        icon: Building2,
        title: "Commercial Projects",
        desc: "Corporate offices, retail spaces and commercial electrical infrastructure.",
    },
    {
        icon: Factory,
        title: "Manufacturing Projects",
        desc: "Industrial plants, machinery support systems and factory infrastructure.",
    },
    {
        icon: GraduationCap,
        title: "Educational Projects",
        desc: "Campus electrical infrastructure and institutional safety systems.",
    },
];

const PROCESS = [
    "Consultation",
    "Site Survey",
    "Planning",
    "Installation",
    "Testing",
    "Handover",
];

const TRUST_POINTS = [
    {
        icon: BadgeCheck,
        title: "Industry Expertise",
        desc: "Extensive experience across industrial and commercial sectors.",
    },
    {
        icon: ShieldCheck,
        title: "Safety Standards",
        desc: "Strict execution standards with industrial safety compliance.",
    },
    {
        icon: HardHat,
        title: "Skilled Workforce",
        desc: "Certified engineers, technicians and experienced site teams.",
    },
    {
        icon: Clock3,
        title: "Timely Completion",
        desc: "Milestone-based execution and transparent project management.",
    },
    {
        icon: ClipboardCheck,
        title: "Quality Assurance",
        desc: "Engineering-grade quality checks and execution monitoring.",
    },
];

function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                    <img
                        src={projectsHero}
                        alt="Industrial Projects"
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

                                <span className="text-primary">Projects</span>
                            </nav>

                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
                                Our <span className="text-primary">Projects</span>
                            </h1>

                            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
                                Proven execution capabilities across industrial, commercial and
                                mission-critical infrastructure projects.
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
                                    Project Expertise
                                </span>

                                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                    Delivering reliable industrial infrastructure projects.
                                </h2>
                            </div>

                            <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Maryam Enterprises executes industrial and commercial
                                    electrical projects with a strong focus on safety, reliability
                                    and engineering quality.
                                </p>

                                <p>
                                    Our experience spans pharmaceutical facilities, warehouses,
                                    manufacturing plants, corporate offices and institutional
                                    infrastructure projects.
                                </p>

                                <p>
                                    Every project is managed through structured execution,
                                    certified technical teams and industry-standard engineering
                                    practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Featured Projects
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Real execution. Proven reliability.
                            </h2>
                        </div>

                        <div className="mt-14 space-y-8">
                            {FEATURED_PROJECTS.map((project, index) => (
                                <div
                                    key={project.title}
                                    className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                                        }`}
                                >
                                    <div className="overflow-hidden rounded-2xl border border-border">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                                            {project.industry}
                                        </span>

                                        <h3 className="mt-4 text-3xl font-bold text-foreground">
                                            {project.title}
                                        </h3>

                                        <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
                                            <div>
                                                <span className="font-semibold text-foreground">
                                                    Client:
                                                </span>{" "}
                                                {project.client}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-primary" />

                                                {project.location}
                                            </div>
                                        </div>

                                        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                                            {project.desc}
                                        </p>

                                        <button className="mt-8 inline-flex items-center gap-2 text-primary font-medium">
                                            View Project

                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Project Gallery
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Site execution and infrastructure showcase.
                            </h2>
                        </div>

                        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-5">
                            {GALLERY.map((image, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-2xl border border-border"
                                >
                                    <img
                                        src={image}
                                        alt={`Project Gallery ${index + 1}`}
                                        className="h-[260px] w-full object-cover transition duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry-wise Projects */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Industry-wise Projects
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Experience across diverse industries.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="rounded-xl border border-border bg-card p-7"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold text-foreground">
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
                                Execution Process
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Structured project delivery workflow.
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

                {/* Why Trust Us */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Why Clients Trust Us
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Built on quality, safety and execution excellence.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {TRUST_POINTS.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="rounded-xl border border-border bg-card p-7"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold text-foreground">
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

                {/* CTA */}
                <section className="py-20 lg:py-24 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-navy text-navy-foreground p-10 lg:p-16 text-center relative overflow-hidden">
                            <div className="max-w-4xl mx-auto">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Let’s Build Together
                                </span>

                                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                    Planning Your Next Industrial Project?
                                </h2>

                                <p className="mt-6 text-lg text-navy-foreground/80 leading-relaxed">
                                    Connect with our engineering team for reliable industrial
                                    electrical execution and project consultation.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                                        Contact Us
                                    </button>

                                    <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition-colors">
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
    );
}

export default ProjectsPage