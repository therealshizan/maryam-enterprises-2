import { CtaBand } from "../components/home/CtaBand";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import { Hero } from "../components/home/Hero";
import { Industries } from "../components/home/Industries";
import { Intro } from "../components/home/Intro";
import { Projects } from "../components/home/Projects";
import { Services } from "../components/home/Services";
import { WhyChooseUs } from "../components/home/WhyChooseUs";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <Intro />
                <WhyChooseUs />
                <Services />
                <Industries />
                <Projects />
                <CtaBand />
            </main>
            <Footer />
        </div>
    )
}
