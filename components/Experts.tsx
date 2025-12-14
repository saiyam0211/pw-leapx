import React, { useState } from 'react';
import { EXPERTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'tech' | 'management' | 'poc';

const Experts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('tech');

  const techExperts = EXPERTS.filter(expert => expert.tags.includes('Tech Expert'));
  const managementExperts = EXPERTS.filter(expert => expert.tags.includes('Management'));
  const pocExperts = EXPERTS.filter(expert => expert.tags.includes('POC'));

  const getActiveExperts = () => {
    switch (activeTab) {
      case 'tech':
        return techExperts;
      case 'management':
        return managementExperts;
      case 'poc':
        return pocExperts;
      default:
        return techExperts;
    }
  };

  const tabs = [
    { id: 'tech' as TabType, label: 'Tech Experts', count: techExperts.length },
    { id: 'management' as TabType, label: 'Management Experts', count: managementExperts.length },
    { id: 'poc' as TabType, label: 'Your POC', count: pocExperts.length },
  ];

  return (
    <section id="experts" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-pw-blue font-bold tracking-wider uppercase text-sm">Our Experts</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2">Meet the Execution Team</h2>
            </div>
            <p className="text-slate-500 max-w-sm mt-4 md:mt-0">
                Backed by the extensive PW network, our experts bring battlefield experience to your startup.
            </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-bold text-sm transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-pw-blue'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs font-normal opacity-70">({tab.count})</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-pw-blue"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Experts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {getActiveExperts().map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-100 mb-4">
                  <img 
                    src={expert.imageUrl} 
                    alt={expert.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                    {expert.tags.filter(tag => tag !== 'PW').map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm text-center">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{expert.name}</h3>
                <p className="text-pw-blue font-medium text-sm">{expert.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experts;