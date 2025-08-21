import React from "react";

const repos = [
  {
    name: "TummyCall",
    desc: "A high-performance food ordering app with live Swiggy API integration.",
    tech: ["React", "Tailwind", "Redux"],
    link: "https://github.com/niraj1903/tummyCall",
  },
  {
    name: "Leetcode",
    desc: "Focused on improving my understanding of algorithms, data structures, and problem-solving skills.",
    tech: ["JAVA"],
    link: "https://github.com/niraj1903/Leetcode",
  },
  {
    name: "Streamly",
    desc: "Streamly is a modern web app that displays real-time YouTube Live Chat using the YouTube API. Built with React, Redux, and Tailwind CSS, it features smart debouncing for efficient API calls, smooth UI updates, and scalable state management.",
    tech: ["React", "YOUTUBE API", "Redux", "Tailwind"],
    link: "https://github.com/niraj1903/streamly",
  },
  {
    name: "Showbinge",
    desc: "Movie streaming UI built with React, Redux, Firebase Auth, Tailwind CSS, TMDB API for movie data, and OpenAI API for smart recommendations.",
    tech: ["React", "API", "FireBase", "OPEN AI"],
    link: "https://github.com/niraj1903/Showbinge",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        🚀 Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {repos.map((repo, i) => (
          <div
            key={i}
            className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-sm mt-2">{repo.desc}</p>
            <div className="flex gap-2 mt-3">
              {repo.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="block mt-4 text-blue-400 hover:underline"
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
