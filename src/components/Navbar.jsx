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
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <p className="blue-text-gradient">AG</p>
        </div>

        {/* Navigation links */}
        <nav className="flex text-lg gap-7 font-medium">
          <button
            onClick={() => scrollToSection("home")}
            className="text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-black dark:text-white hover:text-blue-500 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
