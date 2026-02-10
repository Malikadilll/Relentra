import React, { useState, useEffect, useRef } from 'react';
import { Search, MoveRight, ArrowRight, Menu, X, Command } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef(null);

  // List of searchable sections based on your site structure
  const sections = [
    { name: 'Core Expertise', id: '#work', category: 'About' },
    { name: 'Our Work & Projects', id: '#services', category: 'Services' },
    { name: 'Why It Matters', id: '#industries', category: 'Mission' },
    { name: 'Insights & Perspective', id: '#insights', category: 'Blog' },
    { name: 'Company Culture', id: '#culture', category: 'Team' },
    { name: 'Team Section', id: '#team', category: 'Team' },
    { name: 'Contact Us', id: '#contact', category: 'Action' },
    { name: 'Join Our Team', id: '#about', category: 'Action' }
  ];

  const filteredSections = sections.filter(section =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');

    if (location.pathname === '/') {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${href}`);
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const NavLink = ({ text, href = "#", isMobile = false }) => (
    <a 
      href={href} 
      className={`group relative flex items-center gap-2 cursor-pointer pb-1 ${isMobile ? 'py-4 border-b border-gray-50 w-full' : 'w-fit'}`}
      onClick={(e) => handleNavClick(e, href)}
    >
      <span className="text-sm font-bold uppercase tracking-widest text-[#282828]">{text}</span>
      <ArrowRight className="w-4 h-4 transition-all duration-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0" />
      {!isMobile && (
        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
      )}
    </a>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          
          <div 
            className="text-2xl font-black tracking-tighter text-[#282828] cursor-pointer transition-opacity duration-300 hover:opacity-40"
            onClick={() => {
              if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
              else navigate('/');
              setIsMenuOpen(false);
            }}
          >
            RELENTRA
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-x-12 gap-y-2">
            <div className="flex flex-col gap-1">
              <NavLink text="Core" href="#work" />
              <NavLink text="Work" href="#services" />
            </div>
            <div className="flex flex-col gap-1">
              <NavLink text="Why it Matters" href="#industries" />
              <NavLink text="Perspective" href="#insights" />
            </div>
            <div className="flex flex-col gap-1">
              <NavLink text="Culture" href="#culture" />
              <NavLink text="Join us" href="#about" />
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-2">
            <div 
              className="group flex items-center gap-2 cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#282828]">Search</span>
              <Search className="w-4 h-4 text-[#282828] transition-transform duration-700 group-hover:rotate-[360deg]" />
            </div>
            <a href="#contact" className="group flex items-center gap-2 cursor-pointer" onClick={(e) => handleNavClick(e, '#contact')}>
              <span className="text-sm font-bold uppercase tracking-widest text-[#282828]">Contact us</span>
              <MoveRight className="w-5 h-5 text-[#282828] transition-transform duration-700 group-hover:rotate-[360deg]" />
            </a>
          </div>

          <button className="lg:hidden p-2 text-[#282828]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- SEARCH MODAL OVERLAY --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b flex items-center gap-3">
              <Search className="text-gray-400 w-5 h-5" />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Where would you like to go?" 
                className="flex-1 outline-none text-lg text-[#282828]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredSections.length > 0 ? (
                filteredSections.map((section) => (
                  <div 
                    key={section.id} 
                    onClick={() => handleNavClick(null, section.id)}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl cursor-pointer group transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400 uppercase tracking-tighter font-bold">{section.category}</span>
                      <span className="text-lg font-medium text-[#282828]">{section.name}</span>
                    </div>
                    <ArrowRight className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              ) : (
                <div className="p-10 text-center text-gray-500">
                  No sections found for "{searchQuery}"
                </div>
              )}
            </div>
            
            <div className="p-4 bg-gray-50 border-t flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <span>Relentra Smart Search</span>
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><Command size={10} /> + K (Coming Soon)</span>
              </div>
            </div>
          </div>
          {/* Backdrop Close Click */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsSearchOpen(false)} />
        </div>
      )}
    </>
  );
}