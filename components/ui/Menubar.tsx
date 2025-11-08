// // import React, { useState } from "react";
// // import { Menu, X } from "lucide-react"; // Optional: Icons from lucide-react or any icon library
// // import Link from "next/link";

// // export default function Menubar() {
// //   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMenu = () => setMenuOpen(!menuOpen);

// //   const menuItems = [
// //     { href: "/", label: "Home" },
// //     { href: "/experience", label: "Experience" },
// //     { href: "/education", label: "Education" },
// //     { href: "/project", label: "Project" },
// //     { href: "/contact", label: "Contact" },
// //   ];

// //   return (
// //     <nav className="fixed top-0 w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-4 sm:px-6 md:px-12 lg:px-36 shadow-lg z-50">
// //       <div className="flex justify-between items-center">
// //         {/* Logo Placeholder */}
// //         <Link href="/" className="text-lg font-bold">
// //           My Portfolio
// //         </Link>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex gap-8 items-center">
// //           {menuItems.map((item) => (
// //             <li
// //               key={item.label}
// //               className="relative"
// //               onMouseEnter={() => setHoveredItem(item.label)}
// //               onMouseLeave={() => setHoveredItem(null)}
// //             >
// //               <a
// //                 href={item.href}
// //                 className={`text-base font-semibold transition-all duration-300 ${
// //                   hoveredItem === item.label
// //                     ? "text-white scale-110"
// //                     : "text-gray-100 hover:text-white"
// //                 } no-underline`}
// //               >
// //                 {item.label}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Mobile Menu Button */}
// //         <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
// //           {menuOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {menuOpen && (
// //         <div className="md:hidden mt-3 bg-green-500 rounded-lg shadow-md">
// //           <ul className="flex flex-col gap-4 p-4">
// //             {menuItems.map((item) => (
// //               <li key={item.label} className="relative">
// //                 <a
// //                   href={item.href}
// //                   className="block text-base font-semibold text-white no-underline hover:underline"
// //                   onClick={() => setMenuOpen(false)}
// //                 >
// //                   {item.label}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function Menubar() {
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const menuItems = [
//     { href: "/", label: "Home" },
//     { href: "/experience", label: "Experience" },
//     { href: "/education", label: "Education" },
//     { href: "/project", label: "Project" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-4 sm:px-6 md:px-12 lg:px-36 shadow-lg z-50">
//       <div className="flex justify-between items-center">
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 items-center">
//           {menuItems.map((item) => (
//             <li
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => setHoveredItem(item.label)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <Link
//                 href={item.href}
//                 className={`text-base font-semibold transition-all duration-300 ${
//                   hoveredItem === item.label
//                     ? "text-white scale-110"
//                     : "text-gray-100 hover:text-white"
//                 } no-underline`}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none p-1 hover:bg-green-700 rounded transition-colors"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-3 bg-green-600 rounded-lg shadow-lg">
//           <ul className="flex flex-col gap-2 p-4">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   href={item.href}
//                   className="block text-base font-semibold text-white no-underline py-2 px-3 hover:bg-green-700 rounded transition-colors"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Menubar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center md:justify-center relative">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex gap-12 items-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative"
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                  />
                  {/* Glow effect on hover */}
                  <motion.span className="absolute inset-0 blur-xl bg-cyan-400/0 group-hover:bg-cyan-400/20 transition-all duration-300 -z-10" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute right-0 p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:bg-slate-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-cyan-500/20">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
