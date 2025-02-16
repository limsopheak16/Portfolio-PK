'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Menubar from "@/components/ui/Menubar";
import Link from "next/link";

export default function Home() {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  // Animation for the image container
  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Floating animation
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Background gradient elements */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-green-500/10 filter blur-[100px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-red-500/10 filter blur-[100px] z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      {/* Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative z-20"
      >
        <Menubar />
      </motion.div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-16 lg:pt-0 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:flex-1 z-10 mb-8 lg:mb-0"
        >
          {/* Greeting Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#143b1e] px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block mb-4 sm:mb-6 border border-green-400"
          >
            <motion.span
              animate={floatingAnimation}
              className="text-green-400 font-mono"
            >
              Hi There! I&apos;m Sopheak
            </motion.span>
          </motion.div>

          {/* Main Heading - staggered reveal */}
          <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono mb-4 sm:mb-6 leading-tight">
            <motion.span
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              A <span className="text-green-400">Full Stack</span>
            </motion.span>
            <br />
            <motion.span
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              <span className="text-green-400">developer.</span> Launch And
            </motion.span>
            <br />
            <motion.span
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              Grow <span className="text-white">Project best</span>
            </motion.span>
          </motion.h1>

          {/* Bio Text */}
          <motion.p
            variants={textVariants}
            custom={3}
            initial="hidden"
            animate="visible"
            className="text-gray-400 max-w-xl"
          >
            I&apos;m a passionate software developer specializing in full stack
            development. My portfolio reflects my journey of creativity,
            continuous learning, and innovation. I&apos;m eager to collaborate
            and transform fresh ideas into impactful projects. Let&apos;s
            connect!
          </motion.p>
          
          {/* Call to action button */}
          <Link href="/project" passHref>
            <motion.button
              variants={textVariants}
              custom={4}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgb(22, 163, 74)",
                color: "rgb(240, 253, 244)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-transparent border border-green-500 text-green-500 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              View My Projects →
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:flex-1 relative"
        >
          <motion.div
            animate={floatingAnimation}
            className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] mx-auto lg:ml-auto lg:left-28"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/image/myImage.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-lg shadow-lg shadow-red-300/50 transition-all duration-300"
              />
              
              {/* Animated overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.1, 0],
                  x: ['0%', '100%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
              />
            </div>
            
            {/* Glow Effects */}
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 rounded-lg ring-2 ring-red-500 ring-offset-2 ring-offset-black/50 pointer-events-none"
            />
            <motion.div
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
              className="absolute inset-0 rounded-lg ring-1 ring-red-400 ring-offset-1 ring-offset-black/30 blur-sm pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-1.5 h-3 bg-green-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}