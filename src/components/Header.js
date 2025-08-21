import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-5 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Niraj Singh
        </h1>
        <div className="flex items-center gap-6">
          <nav className="space-x-6 text-gray-700 dark:text-gray-300">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
