import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaBook,
} from "react-icons/fa";

function GitHubStats() {

  const [githubData, setGithubData] = useState(null);

  useEffect(() => {

    fetch("https://api.github.com/users/UnnayanSingh")

      .then((response) => response.json())

      .then((data) => {
        setGithubData(data);
      })

      .catch((error) => {
        console.error(error);
      });

  }, []);

  if (!githubData) {
    return (
      <div className="text-center py-20 text-xl">
        Loading GitHub Stats...
      </div>
    );
  }

  return (
    <section
      id="github"
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
          GitHub Stats
        </h2>

        {/* CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg shadow-lg">

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* PROFILE IMAGE */}
            <img
              src={githubData.avatar_url}
              alt="GitHub"
              className="w-40 h-40 rounded-full border-4 border-cyan-400"
            />

            {/* INFO */}
            <div className="flex-1">

              <h3 className="text-4xl font-bold mb-3">
                {githubData.name}
              </h3>

              <p className="text-gray-300 mb-8">
                @{githubData.login}
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-slate-900 rounded-2xl p-6 text-center">

                  <FaBook className="text-4xl mx-auto text-yellow-400 mb-4" />

                  <h4 className="text-3xl font-bold">
                    {githubData.public_repos}
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Repositories
                  </p>

                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-center">

                  <FaUsers className="text-4xl mx-auto text-cyan-400 mb-4" />

                  <h4 className="text-3xl font-bold">
                    {githubData.followers}
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Followers
                  </p>

                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-center">

                  <FaGithub className="text-4xl mx-auto text-white mb-4" />

                  <h4 className="text-3xl font-bold">
                    {githubData.following}
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Following
                  </p>

                </div>

              </div>

              {/* BUTTON */}
              <a
                href={githubData.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
              >
                Visit GitHub
              </a>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default GitHubStats;