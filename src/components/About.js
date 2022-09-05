import React from "react";
import "./About.css";

export default function About() {

  function scrollToBottom(){
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }
  return (
    <div className="about">
      <div className="leftColumn">
        <h1 className="myName">João Bonchristiano</h1>
        <p className="description">
          Computer Science student at Georgia Tech 🐝 from
          <img src="brazil.png" alt="Brazil" className="flag" />
        </p>

      <div className="linkBox">
        <a href="https://github.com/jpbonch">
          <img className="social" alt="My GitHub" src="github.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/jpbonch/">
          <img src="linkedin.png" alt="My LinkedIn" className="social"></img>
        </a>
        <button className="aboutButton" onClick={scrollToBottom}>Contact Me</button>
        
        <a href="Resume.pdf">
        <button className="aboutButton" >Resume</button>
        </a>
      </div>
      </div>
      <img src="myface.jpg" alt="My Face" className="myFace"/>
    </div>
  );
}
