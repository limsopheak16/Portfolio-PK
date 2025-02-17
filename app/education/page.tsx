// app/education/page.tsx
'use client';

import React from 'react';
import { Book, Award, Code, GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Menubar from '@/components/ui/Menubar';

const EducationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden w-full">
      {/* Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Menubar />
      </motion.div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />

      {/* Header Section */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            bounce: 0.5,
          }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mt-32 mb-12 inline-block"
          >
            <motion.span
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              {'{ Education }'}
            </motion.span>
          </motion.div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto text-center mb-16 px-4"
        >
          Embarking on a journey of continuous learning and growth, combining academic excellence 
          with hands-on experience in cutting-edge technologies.
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-16"
      >
        {/* Education Cards */}
        {educationData.map((item,) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-gray-800/50 rounded-tr-xl" />
            
            <div className="flex items-start space-x-4">
              <div className={`p-3 ${item.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center">
                  {item.title}
                  <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </h2>
                <p className="text-gray-400 mb-4">
                  {item.subtitle}
                  <br />
                  <span className={item.timeColor}>{item.timeline}</span>
                </p>
                <ul className="space-y-2 text-gray-300">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center space-x-2 group/item">
                      <div className={`w-1 h-1 ${item.dotColor} rounded-full group-hover/item:scale-150 transition-transform duration-300`} />
                      <span className="group-hover/item:text-white transition-colors duration-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

// Education data configuration
const educationData = [
  {
    title: "PSE Institute",
    subtitle: "Bachelor of Science in Computer Science",
    timeline: "2020 - 2024",
    icon: GraduationCap,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
    timeColor: "text-green-400",
    dotColor: "bg-green-400",
    points: [
      "Major in Software Engineering",
      "GPA: 3.8/4.0",
      "Research Assistant in AI Lab"
    ]
  },
  {
    title: "Professional Certifications",
    subtitle: "Industry-recognized certifications",
    timeline: "Ongoing",
    icon: Award,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    timeColor: "text-blue-400",
    dotColor: "bg-blue-400",
    points: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional",
      "Microsoft Azure Expert"
    ]
  },
  {
    title: "Online Learning",
    subtitle: "Continuous skill development",
    timeline: "2022 - Present",
    icon: Book,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    timeColor: "text-purple-400",
    dotColor: "bg-purple-400",
    points: [
      "Advanced React & Node.js",
      "UI/UX Design Principles",
      "Cloud Architecture Patterns"
    ]
  },
  {
    title: "Academic Projects",
    subtitle: "Hands-on experience",
    timeline: "Throughout Academic Career",
    icon: Code,
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    timeColor: "text-orange-400",
    dotColor: "bg-orange-400",
    points: [
      "Full-stack Web Applications",
      "Machine Learning Models",
      "Distributed Systems Design"
    ]
  }
];

export default EducationPage;