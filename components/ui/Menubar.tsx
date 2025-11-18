// "use client";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Menubar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "Projects", href: "/project" },
//     { name: "Experience", href: "/experience" },
//     { name: "Education", href: "/education" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-center md:justify-center relative">
//           {/* Desktop Menu - Centered */}
//           <div className="hidden md:flex gap-12 items-center">
//             {menuItems.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//                 className="relative group"
//               >
//                 <Link
//                   href={item.href}
//                   className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative"
//                 >
//                   {item.name}
//                   {/* Animated underline */}
//                   <motion.span
//                     className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300"
//                     initial={{ width: 0 }}
//                   />
//                   {/* Glow effect on hover */}
//                   <motion.span className="absolute inset-0 blur-xl bg-cyan-400/0 group-hover:bg-cyan-400/20 transition-all duration-300 -z-10" />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden absolute right-0 p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:bg-slate-800 rounded-lg"
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden mt-4 overflow-hidden"
//             >
//               <div className="flex flex-col gap-2 bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-cyan-500/20">
//                 {menuItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="block text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// }
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Folder,
  Briefcase,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Menubar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/project", icon: Folder },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Education", href: "/education", icon: GraduationCap },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center  md:justify-center relative">
          {/* Desktop Menu - Icons with text labels */}
          <div className="hidden md:flex gap-1 items-center bg-slate-800/40 backdrop-blur-md rounded-full px-2 py-2 border border-slate-700/50">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 relative group ${
                        active
                          ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/50"
                          : "text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>

                      {/* Animated glow effect on active */}
                      {active && (
                        <motion.div
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-md -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                            : "text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </motion.button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
