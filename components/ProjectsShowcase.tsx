import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, Project } from '../projectsData';
import ProjectModal from './ProjectModal';

const ProjectsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };
  
  const categories = ['All', 'EdTech', 'AI & Automation', 'HealthTech', 'FinTech', 'Business Solutions'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold uppercase tracking-wider">
                Our Portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Projects That Drive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white"> Real Impact</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
              From EdTech to FinTech, we've built scalable platforms that empower businesses and transform industries. Explore our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-50 sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-pw-blue text-white shadow-lg shadow-blue-900/20'
                    : 'bg-white text-slate-600 hover:text-pw-blue border border-slate-200 hover:border-pw-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-pw-blue mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => handleReadMore(project)}
                    className="inline-flex items-center gap-2 text-pw-blue hover:text-blue-700 font-semibold text-sm transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Let's create something exceptional together. Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://cal.com/rishabh-jain-euv7da/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-pw-blue hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Get in Touch!
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsShowcase;

