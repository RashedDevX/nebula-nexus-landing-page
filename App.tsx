
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Cpu, 
  Globe, 
  Menu, 
  X, 
  ArrowRight, 
  Twitter, 
  Github, 
  Linkedin, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  BarChart3,
  Users
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#0a0a0a] selection:bg-indigo-500/30">
      {/* Mesh Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <Header />
      
      <main>
        <Hero />
        <Statistics />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;
