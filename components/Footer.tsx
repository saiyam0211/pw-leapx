import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="mb-4 sm:mb-6">
               <div className="w-32 sm:w-40">
                 <img
                   src="/PW_Leap_X_White.svg"
                   alt="PW LeapX"
                   className="w-full h-auto object-contain"
                 />
               </div>
             </div>
             <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
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

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="/service/t1" className="hover:text-pw-blue transition-colors">Product & Platform Development</a></li>
                <li><a href="/service/t3" className="hover:text-pw-blue transition-colors">Data & AI Solutions</a></li>
                <li><a href="/service/t1" className="hover:text-pw-blue transition-colors">MVP & 0→1 Execution</a></li>
                <li><a href="/service/t6" className="hover:text-pw-blue transition-colors">Cloud & Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li><a href="#about" className="hover:text-pw-blue transition-colors">About LeapX</a></li>
                <li><a href="#experts" className="hover:text-pw-blue transition-colors">Our Execution Leads</a></li>
                <li><a href="#process" className="hover:text-pw-blue transition-colors">How We Work</a></li>
                <li><a href="#faq" className="hover:text-pw-blue transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-pw-blue" />
                    <span>Bengaluru, Karnataka, India</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-pw-blue" />
                    <a href="mailto:contact@pwleapx.com" className="hover:text-white transition-colors">contact@pwleapx.com</a>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-pw-blue" />
                    <a href="tel:+917240981514" className="hover:text-white transition-colors">+91 72409 81514</a>
                </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} PW LeapX. All rights reserved.</p>
                <div className="flex gap-6 text-xs text-slate-500">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-xs text-slate-500">
                  Coded with 🤍 by <a href="https://saiyam.cv" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">Saiyam Kumar</a>
                </p>
                <button 
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-pw-blue transition-colors"
                >
                    Back to Top <ArrowUp size={14} />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;