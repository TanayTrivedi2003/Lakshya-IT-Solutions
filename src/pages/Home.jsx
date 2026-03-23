import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import CoursesSection from "../components/CoursesSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
function Home() {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <CoursesSection />
            <Features />
            <Testimonials />
            <CTA />
        </>
    );
}

export default Home;