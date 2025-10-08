import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./Theme.Toggle";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md
        transform transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex justify-between items-center p-4">
        {/* Same content as Option 1 */}
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-transparent items-center justify-center flex font-bold">
          <p className="blue-gradient_text">AG</p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white hover:text-blue-500 transition-colors"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white hover:text-blue-500 transition-colors"}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white hover:text-blue-500 transition-colors"}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white hover:text-blue-500 transition-colors"}>
            Contact
          </NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
