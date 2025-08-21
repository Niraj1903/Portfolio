import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center px-5">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          📩 Contact Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Let’s connect and collaborate on exciting projects.
        </p>

        {/* Email */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <a
            href="mailto:nirajsingh1903@protonmail.com"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FiMail className="text-xl" />
            nirajsingh1903@protonmail.com
          </a>

          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <FiPhone className="text-xl" />
            +91 9900426482
          </div>
        </div>

        {/* CTA button */}
        <a
          href="mailto:nirajsingh1903@protonmail.com"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
