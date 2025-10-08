import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 bg-transparent text-gray-800 dark:text-white"> {/* Added dark mode text classes */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300">© 2025 Aruna Giri</p> {/* Light mode: darker gray, Dark mode: light gray */}

        {/* Right: social links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="mailto:ag8876@nyu.edu" target="_blank" rel="noreferrer">
            <AiOutlineMail 
              size={28} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
            />
          </a>
          <a href="https://github.com/giriaruna" target="_blank" rel="noreferrer">
            <AiOutlineGithub 
              size={28} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
            />
          </a>
          <a href="https://linkedin.com/in/giriaruna" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin 
              size={28} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
