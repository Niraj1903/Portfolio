import React from "react";

/**
 * AboutMe - React component styled with TailwindCSS
 * - Responsive layout
 * - Dark mode friendly
 * - Semantic HTML + accessible
 *
 * Usage:
 *  <AboutMe />
 *
 * Customize by passing props or replacing copy as needed.
 */

export default function AboutMe({
  title = "👨‍💻 About Me",
  intro = `I am a passionate Full Stack Developer specializing in the MERN Stack, blending strong technical expertise with a keen eye for design. With hands-on experience across both frontend and backend development, I build responsive, user-friendly, and high-performance web applications.`,
  whatIDo = `I thrive on transforming UI/UX concepts into scalable, efficient, and visually striking web applications. I deliver robust, high-quality solutions that prioritize seamless user experiences. Let's connect and build modern, high-performing digital products using the power of the MERN stack!`,
  skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "Mongoose"],
  },
}) {
  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12"
    >
      <div className="bg-white/90 dark:bg-slate-700 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-10">
        <header className="flex items-start gap-4 sm:gap-6">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100"
          >
            {title}
          </h2>
        </header>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Intro / Description */}
          <div className="lg:col-span-2">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              {intro}
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Proficient in:
              </h3>

              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>
                  <span className="inline-block font-semibold text-blue-500 mr-2">
                    Frontend:
                  </span>
                  <span className="inline-flex flex-wrap gap-2 items-center">
                    {skills.frontend.map((s) => (
                      <span
                        key={s}
                        className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700"
                        aria-hidden
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </li>

                <li>
                  <span className="inline-block font-semibold text-blue-500 mr-2">
                    Backend:
                  </span>
                  <span className="inline-flex flex-wrap gap-2 items-center">
                    {skills.backend.map((s) => (
                      <span
                        key={s}
                        className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700"
                        aria-hidden
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </li>

                <li>
                  <span className="inline-block font-semibold text-blue-500 mr-2">
                    Database:
                  </span>
                  <span className="inline-flex flex-wrap gap-2 items-center">
                    {skills.database.map((s) => (
                      <span
                        key={s}
                        className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700"
                        aria-hidden
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              {whatIDo}
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-sky-600 text-white font-medium shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                Let’s connect
              </a>
            </div>
          </div>

          {/* Optional visual / quick stats */}
          <aside className="hidden lg:block">
            <div className="rounded-xl border border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/40">
              <div className="text-sm text-slate-500 dark:text-slate-300">
                Role
              </div>
              <div className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                Full Stack Developer
              </div>

              <div className="mt-4 text-sm text-slate-500 dark:text-slate-300">
                Stack
              </div>
              <div className="mt-1 font-medium">MERN</div>

              <div className="mt-4 text-sm text-slate-500 dark:text-slate-300">
                Focus
              </div>
              <div className="mt-1 font-medium">
                Performance · UX · Scalability
              </div>

              <div className="mt-6 text-sm text-slate-500 dark:text-slate-300">
                Availability
              </div>
              <div className="mt-1 font-medium">
                Open to projects & collaborations
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
