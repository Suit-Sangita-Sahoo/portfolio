import React from "react";
import { DiReact } from "react-icons/di";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
const Project = () => {
  const projects = [
    {
      title: "Food Ordering Website",
      tech: ["HTML","CSS","JavaScript"],
      description: "A complete online food ordering platform with cart & checkout.",
      details: "Select Food item user according to their own choice and ordered ",
      icon: <i className="uil uil-utensils text-4xl text-indigo-500"></i>
    },
    {
      title: "Portfolio Website",
      tech: ["React", "Tailwind CSS"],
      description: "A personal interactive portfolio showcasing skills & projects.",
      details: "Includes Authentication,JWT token and can updating also",
      icon: <i className="uil uil-user-circle text-4xl text-pink-500"></i>
    },
    {
      title:"React Learn Hub",
      tech:["React","Tailwind css"],
      description:"Conceptwise a React note for better und3erstanding",
      details:"Includes Authentication,JWT-token",
      icon:<b><DiReact className="text-4xl text-blue-300" /></b>

    },
    {
      title:"Teacher Dashboard Management",
      tech:["React,Tailwind CSS"],
      description:"System to manage TeacherName their details and their subject ",
      details:"Authenticae and manage teacher details",
      icon:<b><FaChalkboardTeacher className="text-4xl text-purple-500" /></b>

    },
    {
      title: "Pharmacy Database System",
      tech: ["Java Servlet", "JSP", "MySQL"],
      description: "System to manage medicine stock, billing, and updates.",
      details: "Supports CRUD operations, live search & secure login.",
      icon: <i className="uil uil-medical-square text-4xl text-green-500"></i>
    },
    {
      title:"Employee Management",
      tech:["Java Servlet","WebTech","MySQL"],
      description:"Any Person can manage Employee details",
      details:"Employee details can be updated",
      icon:<b><FcManager className="text-4xl " /></b>
    }
  ];

  return (
    <div id="project" className="py-10 px-5 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{project.icon}</div>

            <h3 className="text-2xl font-semibold text-indigo-600 text-center">
              {project.title}
            </h3>

            <p className="mt-2 text-gray-600 text-center">
              {project.description}
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Tech Used:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              <span className="font-semibold text-gray-700">
                Additional Info:
              </span>{" "}
              {project.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
