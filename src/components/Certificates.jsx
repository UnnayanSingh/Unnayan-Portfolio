import { motion } from "framer-motion";

import cisco from "../assets/certificates/cisco.png";
import cloudServices from "../assets/certificates/cloud services.jpg";
import deloitte from "../assets/certificates/deloitte.jpg";
import devops from "../assets/certificates/devops.jpg";
import genAI from "../assets/certificates/gen ai.jpg";
import ghci from "../assets/certificates/hac.png";

function Certificates() {

  const certificates = [

    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",

      issuer: "Oracle",

      image: genAI,
    },

    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",

      issuer: "Oracle",

      image: devops,
    },

    {
      title: "Oracle AI Cloud Database Services 2025 Certified Professional",

      issuer: "Oracle",

      image: cloudServices,
    },

    {
      title: "Deloitte Australia - Data Analytics Job Simulation",

      issuer: "Deloitte",

      image: deloitte,
    },

    {
      title: "Introduction to Cybersecurity",

      issuer: "Cisco",

      image: cisco,
    },

    {
        title: "GHCI 2025 - Hackathon Participation Certificate",
        
        issuer: "GHCI 2025",
        
        image: ghci,
    },

  ];

  return (
    <section
      id="certificates"
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
          Certifications
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg shadow-lg hover:border-cyan-400 transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-52 object-contain bg-white p-3"
              />

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-white leading-8 mb-3">
                  {certificate.title}
                </h3>

                <p className="text-gray-400">
                  Issued by {certificate.issuer}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Certificates;