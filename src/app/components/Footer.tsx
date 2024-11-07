"use client"
import React from "react";
const FooterSection: React.FC = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
              <span>🐙</span> {/* GitHub Icon */}
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
              <span>💼</span> {/* LinkedIn Icon */}
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
              <span>🐦</span> {/* Twitter Icon */}
            </a>
          </div>
  
          {/* Copyright */}
          <div className="text-xs text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Shahmeer Ali 💖. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;