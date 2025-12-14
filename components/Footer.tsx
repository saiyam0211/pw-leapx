import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-pw-blue rounded-lg flex items-center justify-center text-white font-bold">P</div>
                <span className="text-white font-bold text-xl">PW LeapX</span>
             </div>
             <p className="text-sm leading-relaxed mb-6 max-w-xs">
               Empowering India's next unicorn founders with reliable execution, powered by Physics Wallah.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pw-blue hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pw-blue hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pw-blue hover:text-white transition-all"><Instagram size={18} /></a>
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-pw-blue transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-pw-blue transition-colors">Data Science</a></li>
                <li><a href="#services" className="hover:text-pw-blue transition-colors">MVP Strategy</a></li>
                <li><a href="#services" className="hover:text-pw-blue transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-pw-blue transition-colors">About PW LeapX</a></li>
                <li><a href="#experts" className="hover:text-pw-blue transition-colors">Our Experts</a></li>
                <li><a href="#booking" className="hover:text-pw-blue transition-colors">Book Appointment</a></li>
                <li><a href="#get-in-touch" className="hover:text-pw-blue transition-colors">Get In Touch</a></li>
                <li><a href="#faq" className="hover:text-pw-blue transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-pw-blue" />
                    <span>Noida, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-pw-blue" />
                    <a href="mailto:contact@pwleapx.com" className="hover:text-white transition-colors">contact@pwleapx.com</a>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-pw-blue" />
                    <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
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
            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-bold text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-pw-blue transition-colors"
            >
                Back to Top <ArrowUp size={14} />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;