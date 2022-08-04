import React from "react";
import data from "../data.json";

export default function Projects() {
  console.log(data);
  return (
    <div>
       <h1>Projects</h1>

      {data.map((project) => (
        <div>
        <p>{project.title}</p>
        <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
