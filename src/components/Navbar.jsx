import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./Theme.Toggle";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Invisible hover zone */}
      <div
        className="fixed top-0 left-0 w-full h-4 z-40"
        onMouseEnter={() => setIsHovered(true)}
      />

      {/* Navbar */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md
          transform transition-transform duration-300
          ${isHovered ? "translate-y-0" : "-translate-y-full"}
        `}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="w-10 h-10 rounded-lg bg-transparent items-center justify-center flex font-bold"
          >
            <p className="blue-gradient_text">AG</p>
          </NavLink>

          {/* Links */}
          <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"}>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black dark:text-white"}>
              Contact
            </NavLink>
          </nav>

          {/* Dark mode toggle */}
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
