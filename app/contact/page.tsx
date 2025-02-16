'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Menubar from '@/components/ui/Menubar';

export default function ContactPage() {
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
          type: 'spring',
          bounce: 0.5,
        }}
        className="text-3xl md:text-5xl font-bold text-green-400 mt-16 mb-8 text-center"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-green-400 mt-32 mb-12 text-center"
          >
          <motion.span
            whileHover={{
              scale: 1.1,
              color: '#22c55e',
              transition: { duration: 0.2 },
            }}
          >
            {'{ Contact }'}
          </motion.span>
        </motion.div>
      </motion.h1>

      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative w-full max-w-2xl group"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-800 p-12"
            whileHover={{
              boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.5)',
              y: -8,
              transition: { duration: 0.5 },
            }}
          >
            <motion.div className="relative">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  Contact will complete soon
                </h1>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
