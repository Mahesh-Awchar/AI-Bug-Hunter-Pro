import React from 'react';
import Dashboard from './Dashboard';
import ModelsPage from './ModelsPage';
import ResearchSection from '../components/research/ResearchSection';
import { BrainCircuit, Zap, ShieldCheck, LucideBarChart2 } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Quantum-Classical Hybrid Learning for Real-Time Fraud Detection
              </h1>
              <p className="text-lg text-purple-100 mb-8 max-w-lg">
                Leveraging the power of quantum computing and classical deep learning
                to detect fraud in high-frequency trading with unprecedented speed and accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#dashboard"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  View Live Demo
                </a>
                <a 
                  href="#research"
                  className="px-6 py-3 bg-transparent border border-purple-400 hover:bg-purple-900/30 text-white rounded-md text-sm font-medium transition-colors"
                >
                  Explore Research
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-700/70 p-4 rounded-lg border border-slate-600">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-purple-400">Quantum Processing</span>
                        <span className="text-xs bg-purple-900/50 px-2 py-0.5 rounded text-purple-300">Active</span>
                      </div>
                      <div className="flex items-end space-x-1">
                        <div className="w-1 h-4 bg-purple-500/60 rounded-t animate-pulse"></div>
                        <div className="w-1 h-6 bg-purple-500/70 rounded-t animate-pulse delay-100"></div>
                        <div className="w-1 h-9 bg-purple-500/80 rounded-t animate-pulse delay-200"></div>
                        <div className="w-1 h-5 bg-purple-500/70 rounded-t animate-pulse delay-300"></div>
                        <div className="w-1 h-7 bg-purple-500/80 rounded-t animate-pulse delay-400"></div>
                        <div className="w-1 h-3 bg-purple-500/60 rounded-t animate-pulse delay-500"></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/70 p-4 rounded-lg border border-slate-600">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-blue-400">Classical Analysis</span>
                        <span className="text-xs bg-blue-900/50 px-2 py-0.5 rounded text-blue-300">92%</span>
                      </div>
                      <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[92%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-700/70 p-4 rounded-lg border border-slate-600 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-teal-400">Fraud Detection</span>
                      <span className="flex items-center text-xs text-teal-300">
                        <span className="inline-block w-1.5 h-1.5 bg-teal-400 rounded-full mr-1 animate-ping"></span>
                        Live
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">18.3ms</div>
                      <div className="text-xs text-teal-300">Latency</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div>Anomalies detected: 9</div>
                    <div>False positives: 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our quantum-classical hybrid approach delivers unprecedented speed and accuracy
              in detecting fraudulent patterns within high-frequency trading data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Quantum Speedup</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Achieve quadratic speedup in pattern search with quantum algorithms compared to classical methods.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <LucideBarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Real-Time Analysis</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Process millions of trading events per second with sub-20ms latency for immediate fraud detection.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Hybrid Intelligence</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Combines quantum pattern recognition with classical deep learning for superior accuracy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Error Resilience</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Advanced error mitigation techniques ensure reliable results even on noisy quantum hardware.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Dashboard />
      
      <ModelsPage />
      
      <ResearchSection />
    </>
  );
};

export default LandingPage;