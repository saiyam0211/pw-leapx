import React from 'react';
import { WORK_PROCESS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-xs sm:text-sm">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">From Evaluation to Execution</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {WORK_PROCESS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col lg:items-center text-left lg:text-center group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-500 flex items-center justify-center text-slate-300 group-hover:text-blue-400 transition-all duration-300 shadow-lg mb-4 sm:mb-6 mx-auto lg:mx-auto lg:bg-slate-900">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                
                {/* Step Number Bubble */}
                <div className="hidden lg:flex absolute top-0 right-1/4 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full items-center justify-center text-xs font-bold border-2 border-slate-900">
                    {index + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Mobile Arrow */}
                {index < WORK_PROCESS.length - 1 && (
                    <div className="lg:hidden absolute bottom-[-25px] left-8 transform translate-y-1/2 text-slate-600">
                        <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;