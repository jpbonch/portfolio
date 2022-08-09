import React from "react";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Title from "./components/Title";

export default function App() {
    return (
      <div className="container">
        <About />
        <Title text="PROJECTS"/>
        <Projects />
        <Title text="CONTACT ME"/>
        <Contact />
      </div>
    );
}