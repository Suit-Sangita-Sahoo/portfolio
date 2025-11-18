import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Logo from "./Logo";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10 bg-gradient-to-br from-gray-50 to-gray-200"
    >
      
      <div id="main" className="flex-1 space-y-6">
        
       
        <h3 className="inline-block bg-red-700 text-white px-6 py-2 rounded-full shadow-md text-lg font-semibold">
          Suit Sangita Sahoo
        </h3>

       
        <h1 className="text-5xl font-bold text-gray-800">
          I'm
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mt-3">
            <TypeAnimation
              sequence={[
                "Frontend Developer", 2000,
                "ReactJs Developer", 2000,
                "Java Developer", 2000,
                "SpringBoot Developer", 2000,
              ]}
              speed={60}
              repeat={Infinity}
            />
          </span>
        </h1>

        
        <p className="text-lg text-gray-600 max-w-[480px]">
          Passionate frontend developer focused on crafting clean, beautiful,
          and user-friendly web experiences.
        </p>

        
        <div id="logo">
          <ul className="flex gap-6 mt-4">
            <li className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:text-pink-500 transition-all duration-300">
              <a
                href="https://www.instagram.com/sangita_suit2004/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
            </li>

            <li className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:text-blue-600 transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/suit-sangita-sahoo-suit-sangita-sahoo-b4b151338/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="text-xl" />
              </a>
            </li>

            <li className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 hover:text-gray-800 transition-all duration-300">
              <a
                href="https://github.com/Suit-Sangita-Sahoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

     
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <Logo />
      </div>
    </div>
  );
};

export default Home;
