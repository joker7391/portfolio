import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="absolute bottom-0 bg-[#1a1a1a] p-5 w-full text-[#fff] flex justify-between items-between">
      <h2 className="font-bold">danielaco3091@gmail.com</h2>
      <div className="flex items-center gap-3">
        <a
          href="https://linkedin.com/in/daniel-jeffrey-aco-6401182aa/"
          className="text-xl font-semibold"
        >
          <CiLinkedin />
        </a>
        <a
          href="https://github.com/joker7391"
          className="text-xl font-semibold cursor-pointer"
        >
          <IoLogoGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
