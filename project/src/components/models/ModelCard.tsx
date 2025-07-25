import React from 'react';
import { ModelComponent } from '../../types';
import { Cpu, Brain, GitMerge } from 'lucide-react';

interface ModelCardProps {
  model: ModelComponent;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const getTypeIcon = () => {
    switch (model.type) {
      case 'quantum':
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case 'classical':
        return <Brain className="w-5 h-5 text-blue-500" />;
      case 'hybrid':
        return <GitMerge className="w-5 h-5 text-teal-500" />;
      default:
        return null;
    }
  };
  
  const getTypeClass = () => {
    switch (model.type) {
      case 'quantum':
        return 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/30';
      case 'classical':
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/30';
      case 'hybrid':
        return 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/30';
      default:
        return '';
    }
  };
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{model.name}</h3>
          {getTypeIcon()}
        </div>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          {model.description}
        </p>
        
        <span className={`text-xs px-2 py-1 rounded-full ${getTypeClass()}`}>
          {model.type.charAt(0).toUpperCase() + model.type.slice(1)}
        </span>
      </div>
      
      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
        <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default ModelCard;