import React from 'react';
import { Sun, Moon, BarChart2, Database, BrainCircuit } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 shadow-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-6 w-6 text-purple-600 dark:text-purple-500" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">QuantumFraudGuard</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400">Hybrid Quantum-Classical Fraud Detection</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#dashboard" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Dashboard
            </a>
            <a href="#models" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Models
            </a>
            <a href="#research" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Research
            </a>
            <a href="#about" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              About
            </a>
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;