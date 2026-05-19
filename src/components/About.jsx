import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-20"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-yellow-400 mb-14 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SECTION */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">

            <p className="text-gray-300 leading-8 text-lg">
              I am a final year Computer Science and Engineering student
              specializing in Cybersecurity with a strong interest in
              full-stack development, frontend technologies, and modern
              web applications. I enjoy building secure, scalable and
              user-friendly applications with clean UI/UX experiences.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              I have hands-on experience working with React.js,
              JavaScript, Python, MySQL, Flask, GitHub and cloud-based
              technologies. Through projects like HushImage, NoteShelf
              and DoMate, I have developed practical skills in
              authentication systems, API integration, responsive
              frontend development and secure application design.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              I continuously explore new technologies and improve my
              problem-solving abilities through real-world projects,
              certifications and hands-on development experience.
            </p>

          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">

            <div className="space-y-7 text-lg">

              {/* EDUCATION */}
              <div>
                <p className="text-yellow-400 font-semibold mb-2">
                  Education
                </p>

                <p className="text-gray-300">
                  B.Tech Computer Science & Engineering
                  (Cybersecurity)
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Pranveer Singh Institute of Technology
                </p>
              </div>

              {/* TECH STACK */}
              <div>
                <p className="text-yellow-400 font-semibold mb-2">
                  Tech Stack
                </p>

                <p className="text-gray-300">
                  React.js, JavaScript, Python, Flask,
                  MySQL, Tailwind CSS
                </p>
              </div>

              {/* CERTIFICATIONS */}
              <div>
                <p className="text-yellow-400 font-semibold mb-2">
                  Certifications
                </p>

                <p className="text-gray-300">
                  Oracle Cloud Infrastructure Certified
                  DevOps Professional
                </p>

                <p className="text-gray-300 mt-2">
                  Cisco Introduction to Cybersecurity
                </p>
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-yellow-400 font-semibold mb-2">
                  Location
                </p>

                <p className="text-gray-300">
                  Kanpur, Uttar Pradesh
                </p>
              </div>

              {/* AVAILABILITY */}
              <div>
                <p className="text-yellow-400 font-semibold mb-2">
                  Availability
                </p>

                <p className="text-gray-300">
                  Open to Full-Time & Internship Opportunities
                </p>
              </div>

              {/* RESUME BUTTON */}
              <a
                href="#"
                onClick={() => alert("Resume will be uploaded soon")}
                className="inline-block mt-4 bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;