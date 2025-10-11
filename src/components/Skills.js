import React from "react";

function Skills() {
  const skills = [
    "ReactJS",
    "Redux",
    "JavaScript (ES6+)",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Jest",
    "Formik",
    "Axios",
    "TypeScript",
    "NPM",
    "Babel",
    "Parcel",
    "Vite",
    "React Testing Library",
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center px-5">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          🛠 Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-700 shadow-md rounded-lg text-gray-900 dark:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
