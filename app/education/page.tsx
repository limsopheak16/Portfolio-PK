"use client";
import { Book, Award, GraduationCap, ChevronRight, Code } from "lucide-react";
import { motion } from "framer-motion";
import Menubar from "@/components/ui/Menubar";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaJira,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiNotion,
} from "react-icons/si";

const EducationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const techItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const technologiesIcons = [
    // Frontend
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },

    // Backend
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-500" },

    // Database
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },

    // DevOps & Tools
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },

    // Methodology & Design
    { name: "Figma", icon: FaFigma, color: "text-purple-500" },
    { name: "Jira", icon: FaJira, color: "text-blue-400" },
    { name: "Notion", icon: SiNotion, color: "text-white-400" },
  ];

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
            type: "spring",
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
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 text-transparent bg-clip-text"
            >
              Educations
            </motion.span>
          </motion.div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto text-center mb-16 px-4"
        >
          Always learning and growing by combining strong academics with
          practical experience in new technologies.
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
        {educationData.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-gray-800/50 rounded-tr-xl" />

            <div className="flex items-start space-x-4">
              <div
                className={`p-3 ${item.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}
              >
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

                {item.title === "Technologies" ? (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mt-4"
                  >
                    {technologiesIcons.map((tech) => (
                      <motion.div
                        key={tech.name}
                        variants={techItemVariants}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                      >
                        <tech.icon
                          className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <ul className="space-y-2 text-gray-300">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 group/item"
                      >
                        <div
                          className={`w-1 h-1 ${item.dotColor} rounded-full group-hover/item:scale-150 transition-transform duration-300`}
                        />
                        <span className="group-hover/item:text-white transition-colors duration-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
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
    subtitle:
      "Certificat de Compétence au Cambodge – Niveau 3 (C3) in Software Development",
    timeline: "2023 - 2025",
    icon: GraduationCap,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
    timeColor: "text-green-400",
    dotColor: "bg-green-400",
    points: [
      "Focus on Web Development & Mobile Development",
      "Hands-on Projects and Real-world Applications",
      "Building Practical Skills in Frontend, Backend, and Full-stack Development",
    ],
  },
  {
    title: "Certifications",
    subtitle: "Industry-recognized certifications",
    timeline: "Ongoing",
    icon: Award,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    timeColor: "text-blue-400",
    dotColor: "bg-blue-400",
    points: [
      "Certificate of Completion in Full Stack Development at PSE Institute.",
      "Certificate of Appreciation for Winter Camps at PSE School.",
      "Certificate of Achievement as a Presenter at the 5th FSD Student Forum.",
      "Certificate of Completion – Computer Course, School of Business..",
      "Certificate of Achievement for English Speaking in the Foundation Studies Division.",
    ],
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
      "Roadmap",
      "Stack Overflow",
      "Codewars",
      "Free code camp ",
      "W3School",
      "Youtube Tutorials",
      "Udemy",
    ],
  },
  {
    title: "Technologies",
    subtitle: "Hands-on Experience",
    timeline: "During My Academic Career",
    icon: Code,
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    timeColor: "text-orange-400",
    dotColor: "bg-orange-400",
    points: [], // Points not used for this card, using tech icons instead
  },
];

export default EducationPage;
