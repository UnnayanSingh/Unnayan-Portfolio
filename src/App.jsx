import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white overflow-x-hidden transition duration-300">

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* EXPERIENCE */}
      <Experience />
      
      {/* SKILLS */}
      <Skills />

      {/* CERTIFICATES */}
      <Certificates />

      {/* PROJECTS */}
      <Projects />

      {/* GITHUB STATS */}
      <GitHubStats />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;