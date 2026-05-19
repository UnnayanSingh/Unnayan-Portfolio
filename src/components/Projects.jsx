import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "HushImage",

      description:
        "A secure Image Steganography application developed using Python, Tkinter, Flask and MySQL that enables users to hide and reveal encrypted secret messages inside images using LSB (Least Significant Bit) steganography techniques. The application includes secure user authentication with password hashing, login/signup system, message history management, CSV/PDF export functionality, and an interactive GUI-based as well as web-based interface. Designed with a focus on security, usability and data protection, the project demonstrates practical implementation of encryption, authentication systems, database management and secure communication concepts.",

      tech: [
        "Python",
        "Tkinter",
        "Flask",
        "MySQL",
        "Encryption",
        "Steganography",
        "Authentication"
    ],

      github:
        "https://github.com/UnnayanSingh/Image-Steganography-GUI",

      live: "#",
      
    },

    {
      title: "DoMate",

      description:
        "Developed DoMate, a modern task management application focused on improving productivity and task organization using JavaScript and browser-based storage. The application allows users to add, edit, delete and reorder tasks with drag-and-drop functionality, assign priority levels and due dates, and monitor progress through an interactive completion tracker. Implemented dark/light mode toggle, CSV import/export functionality, PDF generation using jsPDF, and LocalStorage integration for persistent offline task management. Designed a responsive and user-friendly interface to provide a smooth productivity experience across devices.",
      
        tech: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "LocalStorage",
        "jsPDF",
        "CSV Import/Export",
        "Responsive Design",
        "Dark Mode"
    ],

      github: "https://github.com/UnnayanSingh/DoMate",

      live: "https://unnayansingh.github.io/DoMate/",
    },

    {
      title: "Weather Dashboard",

      description:
       "Developed a responsive real-time weather dashboard using HTML5, CSS3 and JavaScript (ES6) that displays live weather conditions, temperature, humidity and wind details using the OpenWeatherMap API. Implemented dynamic API integration, DOM manipulation, local storage for user preferences, dark mode support and responsive UI design to provide an interactive and seamless user experience across devices.",

      tech: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "OpenWeatherMap API",
        "Local Storage",
        "Responsive Design",
        "Dark Mode"
    ],

      github: "https://github.com/UnnayanSingh/Weather-Dashboard",

      live: "https://unnayansingh.github.io/Weather-Dashboard/",
    },

    {
      title: "NoteShelf",

      description:
        "Developed NoteShelf, a full-stack online notes sharing platform using Flask and MySQL that enables users to explore, view and securely download subject-wise study notes in PDF format. Implemented secure user and admin authentication with password hashing using Werkzeug, protected PDF downloads, subject and file management dashboard, and download tracking analytics. The application also supports CRUD operations for managing subjects and PDFs, responsive frontend design using Tailwind CSS, and secure backend handling for scalable content management.",

      tech: [
        "Python",
        "Flask",
        "MySQL",
        "Tailwind CSS",
        "Werkzeug",
        "Gunicorn",
        "Authentication",
        "CRUD Operations"
    ],

      github: "https://github.com/UnnayanSingh/NoteShelf",

      live: "#",
    },

  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-20"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Projects
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-lg hover:border-cyan-400 transition duration-300"
            >

              {/* TITLE */}
              <h3 className="text-3xl font-bold mb-5 text-white">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech, idx) => (

                  <span
                    key={idx}
                    className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-400/20"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex gap-5 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white px-5 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;