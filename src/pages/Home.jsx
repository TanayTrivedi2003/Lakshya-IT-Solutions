import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import CoursesSection from "../components/CoursesSection";
import Features from "../components/Features";
function Home() {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <CoursesSection />
            <Features />
        </>
    );
}

export default Home;