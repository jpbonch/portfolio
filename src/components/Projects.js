import React from "react";
import data from "../data.json";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projectDiv">
      {data.map((project, index) => (
        <div className="projectBox" key={index}>
          <div key={index} className="project">
            <h3 className="projectTitle">{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="buttonBox">
            <a href={project.github}><img alt="GitHub" src="github2.png" className="githubButton"></img></a>
            <button className="visitButton" onClick={(e)=>window.location=project.link}>Visit Website</button>
            </div>
          </div>
          <img src={project.image} alt="Project" className="projectImg"></img>
        </div>
      ))}
    </div>
  );
}
