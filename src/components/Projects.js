import React from "react";
import { projects } from "../assets/Data";

const Projects = () => {
  return (
    <div className="min-h-screen p-8 bg-[#1a1a1a]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#fff] tracking-wider">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg m-4 p-4 max-w-xs"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-56 h-40 object-contain object-center rounded-t-lg self-center"
              />
              <h3 className="text-xl font-bold mt-4 text-center">
                {project.title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
