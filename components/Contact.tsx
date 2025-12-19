import React from 'react';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="get-in-touch" className="py-16 sm:py-20 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-pw-blue font-bold tracking-wider uppercase text-xs sm:text-sm">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-3 sm:mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-pw-blue to-blue-500">Great Together</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Reach out to us and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pw-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:contact@pwleapx.com" className="text-slate-600 hover:text-pw-blue transition-colors">
                      contact@pwleapx.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-pw-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-slate-600 hover:text-pw-blue transition-colors">
                      +91 94819 12068
                    </a>
                    <span className="text-slate-600 ml-2 mr-2">|</span>
                    <a href="tel:+919876543210" className="text-slate-600 hover:text-pw-blue transition-colors">
                      +91 94819 12068
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500 mb-4">Powered by</p>
              <div className="flex items-center gap-3">
                <img 
                  src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/10527432-cd54-4d47-b4e7-169e5f252fab.svg" 
                  alt="PW SOS" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-pw-blue" />
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                Ready to Get Started?
              </h3>
              
              <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Get in touch with our team and discover how we can help transform your startup idea into reality.
              </p>
              
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('booking');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-pw-blue text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 group text-sm sm:text-base"
              >
                Get in Touch!
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

