'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Menubar from '@/components/ui/Menubar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:sopheak.lim@institute.pse.ngo?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
        className="text-3xl md:text-5xl font-bold text-green-400 mb-8 text-center"
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
            {'{ Contact }'}
          </motion.span>
        </motion.div>
      </motion.h1>

      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-full max-w-2xl"
         
        >
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-800 p-12"
            whileHover={{ boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.5)', y: -8, transition: { duration: 0.5 } }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <motion.div key={field} whileHover={{ scale: 1.02 }}>
                  <label className="block text-green-400 text-sm font-medium mb-2 capitalize">{field}</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-white"
                  />
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.02 }}>
                <label className="block text-green-400 text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-white resize-none"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: [
                  '0 0 10px rgba(34, 197, 94, 0.5)',
                  '0 0 20px rgba(34, 197, 94, 0.7)',
                  '0 0 10px rgba(34, 197, 94, 0.5)'
                ], transition: { repeat: Infinity, duration: 1.5 } }}
                type="submit"
                className="w-full py-3 px-6 text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
