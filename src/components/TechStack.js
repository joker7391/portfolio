import React from "react";
import { techStack } from "../assets/Data";
import { Link } from "react-scroll";

const TechStack = () => {
  const headingText = "My Tech Stack";
  return (
    <div className="min-h-screen p-8 bg-[#fff] flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1a1a1a] tracking-wider">
        {headingText.split("").map((letter, index) => (
          <span key={index} className="pulse-letter">
            {letter}
          </span>
        ))}
      </h2>
      <div className="flex flex-wrap justify-between">
        {techStack.map((stack, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] shadow-md rounded-lg m-4 p-6 w-56"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#fff]">
              {stack.category}
            </h2>
            <ul className="text-left list-disc list-inside">
              {stack.technologies.map((tech, idx) => (
                <li key={idx} className="text-[#fff] text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="relative cursor-pointer bg-[#282323] text-white px-6 py-2 rounded-lg hover:bg-[#1d1616] transition duration-300 z-10"
      >
        Go back to top
      </Link>
    </div>
  );
};

export default TechStack;
