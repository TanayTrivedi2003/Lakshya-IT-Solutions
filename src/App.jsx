import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* Navbar har page pe */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer har page pe */}
      <Footer />
    </>
  );
}

export default App;