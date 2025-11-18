import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsFiletypePhp } from "react-icons/bs";
import { SiSpringboot } from "react-icons/si";

const Skill = () => {
  const frontend = [
    { name: "React JS", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    {name:"PHP",icon:<BsFiletypePhp />},
    
  ];

  const backend = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring", icon: <BiLogoSpringBoot /> },
    {name:"SpringBoot",icon:<SiSpringboot />}
  ];

  const database = [
    { name: "MySQL", icon: <FaDatabase /> },
  ];

  const renderCards = (skills) =>
    skills.map((s, i) => (
      <div
        key={i}
        className="
          flex items-center gap-4 p-5 
          rounded-xl shadow-md bg-white
          border border-gray-200
          hover:shadow-xl hover:scale-105 
          transition-all duration-300 
          hover:border-blue-400
        "
      >
        <div className="text-4xl text-blue-600">{s.icon}</div>
        <p className="text-lg font-semibold text-gray-700">{s.name}</p>
      </div>
    ));

  return (
    <div id='skill' className="px-6 py-14 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        My Skills
      </h1>

      <div className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 text-blue-700">Frontend</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderCards(frontend)}
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-2xl font-semibold mb-5 text-green-700">Backend</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderCards(backend)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-5 text-purple-700">Database</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderCards(database)}
        </div>
      </div>
    </div>
  );
};

export default Skill;
