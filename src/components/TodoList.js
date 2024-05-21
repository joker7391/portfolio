import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const TodoList = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Form submitted", {
      name,
      email,
      cellphone,
      message,
    });
  };

  return (
    <div className="p-5 lg:p-20 bg-[#1a1a1a] flex flex-col gap-10 justify-between items-center min-h-screen">
      <div className="p-8 bg-[#fff] rounded-lg shadow-md max-w-4xl w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
          <form className="mb-4 ">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Cellphone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg"
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="3"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="w-full p-2 bg-[#1a1a1a] text-[#fff] rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </motion.button>
          </form>
        </div>
        {isSubmitted && (
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4 border-t md:border-t-0 md:border-l border-gray-300">
            <h3 className="text-xl font-bold mb-2 text-center md:text-left">
              Form Data
            </h3>
            <div className="notebook p-4">
              <div className="notebook-line mb-2">
                <strong>Name:</strong> {name}
              </div>
              <div className="notebook-line mb-2">
                <strong>Email:</strong> {email}
              </div>
              <div className="notebook-line mb-2">
                <strong>Cellphone:</strong> {cellphone}
              </div>
              <div className="notebook-line mb-2">
                <strong>Message:</strong> {message}
              </div>
            </div>
          </div>
        )}
      </div>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer bg-[#fff] text-[#1a1a1a] px-6 py-2 rounded-lg hover:bg-gray-500 hover:text-[#fff] transition duration-300 "
      >
        Go back to top
      </Link>
    </div>
  );
};

export default TodoList;
