import React, { useState, useEffect } from "react";
import ThemeToggle from "./Theme.Toggle";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm
        transform transition-transform duration-500
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-3">
        
        {/* PRO LAYERED LOGO */}
        <div
          className="relative group flex items-center justify-center cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          {/* Larger Icon Background */}
          <img
            src="/icon.ico"
            alt="Logo"
            className="absolute w-12 h-12 object-contain opacity-50 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300"
          />
          
          {/* Initials on Top - Made smaller (text-xs) and more transparent (opacity-40) */}
          <p className="relative z-10 text-xl font-black tracking-widest text-blue-600/40 dark:text-blue-400/40 group-hover:text-blue-600/80 dark:group-hover:text-blue-400/80 transition-all duration-300 uppercase">
            AG
          </p>

          {/* Professional Soft Glow */}
          <div className="absolute inset-0 bg-blue-400/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Navigation links */}
        <nav className="flex text-lg gap-8 font-semibold">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Contact
          </button>
        </nav>

          {/* Professional Divider & Toggle */}
          <div className="flex items-center border-l border-gray-200 dark:border-gray-800 pl-6">
            <ThemeToggle />
          </div>
        </div>

    </header>
  );
};

export default Navbar;
