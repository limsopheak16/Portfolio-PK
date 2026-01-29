"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Menubar from "@/components/ui/Menubar";
import { ExternalLink, Eye, Hammer, Clock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
  technologies?: string[];
  status?: "completed" | "in-progress" | "planned";
  progress?: number; // 0-100
}

export default function ProjectPage() {
  const projects: Project[] = [
    {
      title: "WMAD Platform",
      description:
        "A community platform where WMAD students and alumni can: Share memories from program experiences, Showcase portfolios for job interviews, Connect across generations for mentorship andPreserve knowledge from the WMAD program",
      image: "/image/wmad.png",
      link: "https://wmad-community.pages.dev/",
      category: "Organization",
      status: "in-progress",
      technologies: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Cloudflare Pages",
        "Railway",
        "Neon Console",
        "Cloudflare R2",
        "Upstash Redis",
        "Resend",
        "Socket.io",
      ],
    },
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
        "My final year 2 academic project - A comprehensive digital attendance management system for PSE camps that revolutionizes daily tracking, eliminates paper-based errors, and maintains organized student records. This system demonstrates advanced full-stack development capabilities with real-time data processing and user-friendly interface design. *Note: Currently undergoing maintenance and will be available for viewing soon.*",
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
        "PSE X Bikay Link Shortener (PBLS) - My final year 1 academic project developed through a one-month collaboration with Bikay Company. This real-world project provided invaluable industry experience while creating a professional URL shortening service with analytics and user-friendly interface. The project demonstrates practical application of web development skills in a corporate partnership environment.",
      image: "/image/shorttenerUrl.png",
      link: "https://link-shorten-two-gx8i.vercel.app/",
      category: "Tool",
      technologies: ["Next.js", "PostgreSQL", "TypeScript"],
    },
    {
      title: "Blog Platform",
      description:
        "Hackathon-winning blog platform developed as a team project that secured 2nd place in the competition. This modern blogging platform features personal anecdotes, daily musings, and interactive content management, demonstrating our team's ability to collaborate under pressure and deliver a fully functional application within the hackathon timeframe. The project showcases effective teamwork and rapid development skills.",
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 group-hover:border-cyan-200/50 dark:group-hover:border-cyan-800/50 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-full border border-slate-200/70 dark:border-slate-600/70 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  {project.status === "in-progress" && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Hammer className="w-3 h-3" />
                        </motion.div>
                        <span>In Progress</span>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex-1 space-y-4">
                    <motion.h3
                      className="text-xl font-bold text-slate-800 dark:text-white line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 ease-in-out">
                      {project.description}
                    </p>
                    {project.description.length > 150 && (
                      <button className="text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 text-xs font-medium mt-2 transition-colors">
                        View More
                      </button>
                    )}

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-lg border border-slate-200/60 dark:border-slate-600/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                                      </div>

                  {/* Action Button */}
                  <div className="mt-auto pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-5 rounded-xl transition-all duration-300 group/btn border ${
                          project.status === "in-progress"
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-amber-500/50 shadow-lg shadow-amber-500/25"
                            : "bg-slate-50 dark:bg-slate-700/50 hover:bg-cyan-500 hover:text-white text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-600/60 hover:border-cyan-500/50"
                        }`}
                      >
                        {project.status === "in-progress" ? (
                          <>
                            <Clock className="w-4 h-4" />
                            <span>View Development</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            <span>View Project</span>
                          </>
                        )}
                        <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
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
          className="text-center mt-20"
        >
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              Let&#39;s discuss how we can bring your next project to life with
              innovative solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
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
