"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping platform.",
      link: "https://e-commerce-mauve-rho.vercel.app/",
      image: "/image/2cm2.png"
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with customizable templates and real-time preview.",
      link: "https://update-milestone-5-unique-path-and-shareable-link.vercel.app/",
      image: "/image/project2.png"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcase.",
      link: "https://my-portfolio-dusky-xi-83.vercel.app/",
      image: "/image/project3.png"
    },
    {
      title: "Portfolio2 Website",
      description: "Personal portfolio showcase.",
      link: "https://custumcss-and-nextjs-personal-portfolio.vercel.app/",
      image: "/image/project6.png"
    },
    {
      title: "Video Graphics Website",
      description: "Professional video and graphics design portfolio showcasing motion graphics, animations, and visual effects work.",
      link: "https://custom-css-nextjs-website.vercel.app/",
      image: "/image/project4.png"
    },
    {
      title: "Gaming Website",
      description: "Interactive gaming platform with multiplayer features, game reviews, and community forums.",
      link: "https://tailwindcss-nextjs-website.vercel.app/",
      image: "/image/project5.png"
    }
  ];
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 text-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold mb-8 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] rounded-lg hover:from-purple-500 hover:to-blue-500">
            <motion.div
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 h-full w-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-48 mb-4">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};


export default Projects;