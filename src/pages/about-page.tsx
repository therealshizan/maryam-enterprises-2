import { Award, Clock, Eye, HardHat, HeartHandshake, Lightbulb, Lock, ShieldCheck, Smile, Sparkles, Target, Users } from "lucide-react";
import { Header } from "../components/home/Header";
import { Link } from "react-router-dom";
import { CtaBand } from "../components/home/CtaBand";
import { Footer } from "../components/home/Footer";

import aboutHero from "../assets/about-hero.jpg";


const STATS = [
    { value: "15+", label: "Years of Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "10+", label: "Industries Served" },
    { value: "80+", label: "Happy Clients" },
    { value: "50+", label: "Team Strength" },
];

const STRENGTHS = [
    { icon: Users, title: "Skilled Workforce", desc: "Certified electricians, supervisors and engineers on every site." },
    { icon: Award, title: "Industry Expertise", desc: "Over a decade delivering complex industrial electrical projects." },
    { icon: HardHat, title: "Safety Compliance", desc: "Strict adherence to electrical codes, PPE protocols and SOPs." },
    { icon: Clock, title: "Timely Execution", desc: "Milestone-driven delivery with transparent progress reporting." },
    { icon: ShieldCheck, title: "Quality Assurance", desc: "ISI-grade materials and documented QA at every milestone." },
    { icon: HeartHandshake, title: "Client-Focused Approach", desc: "Long-term partnerships built on responsiveness and trust." },
];

const VALUES = [
    { icon: HardHat, title: "Safety First", desc: "Every site, every shift, safety drives every decision we make." },
    { icon: Award, title: "Quality Commitment", desc: "Engineering-grade materials and workmanship, no compromises." },
    { icon: Lock, title: "Transparency", desc: "Clear scope, honest timelines and open communication throughout." },
    { icon: ShieldCheck, title: "Reliability", desc: "Dependable execution and long-term maintenance you can count on." },
    { icon: Lightbulb, title: "Innovation", desc: "Modern techniques, smart controls and energy-efficient design." },
    { icon: Smile, title: "Customer Satisfaction", desc: "Measured by repeat clients, referrals and lasting relationships." },
];

function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Banner */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                    <img
                        src={aboutHero}
                        alt="Maryam Enterprises engineers inspecting industrial switchgear"
                        width={1920}
                        height={1024}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                        className="absolute inset-0"
                        style={{ background: "var(--gradient-hero)" }}
                        aria-hidden
                    />
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                        <div className="max-w-3xl">
                            <nav
                                aria-label="Breadcrumb"
                                className="text-xs uppercase tracking-[0.2em] text-white/70"
                            >
                                <Link to="/" className="hover:text-primary">
                                    Home
                                </Link>
                                <span className="mx-2">/</span>
                                <span className="text-primary">About Us</span>
                            </nav>
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
                                About <span className="text-primary">Us</span>
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
                                A trusted industrial and electrical solutions partner,
                                engineered for safety, built for uptime, and committed to your
                                success.
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
                </section>

                {/* Company Introduction */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-5">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Who We Are
                                </span>
                                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                    Powering industry, one project at a time.
                                </h2>
                            </div>
                            <div className="lg:col-span-7 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Maryam Enterprises is a professionally managed industrial and
                                    electrical solutions company serving manufacturers, logistics
                                    operators, commercial complexes and institutional clients
                                    across India. From day one, our focus has been on engineering
                                    reliability into every installation.
                                </p>
                                <p>
                                    Founded over a decade ago, we have grown from a specialised
                                    electrical contractor into a full-service partner offering LT
                                    & HT contracting, switchgear engineering, industrial
                                    installations, lighting, cable management and fire & safety
                                    systems, all delivered by a certified in-house team.
                                </p>
                                <p>
                                    Today, our work powers pharma plants, warehouses, factories,
                                    educational campuses and commercial projects nationwide. We
                                    combine field-tested expertise with modern engineering
                                    standards to deliver outcomes that last.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Mission &amp; Vision
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                What drives us forward.
                            </h2>
                        </div>

                        <div className="mt-12 grid md:grid-cols-2 gap-6">
                            <div
                                className="rounded-2xl bg-card border border-border p-8 lg:p-10"
                                style={{ boxShadow: "var(--shadow-card)" }}
                            >
                                <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-2xl font-semibold text-foreground">
                                    Our Mission
                                </h3>
                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    To deliver safe, efficient and dependable electrical
                                    solutions that keep our clients' operations running, through
                                    certified engineering, rigorous quality control and an
                                    unwavering commitment to on-time delivery.
                                </p>
                            </div>

                            <div
                                className="rounded-2xl bg-card border border-border p-8 lg:p-10"
                                style={{ boxShadow: "var(--shadow-card)" }}
                            >
                                <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                                    <Eye className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-2xl font-semibold text-foreground">
                                    Our Vision
                                </h3>
                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    To be India's most trusted industrial electrical partner,
                                    recognised for engineering excellence, safety leadership and
                                    the long-term success we help our clients achieve.
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-6 rounded-2xl bg-navy text-navy-foreground p-8 lg:p-10 relative overflow-hidden"
                        >
                            <div className="flex items-start gap-4">
                                <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/20 text-primary shrink-0">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Our Commitment</h3>
                                    <p className="mt-2 text-navy-foreground/80 leading-relaxed">
                                        We commit to every project with the same standard, safety
                                        first, quality always, and execution that respects your
                                        timelines and your budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Why Choose Us
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Strengths that set us apart.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 gap-5">
                            {STRENGTHS.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="group rounded-xl bg-card border border-border p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {title}
                                            </h3>
                                            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                                                {desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="py-16 lg:py-20 bg-navy text-navy-foreground relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-25"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 20% 0%, oklch(0.72 0.16 60 / 0.35), transparent 45%), radial-gradient(circle at 80% 100%, oklch(0.4 0.1 250 / 0.4), transparent 50%)",
                        }}
                        aria-hidden
                    />
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                By The Numbers
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Our track record.
                            </h2>
                        </div>

                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                            {STATS.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
                                >
                                    <div className="text-3xl lg:text-4xl font-bold font-display text-primary">
                                        {s.value}
                                    </div>
                                    <div className="mt-2 text-xs uppercase tracking-wider text-navy-foreground/70">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 lg:py-28 bg-secondary/40">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Our Values
                            </span>
                            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                The principles behind every project.
                            </h2>
                        </div>

                        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {VALUES.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="rounded-xl bg-card border border-border p-7"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <div className="grid place-items-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
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

                <CtaBand />
            </main>
            <Footer />
        </div>
    );
}


export default AboutPage;