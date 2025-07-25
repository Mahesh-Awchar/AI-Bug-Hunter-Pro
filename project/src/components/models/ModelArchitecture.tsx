import React from 'react';
import { ModelComponent } from '../../types';

interface ModelArchitectureProps {
  components: ModelComponent[];
}

const ModelArchitecture: React.FC<ModelArchitectureProps> = ({ components }) => {
  const quantumComponents = components.filter(c => c.type === 'quantum');
  const classicalComponents = components.filter(c => c.type === 'classical');
  const hybridComponents = components.filter(c => c.type === 'hybrid');
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-800">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Hybrid Model Architecture</h3>
      
      <div className="relative">
        {/* Architecture Diagram */}
        <div className="flex flex-col space-y-8 relative">
          {/* Quantum Layer */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium px-2 py-1 rounded rotate-90 origin-left">
              Quantum
            </div>
            <div className="ml-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
              <div className="grid grid-cols-2 gap-3">
                {quantumComponents.map((component) => (
                  <div key={component.id} className="p-3 bg-white dark:bg-slate-800 rounded border border-purple-200 dark:border-purple-700/30 text-center">
                    <p className="text-sm font-medium text-purple-800 dark:text-purple-300">{component.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Connecting Lines */}
          <div className="absolute left-1/2 top-[calc(25%-8px)] h-[16%] border-l-2 border-dashed border-slate-300 dark:border-slate-700 z-0"></div>
          
          {/* Hybrid Processing Layer */}
          <div className="relative z-10">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-medium px-2 py-1 rounded rotate-90 origin-left">
              Hybrid
            </div>
            <div className="ml-8 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800/30">
              <div className="grid grid-cols-2 gap-3">
                {hybridComponents.map((component) => (
                  <div key={component.id} className="p-3 bg-white dark:bg-slate-800 rounded border border-teal-200 dark:border-teal-700/30 text-center">
                    <p className="text-sm font-medium text-teal-800 dark:text-teal-300">{component.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Connecting Lines */}
          <div className="absolute left-1/2 top-[calc(58%-8px)] h-[16%] border-l-2 border-dashed border-slate-300 dark:border-slate-700 z-0"></div>
          
          {/* Classical Layer */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded rotate-90 origin-left">
              Classical
            </div>
            <div className="ml-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <div className="grid grid-cols-2 gap-3">
                {classicalComponents.map((component) => (
                  <div key={component.id} className="p-3 bg-white dark:bg-slate-800 rounded border border-blue-200 dark:border-blue-700/30 text-center">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300">{component.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Result Arrow */}
        <div className="mt-8 flex justify-center items-center">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-slate-400 dark:border-t-slate-500"></div>
        </div>
        
        {/* Final Output */}
        <div className="mt-2 p-4 bg-gradient-to-r from-purple-50 via-teal-50 to-blue-50 dark:from-purple-900/20 dark:via-teal-900/20 dark:to-blue-900/20 rounded-lg border border-slate-200 dark:border-slate-700 text-center">
          <p className="text-base font-semibold text-slate-900 dark:text-white">Fraud Detection Result</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">High-speed anomaly detection with unprecedented accuracy</p>
        </div>
      </div>
    </div>
  );
};

export default ModelArchitecture;