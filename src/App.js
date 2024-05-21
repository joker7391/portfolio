import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import Projects from "./components/Projects";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="bg-green-500 relative">
      <Header />
      <div className="bg-[#f0f0f0] min-h-screen mx-auto">
        <Homepage />
        <Element name="projects">
          <Projects />
        </Element>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
