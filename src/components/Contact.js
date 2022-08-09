import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <div className="socialBox">
       <a href="https://github.com/jpbonch">
          <img className="social" alt="My GitHub" src="github.png"></img>
        </a> &nbsp;
        jpbonch
        </div>

        <div className="socialBox">
        <a href="mailto:jp.bonchristiano@gmail.com">
          <img src="mail.png" alt="My LinkedIn" className="social"></img>
        </a>&nbsp;
        jp.bonchristiano@gmail.com 
        </div>
        <div className="socialBox">
        <a href="https://www.linkedin.com/in/jpbonch/">
          <img src="linkedin.png" alt="My LinkedIn" className="social"></img>
        </a> &nbsp;
        jpbonch
        </div>

        
        </div>
    )
}