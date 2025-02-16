'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Menubar from '@/components/ui/Menubar';


interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectPage() {
  const projects: Project[] = [
    {
      title: 'Build Online Survey',
      description: 'Develop a responsive website as an online survey to gather valuable feedback from users. The website should include a user-friendly form that can be easily accessed from any device, ensuring a seamless experience for all respondents. Once the data is collected, a dynamic dashboard should be created to visualize the survey results in real-time.',
      image: '/image/Survey.webp',
      link: 'https://build-online-survey-and-dashboard-display.vercel.app/',
    },
    {
      title: 'Create Short Urls',
      description: 'The URL Shortener Service is a web application that allows users to shorten long URLs into concise, manageable links. This service is beneficial for sharing links on social media, emails, and other platforms where brevity is essential. The project will include both front-end and back-end components, ensuring a seamless user experience.',
      image: '/image/shorttenerUrl.png',
      link: 'https://link-shorten-two-gx8i.vercel.app/',
    },
    {
      title: 'Build Online Survey',
      description: 'Develop a responsive website as an online survey to gather valuable feedback from users. The website should include a user-friendly form that can be easily accessed from any device, ensuring a seamless experience for all respondents. Once the data is collected, a dynamic dashboard should be created to visualize the survey results in real-time.',
      image: '/image/Survey.webp',
      link: 'https://build-online-survey-and-dashboard-display.vercel.app/',
    },
    {
      title: 'Create Short Urls',
      description: 'The URL Shortener Service is a web application that allows users to shorten long URLs into concise, manageable links. This service is beneficial for sharing links on social media, emails, and other platforms where brevity is essential. The project will include both front-end and back-end components, ensuring a seamless user experience.',
      image: '/image/shorttenerUrl.png',
      link: 'https://link-shorten-two-gx8i.vercel.app/',
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden w-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >               
      <Menubar />
        
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          bounce: 0.5
        }}
        className="text-3xl md:text-5xl font-bold text-green-400 mt-32 mb-12 text-center"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-wrap"
        >
          <motion.span
            whileHover={{ 
              scale: 1.1,
              color: "#22c55e",
              transition: { duration: 0.2 }
            }}
          >
            {'{ Projects }'}
          </motion.span>
        </motion.div>
      </motion.h1>

      <div className="space-y-32 p-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: index * 0.2 
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:w-1/2 group"
            >
              <motion.div 
                className="relative overflow-hidden rounded-lg shadow-2xl w-fit"
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.5)",
                  y: -8,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div className="relative">
                <div className=" relative overflow-hidden rounded-lg shadow-2xl transform transition-all   group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-green-500/50 w-fit">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg transform transition-all duration-500 group-hover:scale-105"
                />
              </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-green-400 mb-4"
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 whitespace-pre-line mb-6"
              >
                {project.description}
              </motion.p>
              <motion.a
                href={project.link}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgb(34, 197, 94)",
                  color: "rgb(0, 0, 0)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green-500/10 border border-green-400 text-green-400 px-6 py-2 rounded-lg transition-all duration-300"
              >
                visit →
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}