import React from 'react';
import { BRANDS } from '../constants';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  // Duplicate brands enough times to fill width and loop seamlessly
  // Tripling the array ensures enough content for most screens
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 border-t border-slate-100 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Portfolio</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-2">Products We've Built / Brands We've Supported</h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden">
             <motion.div 
                className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ 
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }
                }}
            >
                 {marqueeBrands.map((brand, i) => (
                     <div
                        key={`${brand.id}-${i}`}
                        className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0"
                     >
                         {brand.logoUrl ? (
                            <div className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto flex items-center justify-center">
                                <img 
                                    src={brand.logoUrl} 
                                    alt={brand.name}
                                    className="h-full w-auto object-contain max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
                                />
                            </div>
                         ) : (
                            <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-lg">
                                {brand.name.charAt(0)}
                            </div>
                         )}
                     </div>
                 ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;