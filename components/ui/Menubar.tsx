import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Icons from lucide-react or any icon library
import Link from "next/link";


export default function Menubar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/education', label: 'Education' },
    { href: '/project', label: 'Project' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-4 sm:px-6 md:px-12 lg:px-36 shadow-lg z-50">
      <div className="flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link href="/" className="text-lg font-bold">My Portfolio</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.href}
                className={`text-base font-semibold transition-all duration-300 ${hoveredItem === item.label ? 'text-white scale-110' : 'text-gray-100 hover:text-white'} no-underline`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-green-500 rounded-lg shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {menuItems.map((item) => (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  className="block text-base font-semibold text-white no-underline hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}