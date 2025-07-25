import React from 'react';
import ModelCard from '../components/models/ModelCard';
import ModelArchitecture from '../components/models/ModelArchitecture';
import { useData } from '../context/DataContext';

const ModelsPage: React.FC = () => {
  const { modelComponents } = useData();
  
  return (
    <section id="models" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Hybrid Model Components</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our quantum-classical hybrid approach combines the strengths of both paradigms to deliver superior fraud detection in high-frequency trading.
        </p>
      </div>
      
      <div className="mb-12">
        <ModelArchitecture components={modelComponents} />
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Component Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelComponents.map((component) => (
            <ModelCard key={component.id} model={component} />
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-800 mb-12">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Key Advantages</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
            <h4 className="text-lg font-medium text-purple-900 dark:text-purple-300 mb-2">Quantum Components</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 mt-1.5 mr-2"></span>
                <span>Quadratic speedup in pattern search using quantum algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 mt-1.5 mr-2"></span>
                <span>Enhanced feature space representation through quantum kernels</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 mt-1.5 mr-2"></span>
                <span>Ability to process complex trading patterns in superposition</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
            <h4 className="text-lg font-medium text-blue-900 dark:text-blue-300 mb-2">Classical Components</h4>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 mr-2"></span>
                <span>Fast preprocessing of high-volume trading data</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 mr-2"></span>
                <span>Efficient neural networks for sequential pattern recognition</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 mr-2"></span>
                <span>Robust, proven methods for final decision-making</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800/30">
          <h4 className="text-lg font-medium text-teal-900 dark:text-teal-300 mb-2">Hybrid Advantage</h4>
          <p className="text-sm text-teal-800 dark:text-teal-200 mb-4">
            Our hybrid approach intelligently combines quantum and classical processing to achieve both speed and accuracy,
            overcoming the limitations of each individual approach.
          </p>
          <div className="flex items-center">
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 via-teal-500 to-blue-500 w-[92%]"></div>
            </div>
            <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300">92% better</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsPage;