import {
    ArrowRight,
    Factory,
    Warehouse,
    Building2,
    GraduationCap,
    Hospital,
    Hotel,
    ShieldCheck,
    HardHat,
    Clock3,
    BadgeCheck,
    BriefcaseBusiness,
} from "lucide-react";

import { Header } from "../components/home/Header";
import { Footer } from "../components/home/Footer";
import { CtaBand } from "../components/home/CtaBand";

import industriesHero from "../assets/industries-hero.jpg";
import { Link } from "react-router-dom";


const INDUSTRIES = [
    {
        icon: Hospital,
        title: "Pharmaceutical Industry",
        desc: "Reliable electrical infrastructure for clean-room environments, production facilities and pharma-grade operations.",
    },
    {
        icon: Building2,
        title: "Commercial Buildings",
        desc: "Smart and scalable electrical systems for commercial complexes and corporate spaces.",
    },
    {
        icon: Warehouse,
        title: "Warehousing & Logistics",
        desc: "High-efficiency lighting, distribution and safety systems for logistics operations.",
    },
    {
        icon: Factory,
        title: "Manufacturing Plants",
        desc: "Heavy-duty industrial electrical infrastructure engineered for production environments.",
    },
    {
        icon: GraduationCap,
        title: "Educational Institutions",
        desc: "Safe and structured electrical systems for campuses, schools and training centres.",
    },
    {
        icon: Hotel,
        title: "Hospitality",
        desc: "Reliable power systems and lighting solutions designed for hospitality operations.",
    },
    {
        icon: Hospital,
        title: "Healthcare Facilities",
        desc: "Critical electrical systems supporting hospitals, laboratories and healthcare infrastructure.",
    },
    {
        icon: Factory,
        title: "Industrial Factories",
        desc: "Industrial-grade power distribution and automation-ready infrastructure solutions.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Corporate Offices",
        desc: "Modern workplace electrical infrastructure with safety and energy efficiency.",
    },
];

const SOLUTIONS = [
    {
        title: "Pharma-Grade Electrical Systems",
        points: [
            "Clean-room compliant installations",
            "Critical backup power support",
            "Reliable distribution systems",
        ],
    },
    {
        title: "Warehouse Safety & Lighting",
        points: [
            "High-bay lighting systems",
            "Emergency safety systems",
            "Structured cable management",
        ],
    },
    {
        title: "Commercial Automation Solutions",
        points: [
            "Building automation support",
            "Smart electrical infrastructure",
            "Energy-efficient systems",
        ],
    },
    {
        title: "Industrial Distribution Systems",
        points: [
            "LT & HT power distribution",
            "Switchgear integration",
            "Industrial safety compliance",
        ],
    },
];

const PROJECTS = [
    {
        industry: "Pharmaceutical",
        title: "Pharma Production Facility",
        desc: "Complete electrical infrastructure and switchgear installation for a pharma manufacturing unit.",
    },
    {
        industry: "Warehousing",
        title: "Logistics Warehouse Project",
        desc: "Warehouse lighting, cable routing and industrial safety systems implementation.",
    },
    {
        industry: "Commercial",
        title: "Corporate Office Infrastructure",
        desc: "Commercial electrical systems and structured distribution setup for office operations.",
    },
];

const TRUST_POINTS = [
    {
        icon: BadgeCheck,
        title: "Industry Expertise",
        desc: "Decade-long experience across industrial sectors and commercial infrastructure.",
    },
    {
        icon: ShieldCheck,
        title: "Safety Standards",
        desc: "Strict adherence to industrial safety practices and engineering protocols.",
    },
    {
        icon: HardHat,
        title: "Certified Engineers",
        desc: "Skilled technical workforce with practical project execution expertise.",
    },
    {
        icon: Clock3,
        title: "Timely Delivery",
        desc: "Milestone-driven project management with transparent execution timelines.",
    },
];

function IndustriesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                    <img
                        src={industriesHero}
                        alt="Industries We Serve"
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

                                <span className="text-primary">Industries</span>
                            </nav>

                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
                                Industries <span className="text-primary">We Serve</span>
                            </h1>

                            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
                                Delivering industry-focused electrical infrastructure solutions
                                engineered for safety, uptime and operational reliability.
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
                </section>

                {/* Introduction */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-5">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Industry Expertise
                                </span>

                                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                    Electrical solutions tailored for critical industries.
                                </h2>
                            </div>

                            <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Maryam Enterprises serves multiple industries with customized
                                    industrial electrical solutions designed around operational
                                    safety, scalability and reliability.
                                </p>

                                <p>
                                    Our team understands the technical, compliance and execution
                                    requirements of modern industrial facilities, commercial
                                    spaces and mission-critical environments.
                                </p>

                                <p>
                                    From pharmaceutical plants and warehouses to commercial
                                    complexes and educational institutions, we engineer dependable
                                    systems that support uninterrupted operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Grid */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Sectors We Power
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Built for modern industrial environments.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
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

                {/* Industry Solutions */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Industry Solutions
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Customized solutions for every sector.
                            </h2>
                        </div>

                        <div className="mt-14 grid lg:grid-cols-2 gap-5">
                            {SOLUTIONS.map((solution) => (
                                <div
                                    key={solution.title}
                                    className="rounded-xl border border-border bg-card p-8"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <h3 className="text-2xl font-semibold text-foreground">
                                        {solution.title}
                                    </h3>

                                    <ul className="mt-5 space-y-3">
                                        {solution.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex items-start gap-3 text-muted-foreground"
                                            >
                                                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="max-w-2xl">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Featured Projects
                                </span>

                                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                    Experience across multiple industries.
                                </h2>
                            </div>

                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-primary font-medium"
                            >
                                View Projects

                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-14 grid lg:grid-cols-3 gap-5">
                            {PROJECTS.map((project) => (
                                <div
                                    key={project.title}
                                    className="overflow-hidden rounded-xl border border-border bg-card"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="h-56 bg-secondary" />

                                    <div className="p-7">
                                        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                                            {project.industry}
                                        </span>

                                        <h3 className="mt-3 text-xl font-semibold text-foreground">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 text-muted-foreground leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>
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
                                Why Industries Trust Us
                            </span>

                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Trusted industrial execution partner.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 gap-5">
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
                <section className="py-20 lg:py-24 bg-navy text-navy-foreground relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-25"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 20% 0%, oklch(0.72 0.16 60 / 0.35), transparent 45%)",
                        }}
                    />

                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="max-w-4xl mx-auto">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Let’s Build Together
                            </span>

                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                Looking for Industry-Specific Electrical Solutions?
                            </h2>

                            <p className="mt-6 text-lg text-navy-foreground/80 leading-relaxed">
                                Connect with our engineering team for customized industrial
                                electrical infrastructure and execution support.
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
                </section>

                <CtaBand />
            </main>

            <Footer />
        </div>
    );
}

export default IndustriesPage;