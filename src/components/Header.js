import React, { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-5 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Niraj Singh
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Right side (Resume + Theme + Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Resume Button (Always Visible with Icon, No Background) */}
          <a
            href="/resume.pdf" // <-- replace with your actual resume path
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 font-medium"
          >
            <FaDownload className="text-lg" />
            Resume
          </a>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-gray-700 dark:text-gray-300">
          <a
            href="#about"
            className="block hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
