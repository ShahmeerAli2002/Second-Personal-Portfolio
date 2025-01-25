"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 text-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-black dark:text-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p 
                className="text-lg leading-relaxed dark:text-gray-300 backdrop-blur-sm bg-white/10 p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                I am a dedicated developer with a passion for creating user-centered designs. With 7 months of experience in web development, I specialize in building responsive and performant applications using modern technologies.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed dark:text-gray-300 backdrop-blur-sm bg-white/10 p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                Frontend Web Developer
Experience: Over 6 months of dedicated learning and hands-on
practice with modern web development technologies, including
HTML, CSS, JavaScript, and TypeScript.
 Next.js Development: Expertise in server-side rendering,
dynamic routing, and building scalable web applications.
 Tailwind CSS: Proficient in creating responsive, utility-first
designs efficiently.
 Framer Motion: Skilled in implementing smooth and dynamic
animations for enhanced user interfaces.
 State Management: Experienced with Zustand and Redux for
managing application state effectively.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                    <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">HTML</h3>
                    <p className="text-sm">HTML5, Semantic HTML</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white dark:bg-black p-4 rounded-lg h-full">
                    <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">CSS & JavaScript</h3>
                    <p className="text-sm">CSS, JavaScript,git</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
                    <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Modern Tech</h3>
                    <p className="text-sm">TypeScript, Next.js, Tailwind CSS</p>
                  </div>
                </motion.div>
              </div>
            </div>            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl ring-4 ring-purple-500/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/image/shahmeer.jpeg"
                alt="Profile Image"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
