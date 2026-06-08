import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
} from "react-icons/fa";

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
        className="max-w-7xl mx-auto"
      >

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-yellow-400 mb-16 text-center">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SECTION */}
          <motion.div
  whileHover={{ scale: 1.01 }}
  className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-lg shadow-2xl"
>

  <p className="text-gray-300 leading-9 text-lg">
    I am a final-year Computer Science and Engineering student specializing in Cybersecurity with a strong interest in software development, cloud technologies, IT infrastructure and modern computing solutions.
  </p>

  <p className="text-gray-300 leading-9 text-lg mt-8">
    I have hands-on experience with React.js, JavaScript, Python, MySQL, Flask, GitHub and Oracle Cloud Infrastructure. Through projects such as HushImage, NoteShelf and SkyCast, I have developed practical skills in application development, database management, authentication systems, API integration, troubleshooting and secure software design.
  </p>

  <p className="text-gray-300 leading-9 text-lg mt-8">
    I continuously explore new technologies and strengthen my problem-solving abilities through real-world projects, certifications and hands-on development experience. I am passionate about building reliable, secure and user-focused technology solutions while continuously learning and adapting to emerging technologies.
  </p>

</motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-lg shadow-2xl"
          >

            <h3 className="text-4xl font-bold text-yellow-400 mb-12 flex items-center gap-4">
              <FaGraduationCap />
              Education
            </h3>

            <div className="space-y-10">

              {/* BTECH */}
              <div className="relative border-l-4 border-yellow-400 pl-8">

                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-yellow-400 rounded-full"></div>

                <div className="flex items-center gap-3 mb-3">
                  <FaGraduationCap className="text-yellow-400 text-xl" />

                  <h4 className="text-2xl font-semibold text-white">
                    B.Tech Computer Science & Engineering
                  </h4>
                </div>

                <p className="text-cyan-400 font-medium text-lg">
                  Cybersecurity Specialization
                </p>

                <p className="text-gray-300 mt-3 flex items-center gap-3">
                  <FaSchool className="text-yellow-400" />

                  Pranveer Singh Institute of Technology,
                  Kanpur
                </p>

                <p className="text-gray-300 mt-2">
                  GPA: 7.5/10 | Percentage: 75.5%
                </p>

                <p className="text-gray-400 mt-3 flex items-center gap-3">
                  <FaCalendarAlt className="text-yellow-400" />

                  2022 – 2026
                </p>

              </div>

              {/* INTERMEDIATE */}
              <div className="relative border-l-4 border-cyan-400 pl-8">

                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-400 rounded-full"></div>

                <div className="flex items-center gap-3 mb-3">
                  <FaSchool className="text-cyan-400 text-xl" />

                  <h4 className="text-2xl font-semibold text-white">
                    Intermediate (Class XII)
                  </h4>
                </div>

                <p className="text-gray-300">
                  Percentage: 73.4% (CBSE)
                </p>

                <p className="text-gray-400 mt-3 flex items-center gap-3">
                  <FaCalendarAlt className="text-cyan-400" />

                  2021 – 2022
                </p>

              </div>

              {/* HIGH SCHOOL */}
              <div className="relative border-l-4 border-pink-400 pl-8">

                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-pink-400 rounded-full"></div>

                <div className="flex items-center gap-3 mb-3">
                  <FaSchool className="text-pink-400 text-xl" />

                  <h4 className="text-2xl font-semibold text-white">
                    High School (Class X)
                  </h4>
                </div>

                <p className="text-gray-300">
                  Percentage: 78.3% (CBSE)
                </p>

                <p className="text-gray-400 mt-3 flex items-center gap-3">
                  <FaCalendarAlt className="text-pink-400" />

                  2019 – 2020
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;
