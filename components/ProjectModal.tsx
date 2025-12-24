import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, TrendingUp } from 'lucide-react';
import { Project } from '../projectsData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>

                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Header Image */}
                  <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-100">
                    <img 
                      src={project.screenshot} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-pw-blue text-sm font-bold">
                        {project.category}
                      </span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-10">
                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">Overview</h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Impact Metrics</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4 text-pw-blue" />
                              <span className="text-sm text-slate-600 font-medium">{metric.label}</span>
                            </div>
                            <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-slate-200">
                      <a
                        href="https://cal.com/rishabh-jain-euv7da/30min?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pw-blue hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        Build Something Similar
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

