// components/Contact.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const Media: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold mb-8 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">join Now</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500">
          <a
            href="https://www.linkedin.com/in/shahmeer-ali-8649a02b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
            LinkedIn
          </a>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500">
          <a
            href="https://github.com/ShahmeerAli2002"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub size={24} />
            GitHub
          </a>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500">
          <a
            href="problemssolve196@gmail.com"
            className="w-64 py-3 bg-red-500 dark:bg-red-600 text-white rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-red-400 dark:hover:bg-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
            Email
          </a>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500">
          <a
            href="https://www.facebook.com/profile.php?id=100013307523676"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 py-3 bg-blue-400 dark:bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-blue-300 dark:hover:bg-blue-400 transition-colors"
          >
            <FaFacebook size={24} />
            Facebook          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Media;