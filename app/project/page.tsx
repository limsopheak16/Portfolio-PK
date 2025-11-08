"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Menubar from "@/components/ui/Menubar";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectPage() {
  const projects: Project[] = [
    {
      title: "Build Online Survey",
      description:
        "Develop a responsive website as an online survey to gather valuable feedback from users. The website should include a user-friendly form that can be easily accessed from any device, ensuring a seamless experience for all respondents. Once the data is collected, a dynamic dashboard should be created to visualize the survey results in real-time.",
      image: "/image/Survey.webp",
      link: "https://build-online-survey-and-dashboard-display.vercel.app/",
    },
    {
      title: "Create Short Urls",
      description:
        "The URL Shortener Service is a web application that allows users to shorten long URLs into concise, manageable links. This service is beneficial for sharing links on social media, emails, and other platforms where brevity is essential. The project will include both front-end and back-end components, ensuring a seamless user experience.",
      image: "/image/shorttenerUrl.png",
      link: "https://link-shorten-two-gx8i.vercel.app/",
    },
    {
      title: "Blog Post",
      description:
        "A daily blog is like a captivating diary shared with the world, where each entry unveils a new chapter of the author's life. It is a vibrant tapestry woven with personal anecdotes, daily musings, and thought-provoking insights that resonate with readers.",
      image: "/image/blogpost.png",
      link: "https://blogpost-one-rho.vercel.app/",
    },
    {
      title: "Weather",
      description:
        "This project is a weather website that allows you to view today's weather conditions. It also provides real-time updates and a simple interface to check temperature, humidity, and other weather details for your location",
      image: "/image/weather.png",
      link: "https://weatherwebsite-pied.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Fixed Navbar with high z-index */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <Menubar />
      </motion.div>

      {/* Main content with proper padding to account for fixed navbar */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="text-center mb-16 sm:mb-20 mt-8"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            <motion.span
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-transparent bg-clip-text inline-block"
            >
              Projects
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A collection of my recent work and personal projects
          </motion.p>
        </motion.div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="lg:w-1/2"
              >
                <div className="relative group">
                  <motion.div
                    whileHover={{
                      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.4)",
                      y: -8,
                    }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-2"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
                      />
                    </div>
                  </motion.div>

                  {/* Decorative gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="lg:w-1/2 flex flex-col justify-center"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.h3
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text mb-4"
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                  >
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                      {project.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20"
                    >
                      Visit Project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
