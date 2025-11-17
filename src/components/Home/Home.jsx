import React from "react";
import "./Home.css";
import { FaInstagram } from "react-icons/fa"; 
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Logo from "./Logo";

const Home = () => {
  return (
    <div id="home">
      <div id="main">
        <div id="name">
          <h3>Suit Sangita Sahoo</h3>
          <h1>I'm</h1>
          <div className="text-rotate">
            <p id="para1">Frontend Developer</p>
            <p id="para2">React Js Developer</p>
             <p id="para1">Java Developer</p>
              <p id="para1">Springboot Framework Developer</p>
          </div>

          <p id="exe">
            Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>

        <div id="hire">
          <button id="btn1">Hire Me</button>
          <button id="btn2">Download CV</button>
        </div>

        <div id="logo">
  <ul>
    <li>
      <a 
        href="https://www.instagram.com/sangita_suit2004/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </li>
    <li>
      <a 
        href="https://www.linkedin.com/in/suit-sangita-sahoo-suit-sangita-sahoo-b4b151338/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FiLinkedin />
      </a>
    </li>
    <li>
      <a 
        href="https://github.com/Suit-Sangita-Sahoo" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FiGithub />
      </a>
    </li>
  </ul>
</div>

      </div>

      <div >
       <Logo/>
      </div>
    </div>
  );
};

export default Home;
