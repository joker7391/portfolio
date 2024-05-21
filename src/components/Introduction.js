import React from "react";
import html1 from "../assets/code-background.jpg";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${html1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="relative text-md lg:text-4xl font-bold text-[#fff] mb-4 z-10 bg-[#1a1a1add] p-2">
        Welcome to My Portfolio
      </h1>

      <p className="relative text-md lg:text-lg text-[#fff] mb-6 z-10 ">
        <span className="font-bold text-[#fff] bg-[#1a1a1add] px-1">
          Hi, I'm{" "}
        </span>
        <span className="font-bold text-[#fff] bg-[#1a1a1add]">
          Daniel Jeffrey Aco,
        </span>
        <span className="bg-[#1a1a1add]"> a passionate </span>
        <span className="font-bold text-[#fff] bg-[#1a1a1add]">
          Software Developer
        </span>
        .
        <br />
        <span className="bg-[#1a1a1a] my-auto px-2">
          As a dedicated and skilled Web and Mobile Developer with four years of
          hands-on experience, I specialize in creating dynamic and responsive
          applications that deliver seamless user experiences. My technical
          expertise encompasses a wide range of technologies, including HTML,
          CSS, JavaScript, React, Node.js for web development, and React Native
          for mobile applications.
        </span>
      </p>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="relative cursor-pointer bg-[#282323] text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition duration-300 z-10"
      >
        See My Projects
      </Link>
    </div>
  );
};

export default Introduction;
