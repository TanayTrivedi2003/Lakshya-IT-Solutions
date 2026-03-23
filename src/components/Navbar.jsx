import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    // ✅ OUTSIDE CLICK CLOSE
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-inner">

                {/* LOGO */}
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </Link>

                {/* DESKTOP LINKS */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                {/* RIGHT SIDE */}
                <div className="nav-right">

                    {/* CTA */}
                    <Link to="/courses">
                        <button className="nav-enroll">Enroll Now →</button>
                    </Link>

                    {/* HAMBURGER */}
                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                ref={menuRef}
                className={`mobile-menu ${menuOpen ? "open" : ""}`}
            >
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;