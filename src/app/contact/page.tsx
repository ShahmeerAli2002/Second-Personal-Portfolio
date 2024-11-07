"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-8 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Contact Me</h2>
      <p className="text-lg mb-8">Feel free to reach out to me via the details below:</p>

      <div className="space-y-6 max-w-md mx-auto">
        <motion.div
          className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <span className="text-2xl text-gray-700 dark:text-gray-300">📞</span>
            <a
              href="tel:+1234567890"
              className="text-lg text-blue-500 dark:text-blue-400 hover:underline"
            >
              (032)16094104
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg">
            <span className="text-2xl text-gray-700 dark:text-gray-300">✉️</span>
            <a
              href="mailto:email@example.com"
              className="text-lg text-blue-500 dark:text-blue-400 hover:underline"
            >
             problemssolve196@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
