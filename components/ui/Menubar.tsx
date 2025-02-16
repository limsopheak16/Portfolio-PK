import React, { useState } from 'react';

export default function Menubar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r bg-green-500 text-white py-3 px-4 sm:px-6 md:px-12 lg:px-36 shadow-lg z-50 ">
      <ul className="flex justify-end gap-6 sm:gap-8 md:gap-12 items-center ">
        {[
          { href: "/", label: "Home" },
          { href: "/education", label: "Education" },
          { href: "/project", label: "Project" },
          { href: "/contact", label: "Contact" }
        ].map((item) => (
          <li 
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a 
              href={item.href}
              className={`
                text-sm sm:text-base 
                font-bold 
                py-2 
                transition-all duration-300
                border-b-2
                ${hoveredItem === item.label ? 'border-white scale-110' : 'border-transparent'}
                hover:text-white
                flex items-center gap-2
                no-underline
              `}
            >
              {item.label}
            </a>
            {hoveredItem === item.label && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full animate-pulse" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}