import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../projectsData';

const ProjectsPreview: React.FC = () => {
  // Show only first 3 projects
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-pw-blue font-bold tracking-wider uppercase text-xs sm:text-sm">Our Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
          Projects Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-pw-blue to-blue-500">to Deliver Impact</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          We build scalable, production-ready platforms that drive real business outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-pw-blue/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Screenshot */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img 
                  src={project.screenshot} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-pw-blue text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pw-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-slate-100">
                  {project.metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-3 h-3 text-pw-blue" />
                        <span className="text-xs text-slate-500 font-medium">{metric.label}</span>
                      </div>
                      <p className="text-base font-bold text-slate-900">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Key Features Preview */}
                <div className="space-y-2">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pw-blue mt-2 flex-shrink-0"></div>
                      <p className="text-xs text-slate-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-pw-blue hover:bg-blue-700 text-white rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsPreview;

