import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="personal">
        <img src="signature.png" alt="" className="signature" />
        <h1 className="myName">Joao Bonchristiano</h1>
      </div>
      <p>
        Computer Science student at Georgia Tech 🐝 From{" "}
        <img src="brazil.png" alt="Brazil" className="flag" />
      </p>
      <div className="links">
        <button>Contact Me</button>
        <button>Resume</button>
        <img
          href="https://github.com/jpbonch"
          src="github.png"
          alt="GitHub"
          className="gitHubIcon"
        />
      </div>
    </div>
  );
}
