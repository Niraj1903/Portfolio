import React from "react";

function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-5">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          📄 Resume
        </h2>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Niraj_Singh_Resume.pdf"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>

        {/* Preview inside page */}
        <div className="mt-10">
          <iframe
            src="/resume.pdf"
            title="Resume Preview"
            className="w-full h-[600px] border rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume;
