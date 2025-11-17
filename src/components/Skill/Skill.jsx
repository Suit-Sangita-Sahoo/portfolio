import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";

const Skill = () => {
  const frontend = [
    { name: "React JS", level: "90%", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", level: "85%", icon: <FaJs className="text-yellow-500" /> },
    { name: "HTML5", level: "95%", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: "90%", icon: <FaCss3 className="text-blue-600" /> },
  ];

  const backend = [
    { name: "Node.js", level: "75%", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Java (Spring Boot Basic)", level: "70%", icon: <FaJava className="text-red-500" /> },
  ];

  const database = [
    { name: "MySQL", level: "80%", icon: <FaDatabase className="text-teal-700" /> },
  ];

  const Card = ({ skill }) => (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="bg-white shadow-lg p-5 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all flex items-center gap-4"
    >
      <div className="text-4xl">{skill.icon}</div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: skill.level }}
          ></div>
        </div>
      </div>
      <span className="text-gray-600 font-bold">{skill.level}</span>
    </motion.div>
  );

  return (
    <div className="px-8 py-16 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Skills
      </h1>

      {/* FRONTEND */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Frontend</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frontend.map((skill, index) => (
            <Card key={index} skill={skill} />
          ))}
        </div>
      </section>

      {/* BACKEND */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-green-700">Backend</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backend.map((skill, index) => (
            <Card key={index} skill={skill} />
          ))}
        </div>
      </section>

      {/* DATABASE */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Database</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {database.map((skill, index) => (
            <Card key={index} skill={skill} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Skill;
