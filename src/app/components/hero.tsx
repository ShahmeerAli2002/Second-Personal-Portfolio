"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const message = " Hello, I'm Shahmeer Ali And I'm a Frontend Develope";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(message.slice(0, index));
      index++;
      if (index > message.length) {
        index = 0;
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center dark:bg-gray-900"
      style={{
        backgroundImage: `url('/image/hero.gif')`,
      }}
    >
      <div className="absolute inset-0 bg-slate-300 opacity-50 dark:bg-gray-800"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
        Passionate web developer skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS. Creating modern, responsive, and user-friendly web applications with clean and efficient code.
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="px-6 py-3 bg-white dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-black rounded-lg font-medium"
        >
          Learn More
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;
