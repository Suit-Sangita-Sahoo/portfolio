import React from "react";
import "./Project.css"
const Project = () => {
  const projects = [
    { icon: <i className="uil uil-briefcase-alt"></i>, title: "Completed", description: "6+ Finished Projects" },
    { icon: <i className="uil uil-users-alt"></i>, title: "Clients", description: "25+ Happy Clients" },
    { icon: <i className="uil uil-award"></i>, title: "Fresher", description: "6+ months in the field" },
  ];

  return (
    <div id="main">
      <h1>Project</h1>
    <div className="project-container">
      {/* <h1>Projects</h1> */}
      {projects.map((item) => (
        <div className="project-card">
          <div className="project-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;
