"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-gray-900 dark:text-gray-100 backdrop-blur-sm shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center gap-2 border border-gray-300 dark:border-gray-700"
          >
            {darkMode ? (
              <>
                <span>☀️</span>
                
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <span>🌙</span>
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:justify-center items-center md:space-y-0 md:space-x-6 md:pb-0 bg-white dark:bg-black md:bg-transparent dark:md:bg-transparent w-full md:w-auto py-4 md:py-0`}
      >
        <li className="py-2 md:py-0"><a href="#Home" className="hover:text-gray-600 dark:hover:text-gray-300">Home</a></li>
        <li className="py-2 md:py-0"><a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">About</a></li>
        <li className="py-2 md:py-0"><a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</a></li>
        <li className="py-2 md:py-0"><a href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
