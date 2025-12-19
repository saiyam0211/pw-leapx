import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

const TeamQuote: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-slate-200 to-transparent"></div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 -mt-80"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-pw-blue" />
              <span className="text-pw-blue font-bold tracking-wider uppercase text-xs">Building Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Creating a<br />
              Community of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pw-blue to-blue-500">
                Changemakers
              </span>
            </h2>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-br from-pw-blue/10 to-blue-100/10 rounded-3xl transform rotate-3 -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-slate-200">
                <img 
                  src="https://res.cloudinary.com/dlnyzjn5e/image/upload/v1751916663/Gopal_Sharma_v0yfsp.jpg" 
                  alt="Gopal Sharma" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 mt-64 "
          >
            <div className="bg-[#f1f1f1] rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-slate-100">
              {/* <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Hear From Our COO
              </h3> */}
              {/* <p className="text-pw-blue font-bold text-base sm:text-lg mb-4">
                Gopal Sharma
              </p> */}
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p className="font-semibold text-slate-900 text-lg sm:text-xl flex">
                  <Quote className="w-4 h-4 text-pw-blue mr-2" />We work as a Team not Agency..
                </p>
                
                <p>
                  We are proud to be India's first execution-led platform, built to deliver impactful solutions for ambitious startups and growing businesses.
                </p>
                
                {/* <p>
                  We step in as your extended team member – driving tech, product, GTM, branding, and growth with the same ownership, speed, and precision as an in-house team.
                </p> */}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-md text-slate-500 font-medium">
                  <i>— Gopal Sharma, COO, PhysicsWallah</i>
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamQuote;

