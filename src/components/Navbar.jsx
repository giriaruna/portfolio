import React, { useState, useEffect } from "react";
import ThemeToggle from "./Theme.Toggle";

export default function Navbar() {
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

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md
        transform transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo - Combined Icon and AG Text */}
        <div
          className="relative group flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("about")} // Changed to go to About Me as requested
        >
          {/* Subtle blue glow effect on hover */}
          <div className="absolute -inset-2 bg-blue-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <img
            src="/icon.ico"
            alt="Logo"
            className="w-8 h-8 object-contain transform group-hover:rotate-12 transition-transform duration-300"
          />
          
          <p className="text-xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AG
          </p>
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

        {/* Theme toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
