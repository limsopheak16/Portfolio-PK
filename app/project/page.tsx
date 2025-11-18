"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Menubar from "@/components/ui/Menubar";
import { ExternalLink, Eye } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
  technologies?: string[];
}

export default function ProjectPage() {
  const projects: Project[] = [
    {
      title: "New Hope Children's Homes",
      description:
        "A comprehensive website for NHCH organization providing safe environment for children through education, support, and community involvement.",
      image: "/image/logo-c1.jpg",
      link: "https://nhchkh.org/",
      category: "Organization",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Coolify",
      ],
    },
    {
      title: "PSE Camp Attendance Management System (PCAMS)",
      description:
        "A digital attendance tool for PSE camps that simplifies daily tracking, reduces paper errors, and keeps student records organized in one place.",
      image: "/image/pcams.png",
      link: "https://pcams.vercel.app/",
      category: "Web Application",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Jenkins",
        "PostgreSQL",
      ],
    },
    // {
    //   title: "Online Survey Platform",
    //   description:
    //     "Responsive survey website with real-time dashboard for data visualization and user feedback collection across all devices.",
    //   image: "/image/Survey.webp",
    //   link: "https://build-online-survey-and-dashboard-display.vercel.app/",
    //   category: "Web Application",
    //   technologies: ["React", "Node.js", "MongoDB"],
    // },
    {
      title: "URL Shortener",
      description:
        "Web application for shortening long URLs into manageable links with analytics and user-friendly interface.",
      image: "/image/shorttenerUrl.png",
      link: "https://link-shorten-two-gx8i.vercel.app/",
      category: "Tool",
      technologies: ["Next.js", "PostgreSQL", "TypeScript"],
    },
    {
      title: "Blog Platform",
      description:
        "Modern blogging platform featuring personal anecdotes, daily musings, and interactive content management.",
      image: "/image/blogpost.png",
      link: "https://blogpost-one-rho.vercel.app/",
      category: "Blog",
      technologies: ["React", "Express", "MySQL"],
    },
    // {
    //   title: "Weather Application",
    //   description:
    //     "Real-time weather website with intuitive interface displaying temperature, humidity, and detailed weather conditions.",
    //   image: "/image/weather.png",
    //   link: "https://weatherwebsite-pied.vercel.app/",
    //   category: "Utility",
    //   technologies: ["JavaScript", "API Integration", "CSS3"],
    // },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.03)_25%,rgba(6,182,212,0.03)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.03)_75%)] bg-[length:20px_20px]"></div> */}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Fixed Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <Menubar />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="text-4xl md:text-5xl font-bold text-center mt-8"
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 text-transparent bg-clip-text"
              >
                Projects
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className=" text-lg max-w-2xl mx-auto leading-relaxed text-gray-400 "
          >
            Explore my portfolio of creative solutions and technical innovations
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-slate-800 dark:text-white mb-3 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-cyan-500 hover:text-white text-slate-700 dark:text-slate-300 font-medium py-3 px-4 rounded-xl transition-all duration-300 group/btn border border-slate-200 dark:border-slate-600"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
              Let&#39;s discuss how we can bring your next project to life with
              innovative solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
