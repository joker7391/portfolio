import React from "react";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`bg-[#1a1a1ab0] p-5 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-[#ffffff] font-bold text-lg cursor-pointer w-8">
        DJ
      </h1>
    </header>
  );
};

export default Header;
