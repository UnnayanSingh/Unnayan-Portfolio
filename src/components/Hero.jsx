import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImg from "../assets/image.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-14 min-h-screen"
    >

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >

        <p className="text-yellow-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Unnayan Singh
        </h1>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "React Developer",
            2000,
            "Cybersecurity Student",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl font-semibold text-cyan-400"
        />

        <p className="text-gray-300 mt-8 leading-8 text-lg">
          Passionate about creating modern, scalable and user-friendly web applications with clean design and seamless user experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-5 mt-10 flex-wrap">

          <a
            href="#projects"
            className="bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#"
            onClick={() => alert("Resume will be uploaded soon")}
            className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Download CV
          </a>

        </div>

        {/* SOCIAL */}
        <div className="flex gap-6 mt-10 text-3xl">

          <a
            href="https://github.com/UnnayanSingh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/unnayan-singh-2b9062289"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:unnayansingh2005@gmail.com"
            className="hover:text-yellow-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >

        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-yellow-400 to-cyan-500 blur-3xl opacity-20 absolute"></div>

        <img
        src={profileImg}
        alt="Unnayan Singh"
        className="relative w-72 md:w-96 rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-105 transition duration-500"
    />

      </motion.div>

    </section>
  );
}

export default Hero;