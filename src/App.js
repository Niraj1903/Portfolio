import React from "react";
import FeaturedProjects from "./components/FeaturedProjects";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
      <Header />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
