import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          👨‍💻 About Me
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify leading-relaxed">
          Passionate Full Stack Developer with a focus on the MERN Stack,
          combining a keen eye for design with a strong technical foundation.
          Experienced in both frontend and backend development, I specialize in
          building responsive, interactive web applications.
        </p>

        <p className="font-semibold text-gray-800 dark:text-white mb-3">
          Proficient in:
        </p>

        <ul className="list-inside pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6 text-left">
          <li>
            <strong className="text-blue-500">Frontend:</strong> HTML, CSS,
            JavaScript, React, TailwindCSS
          </li>
          <li>
            <strong className="text-blue-500">Backend:</strong> Node.js, Express
          </li>
          <li>
            <strong className="text-blue-500">Database:</strong> MongoDB,
            Mongoose
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
          I thrive on transforming UI/UX designs into high-performance, scalable
          web applications that provide seamless user experiences. With hands-on
          experience in building full-stack applications, I'm committed to
          delivering robust, high-quality solutions. Let's connect and
          collaborate on creating dynamic, visually appealing, and
          high-performing digital solutions using the power of the MERN stack!
        </p>
      </div>
    </section>
  );
}

export default About;
