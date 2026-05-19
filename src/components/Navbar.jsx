import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

  /* ACTIVE SECTION TRACKING */
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },

      {
        threshold: 0.6,
      }

    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);

  /* NAV LINK STYLE */
  const navLink = (section) =>
    activeSection === section
      ? "text-yellow-500 font-semibold"
      : "hover:text-yellow-500 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-black/10 dark:border-white/10 transition duration-300">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-yellow-500">
          Unnayan
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg text-black dark:text-white">

          <li>
            <a href="#home" className={navLink("home")}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={navLink("about")}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className={navLink("skills")}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className={navLink("projects")}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className={navLink("contact")}>
              Contact
            </a>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-black dark:text-white hover:text-yellow-500 transition"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

          {/* MOBILE MENU BUTTON */}
          <div
            className="md:hidden text-2xl cursor-pointer text-black dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-black/10 dark:border-white/10 px-6 py-6 transition duration-300">

          <ul className="flex flex-col gap-6 text-lg text-black dark:text-white">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={navLink("home")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={navLink("about")}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className={navLink("skills")}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={navLink("projects")}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={navLink("contact")}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;