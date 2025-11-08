"use client";
import { motion } from "framer-motion";
import Menubar from "@/components/ui/Menubar";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export default function ExperiencePage() {
  const experiences: Experience[] = [
    // {
    //   title: "Founder & Project Mentor – Junior Dev Community",
    //   company: "Self-initiated Learning Community",
    //   location: "Phnom Penh, Cambodia",
    //   period: "July 13, 2025 - Present",
    //   description:
    //     "Founded and lead the Junior Dev Community with 3 co-mentors, supporting 6 students in learning web development through real projects. I design learning briefs and guide members step-by-step from frontend to backend development, helping them become full-stack developers. We hold online meetings, code reviews, and workshops to teach teamwork, project flow, and problem-solving, inspired by my training at PSE Institute.",
    // },
    {
      title: "Software Developer (IT Trainee)",
      company: "I Apparel International Group",
      location: "🇰🇭 Phnom Penh, Cambodia",
      period: "June 02, 2025 - Present",
      description:
        "Joined I Apparel International Group as an IT Trainee under a probation agreement in June 2025 and continued through multiple fixed-duration contracts. Currently an active member of the QMS (Quality Management System) development team, responsible for building new features, supporting and training end-users, fixing bugs, and enhancing system performance. Throughout my time here, I have developed strong teamwork, problem-solving, and technical skills while continuously learning from my team to improve as a full-stack developer.",
    },
    {
      title: "Freelance Web Developer – NGO Project",
      company: "Client-Based Project",
      location: "🇰🇭 Phnom Penh, Cambodia",
      period: "February 21, 2025 - Present",
      description:
        "Working as a freelance web developer with a small team of friends on a real NGO website, introduced to us by our teacher. Responsible for building the website from frontend to backend, coordinating with the client, and delivering functional features. This project provides hands-on experience with real client requirements, teamwork, and practical problem-solving, simulating professional freelance work while applying skills learned in web development and full-stack practices.",
    },
    {
      title: "Full Stack Developer Training",
      company: "PSE Institute x Simplon.co",
      location: "🇰🇭 Phnom Penh, Cambodia",
      period: "January 2, 2024 - August 31, 2025",
      description:
        "Completed the Web and Mobile App Development (WMAD) vocational training program at PSE Institute in collaboration with Simplon.co. Gained hands-on experience in both frontend and backend development using technologies such as Figma Design, HTML, CSS, Next Js, React Js, Tailwind CSS, Jira, TypeScript, Express Js, MongoDB, PostgreSQL, MySQL (workbench), Vercel, Trello, Github, Version control system(Git). Successfully certified as a Full Stack Developer after 1 year and 8 months of intensive training and real-world projects.",
    },

    {
      title: "Frontend Developer Intern",
      company: "PSE x Bikay (PBLS Project)",
      location: "🇰🇭 Phnom Penh, Cambodia",
      period: "August 19, 2024 - September 19, 2024",
      description:
        "Worked as a Frontend Developer Intern for the PSE X Bikay Link Shortener (PBLS) project. Designed and developed a responsive landing page, user registration and login pages, detailed URL page, dashboard, report page, and custom aliases page. This was a one month final year project at PSE Institute, created in collaboration with Bikay Company to provide students with real project experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Menubar />
      </motion.div>

      <div className="container mx-auto px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <motion.span
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 text-transparent bg-clip-text"
          >
            Professional Experience
          </motion.span>
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.15,
                },
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <motion.div
                className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-lg p-8 border border-cyan-900/30 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
                whileHover={{
                  borderColor: "rgba(34, 211, 238, 0.5)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 md:mb-0"
                  >
                    {experience.title}
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 mb-3"
                >
                  <span className="text-lg text-teal-300 font-semibold">
                    {experience.company}
                  </span>
                  <span className="text-xl">{experience.location}</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm mb-4"
                >
                  {experience.period}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-300 leading-relaxed"
                >
                  {experience.description}
                </motion.p>

                {/* Decorative corner accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-50"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        />
      </div>
    </main>
  );
}
