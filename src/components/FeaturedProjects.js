import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const repos = [
  {
    name: "TummyCall",
    desc: "A high-performance food ordering app with live Swiggy API integration.",
    tech: ["React", "Tailwind", "Redux"],
    link: "https://github.com/niraj1903/tummyCall",
    demo: "https://tubular-sorbet-85e94d.netlify.app/",
  },
  {
    name: "Leetcode",
    desc: "Focused on improving my understanding of algorithms, data structures, and problem-solving skills.",
    tech: ["JAVA"],
    link: "https://github.com/niraj1903/Leetcode",
    demo: null,
  },
  {
    name: "Streamly",
    desc: "Real-time YouTube Live Chat app using YouTube API with debouncing and smooth UI.",
    tech: ["React", "YouTube API", "Redux", "Tailwind"],
    link: "https://github.com/niraj1903/streamly",
    demo: "https://yt-streamly.netlify.app/",
  },
  {
    name: "Showbinge",
    desc: "Movie UI app with Firebase Auth, TMDB API & OpenAI recommendations.",
    tech: ["React", "API", "Firebase", "OpenAI"],
    link: "https://github.com/niraj1903/Showbinge",
    demo: "https://showbinge.vercel.app/",
  },
];

function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-10 bg-gray-900 text-white relative">
      <h2 className="text-3xl font-bold text-center mb-6">
        🚀 Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {repos.map((repo, i) => (
          <div
            key={i}
            className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer"
            onClick={() => setActiveProject(repo)}
          >
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-sm mt-2">{repo.desc}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {repo.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 text-blue-400">
              <FaGithub />
              {repo.demo && <FaExternalLinkAlt />}
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg max-w-4xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-2">{activeProject.name}</h3>
            <p className="mb-4">{activeProject.desc}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {activeProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline mb-4"
            >
              <FaGithub />
              View on GitHub
            </a>

            {activeProject.demo ? (
              <iframe
                src={activeProject.demo}
                title="Live Preview"
                className="w-full h-[500px] mt-4 border rounded-lg"
              />
            ) : (
              <p className="mt-4 italic text-gray-400">
                No live demo available.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
