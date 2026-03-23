import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import CoursesSection from "../components/CoursesSection";
function Home() {
    return (
        <>
            <Hero />
            <About />
            <Stats />
            <CoursesSection />
        </>
    );
}

export default Home;