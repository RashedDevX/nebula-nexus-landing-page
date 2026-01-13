
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Added 'Layers' to the imports from 'lucide-react'
import { ArrowRight, Sparkles, Zap, Shield, Globe, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-all" />
          
          <div className="flex items-center gap-2 mb-6 w-fit bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Next Gen Computing</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Scale your infrastructure <br /> with <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text">Nebula Nexus</span>.
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            The intelligent operating system for modern decentralized networks. 
            Deploy in seconds, scale infinitely, and pay only for what you use.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-80 group/input">
              <input 
                type="email" 
                placeholder="Enter your work email"
                className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600"
              />
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 group">
              Join Waitlist
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Secondary Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 bg-[#111] border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <Zap size={32} className="text-white fill-current" />
          </div>
          <h3 className="text-2xl font-heading font-bold mb-4">Ultra Low Latency</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experience sub-ms response times globally. Our edge network ensures your apps stay close to your users.
          </p>
          <div className="mt-8 flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-[#111]" alt="User" />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-[#111] bg-gray-800 flex items-center justify-center text-[10px] font-bold">
              +5K
            </div>
          </div>
          <p className="mt-4 text-[10px] text-gray-500 uppercase font-bold tracking-widest">Trusted by 5,000+ teams</p>
        </motion.div>

        {/* Mini Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
            <Shield size={24} />
          </div>
          <div>
            <h4 className="font-bold">Enterprise Grade</h4>
            <p className="text-xs text-gray-500">SOC2 Type II compliant security</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
            <Globe size={24} />
          </div>
          <div>
            <h4 className="font-bold">Global Presence</h4>
            <p className="text-xs text-gray-500">60+ Data centers worldwide</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
            <Layers size={24} />
          </div>
          <div>
            <h4 className="font-bold">Multi-Cloud</h4>
            <p className="text-xs text-gray-500">Hybrid integration capabilities</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
