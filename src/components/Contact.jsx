import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

      .then(
        (result) => {
            console.log(result.text);
            alert("Message Sent Successfully!");
        },
        (error) => {
            console.log(error);
            alert(error.text);
        }
    );

    e.target.reset();
};

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-20"
    >

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg">

            <h3 className="text-3xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-300 leading-8 mb-10">
              I’m actively seeking opportunities for Software Engineer, Frontend Developer, and Internship roles.
              Feel free to connect with me.
            </p>

            {/* SOCIAL LINKS */}
            <div className="space-y-6">

              <a
                href="mailto:unnayansingh2005@gmail.com"
                className="flex items-center gap-4 hover:text-yellow-400 transition"
              >
                <FaEnvelope className="text-2xl" />
                unnayansingh2005@gmail.com
              </a>

              <a
                href="https://github.com/UnnayanSingh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-yellow-400 transition"
              >
                <FaGithub className="text-2xl" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/unnayan-singh-2b9062289"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-yellow-400 transition"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </a>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg space-y-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;