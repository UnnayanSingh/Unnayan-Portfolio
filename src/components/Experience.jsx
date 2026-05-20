import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function Experience() {

  const experiences = [

    {
      company: "Edunet Foundation",

      role: "Frontend Web Developer Intern",

      duration: "August 2025 - September 2025",

      description: [
        "Completed a 6-week Front-End Web Development internship with AICTE and Edunet Foundation in collaboration with IBM SkillsBuild.",

        "Gained hands-on experience in developing responsive and user-friendly web interfaces using modern frontend technologies.",

        "Worked on UI/UX implementation, responsive layouts and real-world frontend development practices.",

        "Enhanced practical knowledge of HTML, CSS, JavaScript and modern web development workflows.",
      ],
    },

  ];

  return (
    <section
      id="experience"
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
          Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-lg hover:border-cyan-400 transition duration-300"
            >

              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div>

                  <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    <FaBriefcase className="text-yellow-400" />

                    {exp.role}
                  </h3>

                  <p className="text-cyan-400 text-lg mt-2">
                    {exp.company}
                  </p>

                </div>

                <div className="flex items-center gap-3 text-gray-400">

                  <FaCalendarAlt className="text-yellow-400" />

                  {exp.duration}

                </div>

              </div>

              {/* DESCRIPTION */}
              <ul className="space-y-4">

                {exp.description.map((point, idx) => (

                  <li
                    key={idx}
                    className="text-gray-300 leading-7 flex gap-3"
                  >

                    <span className="text-cyan-400 mt-1">
                      •
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Experience;