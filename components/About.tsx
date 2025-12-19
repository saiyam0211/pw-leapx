import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden scroll-mt-20">
        {/* Background Decorative Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-slate-200"></div>

      <div className="max-w-[85rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded bg-blue-50 text-pw-blue font-bold tracking-wider uppercase text-xs mb-4">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-[1.15]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pw-blue to-blue-500">PW LeapX</span>
            </h2>
            <div className="space-y-6 md:space-y-8 text-slate-600 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
              <div>
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3">Who We Are</h3>
                <p>
                LeapX acts as the extended execution arm for your venture, turning ideas into high-quality products and growth-ready brands. Led by top experts in tech and management, we bring end-to-end execution across software development, design, GTM, branding, and digital marketing.  
                {/* <br/><br/><i>We don’t just deliver projects.</i>
                <br/><b>We help you build, launch, and scale with confidence.</b> */}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3">Our Vision</h3>
                <p>
                To empower ambitious founders and businesses by becoming the most trusted execution partner for building scalable products and high-growth brands, driven by expertise, innovation, and uncompromising quality.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3">Our Mission</h3>
                <p>
                To deliver impactful execution across software development, design, GTM, branding, and digital marketing, powered by industry experts who work as the extended execution arm of every venture we partner with. We focus on speed, precision, and cost-effective solutions that drive real, measurable growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-slate-900">Founder First</h4>
                        <p className="text-sm text-slate-500">Terms designed for growth, not greed.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-slate-900">Rapid Deployment</h4>
                        <p className="text-sm text-slate-500">MVPs in weeks, not months.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-3xl text-slate-900 mb-1">50+</h3>
                    <p className="text-slate-500 text-sm uppercase tracking-wide">Products Delivered</p>
                </div>
                <div className="flex items-center gap-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-1"
                    >
                      <img 
                        src="/Physics_wallah_logo.svg.png" 
                        alt="Physics Wallah" 
                        className="h-8 w-auto object-contain"
                      />
                    </motion.div>
                    <p className="text-slate-500 text-sm uppercase tracking-wide">Backed Reliability</p>
                </div>
            </div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             <div className="absolute -inset-4 bg-slate-50 rounded-3xl transform rotate-3 -z-10"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[450px] md:h-[500px] group">
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-10">
                    <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="font-semibold text-xl leading-relaxed">"Execution eats strategy for breakfast."</p>
                        <div className="flex items-center gap-3 mt-4">
                             <div className="h-0.5 w-12 bg-pw-blue"></div>
                             <span className="text-sm opacity-90 font-medium tracking-wide uppercase">Our Philosophy</span>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;