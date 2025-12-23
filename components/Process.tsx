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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-xs sm:text-sm">How We Work</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 px-4">From Evaluation to Execution</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {WORK_PROCESS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group bg-slate-800/30 p-5 sm:p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Step Number Badge - Mobile */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold border-2 border-slate-900 lg:hidden">
                    {index + 1}
                </div>
                
                {/* Step Number Bubble - Desktop */}
                <div className="hidden lg:flex absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full items-center justify-center text-sm font-bold border-2 border-slate-900">
                    {index + 1}
                </div>

                {/* Icon Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-blue-500 flex items-center justify-center text-slate-300 group-hover:text-blue-400 transition-all duration-300 shadow-lg mb-3 sm:mb-4">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Arrow - Between cards */}
                {index < WORK_PROCESS.length - 1 && (
                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-600">
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