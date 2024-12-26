// src/components/ThemeToggler.jsx
import { useState, useEffect } from 'react';

const ThemeToggler = () => {
  // Set initial theme based on localStorage or default to light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || false;
  });

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      const theme = newMode ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      return newMode;
    });
  };

  // Apply the theme on load
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  return (
    <button
      className="btn bg-gray-600"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <span className="text-xl">🌙</span>  // Moon icon for dark mode
      ) : (
        <span className="text-xl">🌞</span>  // Sun icon for light mode
      )}
    </button>
  );
};

export default ThemeToggler;
