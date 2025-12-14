import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Experts', href: '#experts' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-slate-200 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={handleLinkClick}>
          <div className="w-24 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/PW_Leap_X_fxqdkj.svg" 
              alt="PW LeapX"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith('#');
            if (isHashLink) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    isScrolled ? 'text-slate-600 hover:text-pw-blue' : location.pathname === '/' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-pw-blue'
                  }`}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled ? 'text-slate-600 hover:text-pw-blue' : location.pathname === '/' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-pw-blue'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#booking"
            onClick={(e) => {
              if (location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#booking';
                setTimeout(() => {
                  const element = document.getElementById('booking');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }
            }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              isScrolled
                ? 'bg-pw-blue text-white hover:bg-blue-800 shadow-md hover:shadow-xl hover:shadow-blue-900/20'
                : location.pathname === '/' ? 'bg-white text-slate-900 hover:bg-slate-100 hover:scale-105' : 'bg-pw-blue text-white hover:bg-blue-800 shadow-md hover:shadow-xl hover:shadow-blue-900/20'
            }`}
          >
            Book Appointment <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`} /> 
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-700 hover:text-pw-blue flex items-center justify-between border-b border-slate-50 pb-2"
              onClick={handleLinkClick}
            >
              {link.name}
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </a>
          ))}
          <a
            href="#booking"
            className="mt-4 w-full bg-pw-blue text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-blue-900/20 active:scale-95 transition-transform"
            onClick={handleLinkClick}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;