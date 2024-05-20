import React from "react";
import picture1 from "../assets/pic1.jpg";
import html1 from "../assets/code-background.jpg";

const Introduction = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${html1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "1", // Adjust this to make the background image more subtle
      }}
    >
      <h1 className="relative text-4xl font-bold text-[#fff] mb-4 z-10 bg-[#1a1a1add] p-2">
        Welcome to My Portfolio
      </h1>

      <p className="relative text-lg text-[#fff] mb-6 z-10 ">
        <span className="font-bold text-[#fff] bg-[#1a1a1add] p-2 ">
          Hi, I'm
        </span>
        <span className="font-bold text-[#fff] bg-[#1a1a1add] p-2 ">
          Daniel Jeffrey Aco,
        </span>
        <span className="bg-[#1a1a1add] p-2 ">a passionate</span>
        <span className="font-bold text-[#fff] bg-[#1a1a1add] p-2 ">
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
      <button className="relative bg-[#007bff] text-white px-6 py-2 rounded-lg hover:bg-[#005bb5] transition duration-300 z-10">
        See My Projects
      </button>
    </div>
  );
};

export default Introduction;
