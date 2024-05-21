import React from "react";
import { projects } from "../assets/Data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Projects = () => {
  const headingText = "My Projects";
  return (
    <div className="min-h-screen p-8 bg-[#1a1a1a] flex flex-col justify-center items-center gap-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#fff] tracking-wider">
        {headingText.split("").map((letter, index) => (
          <span key={index} className="">
            {letter}
          </span>
        ))}
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg m-4 p-4 max-w-xs"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={project.imageUrl}
                alt={project.title}
                className="w-56 h-40 object-contain object-center rounded-t-lg self-center"
              />
              <h3 className="text-xl font-semibold mt-4 text-center">
                {project.title}
              </h3>
            </a>
          </div>
        ))}
      </div>
      <Link
        to="techstack"
        smooth={true}
        duration={500}
        className="block cursor-pointer text-center bg-[#fff] w-[12em] text-[#1a1a1a] px-6 py-2 mb-10 rounded-lg hover:bg-gray-500 hover:text-[#fff] transition duration-300 z-10"
      >
        View Tech Stack
      </Link>
    </div>
  );
};

export default Projects;
