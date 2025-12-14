import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Booking: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Tech & MVP Development'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setFormState({ name: '', email: '', service: 'Tech & MVP Development' });
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left: Info */}
          <div className="p-10 md:p-16 md:w-5/12 flex flex-col justify-between text-white relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
             {/* Abstract background blobs */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse-slow"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
             
             <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                    Book Appointment
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Schedule a Call <br/>Instantly</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Schedule a free 30-minute evaluation call with our strategy leads. We'll audit your idea and propose an execution roadmap.
                </p>
                <ul className="space-y-5 text-slate-300">
                    <li className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="font-medium">Flexible availability</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="font-medium">30 Min Strategy Session</span>
                    </li>
                </ul>
             </div>

             <div className="mt-12 relative z-10">
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover" alt="Consultant" />
                    <div>
                        <p className="text-sm font-bold text-white">Arjun Mehta</p>
                        <p className="text-xs text-blue-200">Head of Tech Execution</p>
                    </div>
                 </div>
             </div>
          </div>

          {/* Right: Functional Form */}
          <div className="bg-white p-10 md:p-16 md:w-7/12 relative">
             <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                        <p className="text-slate-500 max-w-sm mb-8">
                            We've received your details. One of our experts will reach out to you within 24 hours to schedule your slot.
                        </p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="text-pw-blue font-bold hover:underline"
                        >
                            Book another slot
                        </button>
                    </motion.div>
                ) : (
                    <motion.form 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6 h-full flex flex-col justify-center"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-6">Enter your details</h4>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({...formState, name: e.target.value})}
                                className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-pw-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400" 
                                placeholder="John Doe" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Company Email</label>
                            <input 
                                type="email" 
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({...formState, email: e.target.value})}
                                className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-pw-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400" 
                                placeholder="john@startup.com" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">What are you looking for?</label>
                            <div className="relative">
                                <select 
                                    value={formState.service}
                                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-pw-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium text-slate-900 appearance-none cursor-pointer"
                                >
                                    <option>Tech & MVP Development</option>
                                    <option>Data Analytics</option>
                                    <option>GTM Strategy</option>
                                    <option>General Consultation</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                            </div>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            disabled={status === 'loading'}
                            className={`w-full bg-pw-blue text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-900/20 transition-all flex items-center justify-center gap-2 mt-4 ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}`}
                        >
                            {status === 'loading' ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                            ) : (
                                <>Confirm Booking <ArrowRight className="w-5 h-5" /></>
                            )}
                        </motion.button>
                    </motion.form>
                )}
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;