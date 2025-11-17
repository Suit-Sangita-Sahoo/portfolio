import { FaInstagram, FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Sweet Sangita Sahoo</h2>

      
      <ul className="footer-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      
      <div className="footer-icons">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaDribbble /></a>
        <a href="#"><FaGithub /></a>
      </div>

      
      <p className="footer-copy">
        Copyright © <span>John Doe</span> - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
