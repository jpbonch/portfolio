import React from "react";
import About from "./components/About";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function App() {
    return (
      <div className="container">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
}