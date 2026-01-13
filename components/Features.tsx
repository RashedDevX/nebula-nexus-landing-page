
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Globe, TrendingUp, BarChart3 } from 'lucide-react';

const featureList = [
  {
    icon: <Cpu className="text-indigo-400" />,
    title: "AI Co-Processor",
    desc: "Built-in neural networks that optimize your server performance in real-time.",
    color: "from-indigo-500/20"
  },
  {
    icon: <Shield className="text-purple-400" />,
    title: "Quantum Encryption",
    desc: "Your data is secured using post-quantum cryptographic standards.",
    color: "from-purple-500/20"
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Lightning Deploy",
    desc: "From local commit to global deployment in less than 30 seconds.",
    color: "from-yellow-500/20"
  },
  {
    icon: <Globe className="text-blue-400" />,
    title: "Smart Edge",
    desc: "Automatic routing to the nearest node for zero-lag user experience.",
    color: "from-blue-500/20"
  },
  {
    icon: <TrendingUp className="text-green-400" />,
    title: "Elastic Scaling",
    desc: "Infinite vertical and horizontal scaling that adapts to your traffic peaks.",
    color: "from-green-500/20"
  },
  {
    icon: <BarChart3 className="text-pink-400" />,
    title: "Advanced Analytics",
    desc: "Deep insights into every request with distributed tracing built-in.",
    color: "from-pink-500/20"
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
          Engineered for the <span className="text-indigo-500">Hyper-Growth</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We've built the tools you need to build the future. No compromises, no bottlenecks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group p-8 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all hover:bg-white/[0.04] hover:border-indigo-500/30"
          >
            {/* Border Beam Effect Simulation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {f.icon}
            </div>
            
            <h3 className="text-xl font-heading font-bold mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {f.desc}
            </p>
            
            <button className="text-xs font-bold text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-widest">
              Learn More <Zap size={10} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
