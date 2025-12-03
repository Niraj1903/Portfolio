import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNpm,
  FaBox,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiJest,
  SiFormik,
  SiAxios,
  SiTypescript,
  SiBabel,
  SiVite,
  SiTestinglibrary,
  SiPostman, // <-- Import added
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "NodeJS", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Jest", icon: <SiJest />, color: "#C21325" },
    { name: "Formik", icon: <SiFormik />, color: "#DB7093" },
    { name: "Axios", icon: <SiAxios />, color: "#5A29E4" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
    { name: "Babel", icon: <SiBabel />, color: "#F9DC3E" },
    { name: "Parcel", icon: <FaBox />, color: "#F7A41B" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
    { name: "RTL", icon: <SiTestinglibrary />, color: "#E44D26" },

    // ⭐ New Skill Added
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-5 text-left">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          🛠 Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-700 shadow-md rounded-lg flex items-center space-x-3 text-gray-900 dark:text-white"
            >
              <span
                className="text-2xl transition-transform duration-300 hover:scale-125"
                style={{
                  color: skill.color,
                  WebkitFilter: "drop-shadow(0 0 6px rgba(0,0,0,0))",
                }}
              >
                {skill.icon}
              </span>

              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
