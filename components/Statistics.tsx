
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const StatCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
};

const Statistics: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            <StatCounter value={10000} suffix="+" />
          </p>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Active Nodes</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            <StatCounter value={99} suffix=".99%" />
          </p>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Uptime SLA</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            <StatCounter value={500} suffix="M+" />
          </p>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Requests / Day</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            <StatCounter value={40} suffix="ms" />
          </p>
          <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Avg. Global Latency</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
