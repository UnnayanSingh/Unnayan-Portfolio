import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiFlask,
} from "react-icons/si";

function Skills() {

  const skills = [

  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },

  {
    name: "Python",
    icon: <FaPython />,
    color: "text-blue-400",
  },

  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-300",
  },

  {
    name: "Flask",
    icon: <SiFlask />,
    color: "text-gray-300",
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },

  {
    name: "REST APIs",
    icon: <FaJs />,
    color: "text-green-400",
  },

  {
    name: "Authentication",
    icon: <FaPython />,
    color: "text-purple-400",
  },

  {
    name: "Responsive Design",
    icon: <FaHtml5 />,
    color: "text-pink-400",
  },

];

  return (
    <section
      id="skills"
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
          Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg flex flex-col items-center justify-center shadow-lg hover:border-yellow-400 transition duration-300"
            >

              <div className={`text-6xl mb-5 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;