import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
const Skill = () => {
  const frontend = [
    { name: "React JS", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java", icon: <FaJava /> },
  ];

  const database = [
    { name: "MySQL", icon: <FaDatabase /> },
  ];

  const renderCards = (skills) =>
    skills.map((s, i) => (
      <div
        key={i}
        className="flex items-center gap-3 p-4 rounded-lg shadow bg-white"
      >
        <div className="text-3xl">{s.icon}</div>
        <p className="text-lg font-semibold">{s.name}</p>
      </div>
    ));

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {renderCards(frontend)}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Backend</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {renderCards(backend)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Database</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {renderCards(database)}
        </div>
      </div>
    </div>
  );
};

export default Skill;
