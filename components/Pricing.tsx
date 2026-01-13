
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      monthly: 0,
      yearly: 0,
      desc: "Perfect for experiments and hobbyists.",
      features: ["3 Projects", "1GB Storage", "Community Support", "Basic Analytics"],
      cta: "Start for free",
      popular: false
    },
    {
      name: "Pro",
      monthly: 29,
      yearly: 24,
      desc: "For serious developers and scaling startups.",
      features: ["Unlimited Projects", "100GB Storage", "Priority Support", "AI Optimizations", "Custom Domains"],
      cta: "Go Pro Now",
      popular: true
    },
    {
      name: "Enterprise",
      monthly: 99,
      yearly: 84,
      desc: "Dedicated infrastructure for big teams.",
      features: ["Custom SLA", "Audit Logs", "Dedicated Account Manager", "SSO & SAML", "Unlimited Storage"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Simple, Transparent Pricing</h2>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-7 bg-white/10 rounded-full p-1 relative flex items-center"
          >
            <motion.div 
              animate={{ x: billing === 'monthly' ? 0 : 28 }}
              className="w-5 h-5 bg-white rounded-full shadow-lg" 
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${billing === 'yearly' ? 'text-white' : 'text-gray-500'}`}>Yearly</span>
            <span className="bg-indigo-500 text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wider">Save 20%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'bg-white/[0.05] border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.1)]' : 'bg-white/[0.02] border-white/10'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-widest">
                <Zap size={10} fill="currentColor" /> Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-heading font-extrabold">${billing === 'monthly' ? plan.monthly : plan.yearly}</span>
              <span className="text-gray-500">/mo</span>
            </div>

            <button className={`w-full py-4 rounded-2xl font-bold text-sm mb-10 transition-all active:scale-95 ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
              {plan.cta}
            </button>

            <ul className="space-y-4">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 size={16} className="text-indigo-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
