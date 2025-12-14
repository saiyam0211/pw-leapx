import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-pw-blue font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Comprehensive Execution Support</h2>
          <p className="text-slate-600 text-lg">
            From code to customer, we provide the full stack of services needed to scale your venture.
          </p>
        </div>

        {/* Tech Category */}
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-2 inline-block">Tech</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.category === 'Tech').map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
            ))}
            </div>
        </div>

        {/* Business Category */}
        <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-200 pb-2 inline-block">Business Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.category === 'Business').map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/service/${service.id}`}
        className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 hover:-translate-y-1 block relative overflow-hidden"
      >
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
         <ArrowUpRight className="w-5 h-5 text-pw-blue" />
      </div>

      <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-pw-blue group-hover:bg-pw-blue group-hover:text-white transition-colors duration-300 mb-6">
        <service.icon className="w-7 h-7" />
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pw-blue transition-colors">{service.title}</h4>
      <p className="text-slate-500 leading-relaxed group-hover:text-slate-600">
        {service.description}
      </p>
      </Link>
    </motion.div>
  );
};

export default Services;