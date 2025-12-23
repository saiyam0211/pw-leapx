import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 sm:py-12 md:py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
             <div className="mb-4 sm:mb-5 flex justify-center sm:justify-start">
               <div className="w-28 sm:w-32 md:w-40">
                 <img
                   src="/PW_Leap_X_White.svg"
                   alt="PW LeapX"
                   className="w-full h-auto object-contain"
                 />
               </div>
             </div>
             <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs text-slate-400 text-center sm:text-left mx-auto sm:mx-0">
              <i>The execution arm for ambitious teams.</i> <br /><br />
             An initiative by PW School of Startups, LeapX delivers end-to-end
             execution to build, operate, and scale high-impact products.
             </p>
             {/* <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pw-blue hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pw-blue hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pw-blue hover:text-white transition-all"><Instagram size={18} /></a>
             </div> */}
          </div>

          {/* Links - Centered on mobile */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="/service/t1" className="hover:text-pw-blue transition-colors block py-0.5">Product & Platform Development</a></li>
                <li><a href="/service/t3" className="hover:text-pw-blue transition-colors block py-0.5">Data & AI Solutions</a></li>
                <li><a href="/service/t1" className="hover:text-pw-blue transition-colors block py-0.5">MVP & 0→1 Execution</a></li>
                <li><a href="/service/t6" className="hover:text-pw-blue transition-colors block py-0.5">Cloud & Infrastructure</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#about" className="hover:text-pw-blue transition-colors block py-0.5">About LeapX</a></li>
                <li><a href="#experts" className="hover:text-pw-blue transition-colors block py-0.5">Our Execution Leads</a></li>
                <li><a href="#process" className="hover:text-pw-blue transition-colors block py-0.5">How We Work</a></li>
                <li><a href="#faq" className="hover:text-pw-blue transition-colors block py-0.5">FAQs</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li className="flex items-start justify-center sm:justify-start gap-2.5">
                    <MapPin className="w-4 h-4 mt-0.5 text-pw-blue flex-shrink-0" />
                    <span className="leading-relaxed">Bengaluru, Karnataka, India</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start gap-2.5">
                    <Mail className="w-4 h-4 mt-0.5 text-pw-blue flex-shrink-0" />
                    <a href="mailto:contact@pwleapx.com" className="hover:text-white transition-colors break-all">contact@pwleapx.com</a>
                </li>
                <li className="flex items-start justify-center sm:justify-start gap-2.5">
                    <Phone className="w-4 h-4 mt-0.5 text-pw-blue flex-shrink-0" />
                    <a href="tel:+917240981514" className="hover:text-white transition-colors">+91 72409 81514</a>
                </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8 space-y-4">
            {/* Copyright and Links Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left order-2 sm:order-1">
                    <p className="text-[11px] sm:text-xs text-slate-500">&copy; {new Date().getFullYear()} PW LeapX. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500">
                        <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
                        <span className="text-slate-700">•</span>
                        <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Terms of Service</a>
                        <span className="text-slate-700">•</span>
                        <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Cookie Policy</a>
                    </div>
                </div>
                <button 
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-pw-blue transition-colors order-1 sm:order-2"
                >
                    Back to Top <ArrowUp size={14} />
                </button>
            </div>
            
            {/* Credits Row */}
            <div className="flex justify-center sm:justify-start pt-2 border-t border-slate-800/50">
                <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
                  Coded with 🤍 by <a href="https://saiyam.cv" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">Saiyam Kumar</a>
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;