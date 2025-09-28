import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 bg-gray-900 text-white">
      <hr className="w-full h-0.5 mx-auto bg-gray-700 border-0 mb-4" />

      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: copyright */}
        <p className="text-sm text-gray-400">© 2025 Aruna Giri</p>

        {/* Right: social links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="mailto:ag8876@nyu.edu" target="_blank" rel="noreferrer">
            <AiOutlineMail size={28} className="hover:text-blue-400" />
          </a>
          <a href="https://github.com/giriaruna" target="_blank" rel="noreferrer">
            <AiOutlineGithub size={28} className="hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/giriaruna" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin size={28} className="hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
