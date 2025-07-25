import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">QuantumFraudGuard</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Advanced fraud detection for high-frequency trading using quantum-classical hybrid learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-sm text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Contact</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Have questions about quantum-classical hybrid learning?
            </p>
            <a 
              href="#" 
              className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} QuantumFraudGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;