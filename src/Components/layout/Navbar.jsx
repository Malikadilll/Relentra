import React, { useState, useEffect } from 'react';
import { Search, MoveRight, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const NavLink = ({ text, href = "#" }) => (
    <a 
      href={href} 
      className="group relative flex items-center gap-2 w-fit cursor-pointer pb-1"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="text-sm font-bold uppercase tracking-widest text-[#282828]">{text}</span>
      <ArrowRight className="w-4 h-4 transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0" />
      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Relentra Logo - Lighter on hover */}
        <div className="text-2xl font-black tracking-tighter text-[#282828] cursor-pointer transition-opacity duration-300 hover:opacity-40">
          RELENTRA
        </div>

        {/* 2x3 Grid Navigation */}
        <div className="hidden lg:grid grid-cols-3 gap-x-12 gap-y-2">
          <div className="flex flex-col gap-1">
            <NavLink text="Work" href="#work" />
            <NavLink text="Services" href="#services" />
          </div>
          <div className="flex flex-col gap-1">
            <NavLink text="Industries" href="#industries" />
            <NavLink text="Insights" href="#insights" />
          </div>
          <div className="flex flex-col gap-1">
            <NavLink text="About" href="#about" />
            <NavLink text="Join us" href="#about" />
          </div>
        </div>

        {/* Search & Contact Actions */}
        <div className="flex flex-col items-end gap-2">
          {/* Search - Icon Spins on Hover */}
          <div className="group flex items-center gap-2 cursor-pointer">
            
            <span className="text-sm font-bold uppercase tracking-widest text-[#282828]">Search</span>
            <Search className="w-4 h-4 text-[#282828] transition-transform duration-700 group-hover:rotate-[360deg]" />
          </div>
          
          {/* Contact - Icon Spins on Hover */}
          <a 
            href="#contact" 
            className="group flex items-center gap-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            
            <span className="text-sm font-bold uppercase tracking-widest text-[#282828]">Contact us</span>
            <MoveRight className="w-5 h-5 text-[#282828] transition-transform duration-700 group-hover:rotate-[360deg]" />
          </a>
        </div>
      </div>
    </nav>
  );
}