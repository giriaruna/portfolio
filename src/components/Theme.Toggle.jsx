import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Sun and Moon icons


export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg transition xl"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" />   // Sun for Light Mode
      ) : (
        <FaMoon className="text-gray-600" />   // Moon for Dark Mode
      )}
    </button>
  );
}
