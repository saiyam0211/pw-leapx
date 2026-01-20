import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 sm:pt-28 pb-12 sm:pb-16 lg:py-0">
      {/* Background with Blur Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Abstract Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[100px] opacity-30"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10 w-full h-full">
        
        {/* Left Column: Video */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="order-2 lg:order-1 relative group"
        >
            {/* Video Container */}
            <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800 bg-slate-900 aspect-video lg:aspect-[4/3] transform transition-transform duration-700 hover:scale-[1.01] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                
                {/* Embedded YouTube Video with Infinite Looping (via YouTube playlist embedding) */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0k7X7Ml-fhY?si=0wWTbCHyhNyoXS5M&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full object-cover"
                  style={{ minHeight: "230px", minWidth: "350px" }}
                ></iframe>
            </div>

            {/* Decorative Elements behind video */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-slate-800 rounded-[2rem] hidden lg:block"></div>
            <div className="absolute -z-20 -bottom-10 -right-10 w-40 h-40 bg-pw-blue/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Right Column: Text Content */}
        <div className="order-1 lg:order-2 flex flex-col items-start text-left">
          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/20 backdrop-blur-md text-blue-300 text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Powered by PW SOS / PW Founders
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-sans font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            Engineering Products,
            <br />
            <span className="block h-1 sm:h-2"></span>
            Building
            <span className="text-transparent mt-1 bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white ml-2">
              Brands
            </span>
            <br />
            <span className="block h-2 sm:h-4"></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed mb-6 md:mb-10 font-light"
          >
            PW LeapX is India's most reliable execution partner, empowering startups with tech and strategic solutions, acting as their extended arm for growth.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a
              href="https://cal.com/rishabh-jain-euv7da/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-pw-blue hover:bg-blue-700 text-white rounded-full font-bold text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(30,58,138,0.5)] hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <a
              href="#booking"
              className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium text-base sm:text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
            >
              Get in Touch
            </a> */}
          </motion.div>

          {/* Decorative graphic: Idea to Execution */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 sm:mt-12 flex items-center gap-2 sm:gap-4 opacity-60 justify-center w-full"
          >
            <div className="mx-auto flex items-center gap-2 sm:gap-4">
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Concept</div>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-slate-700 to-slate-500"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-slate-700 flex items-center justify-center">
                <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
              </div>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-slate-500 to-pw-blue"></div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-blue-400 font-bold shadow-blue-500/50">Execution</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;