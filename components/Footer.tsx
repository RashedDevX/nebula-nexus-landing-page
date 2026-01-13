
import React from 'react';
import { Cpu, Twitter, Github, Linkedin, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Cpu size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Nebula</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Building the infrastructure for the next generation of decentralized applications. Scalable, secure, and smart.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Stay Connected</h4>
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-indigo-500 flex-1"
              />
              <button className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest gap-4">
          <p>© 2024 Nebula Nexus Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built by <span className="text-white">RashedDevX</span> with passion
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
