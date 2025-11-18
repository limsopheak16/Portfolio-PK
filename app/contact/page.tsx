"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import Menubar from "@/components/ui/Menubar";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function using mailto (reliable and works without backend)
  const handleMailToSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError(null);

    try {
      // Simulate sending process for better UX
      setTimeout(() => {
        const subject = `Message from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        const mailtoLink = `mailto:sopheaklim70@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success and reset form
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
        setIsSending(false);

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }, 1000);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to open email client. Please try again.");
      setIsSending(false);

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const socialAccounts = [
    {
      icon: Mail,
      label: "Email",
      value: "sopheaklim70@gmail.com",
      link: "mailto:sopheaklim70@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "@SopheakLim",
      link: "https://www.linkedin.com/in/sopheak-lim-14386632a/",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@SopheakLim",
      link: "https://github.com/limsopheak16",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@SopheakLim",
      link: "https://x.com/SopheakLim45603",
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@SopheakLim",
      link: "https://t.me/PHEAK_DEV",
      color: "from-blue-500 to-sky-400",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden w-full">
      {/* Fixed Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <Menubar />
      </motion.div>

      {/* Main Content with padding for fixed navbar */}
      <div className="pt-20">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          className="text-4xl md:text-5xl font-bold text-center  mt-14"
        >
          <motion.span
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.span>
        </motion.h1>

        <p className="text-center text-gray-400 text-lg mt-10 ">
          Choose your preferred way to reach out
        </p>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
          >
            {socialAccounts.map((account, index) => {
              const Icon = account.icon;
              return (
                <motion.a
                  key={index}
                  href={account.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group rounded-xl p-6 bg-gradient-to-br ${account.color} opacity-10 hover:opacity-20 transition-opacity overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="flex justify-center mb-3"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {account.label}
                    </h3>
                    <p className="text-white/80 text-xs truncate">
                      {account.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full lg:flex-1"
            >
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-800 p-8 md:p-12"
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.5)",
                  y: -8,
                  transition: { duration: 0.5 },
                }}
              >
                <h2 className="text-2xl font-bold text-green-400 mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleMailToSubmit} className="space-y-6">
                  {["name", "email"].map((field) => (
                    <motion.div key={field} whileHover={{ scale: 1.02 }}>
                      <label className="block text-green-400 text-sm font-medium mb-2 capitalize">
                        {field}
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        disabled={isSending}
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                  ))}

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-green-400 text-sm font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={isSending}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </motion.div>

                  <motion.button
                    whileHover={!isSending ? { scale: 1.1 } : {}}
                    whileTap={!isSending ? { scale: 0.95 } : {}}
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-6 text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed relative"
                  >
                    {isSending ? (
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Opening Email...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>

                {/* Status Messages */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: success || error ? 1 : 0,
                    height: success || error ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  {success && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm text-center flex items-center justify-center gap-2"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        ✅
                      </motion.span>
                      Your email client is opening. Please send the email to
                      complete the process.
                    </motion.p>
                  )}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center flex items-center justify-center gap-2"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        ❌
                      </motion.span>
                      {error}
                    </motion.p>
                  )}
                </motion.div>

                {/* Info message about mailto */}
                <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                  <p className="text-blue-300 text-xs text-center">
                    📧 This form will open your email client to send the message
                    directly.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full lg:w-80 space-y-6"
            >
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-green-400 font-bold text-lg mb-4">
                  Quick Contact
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Reach out to me through any of these channels. I typically
                  respond within 24 hours.
                </p>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="text-green-400 text-sm font-semibold"
                >
                  ✨ Available for freelance projects
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
