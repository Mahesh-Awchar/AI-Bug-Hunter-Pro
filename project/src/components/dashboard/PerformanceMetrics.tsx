import React from 'react';
import { PerformanceMetric } from '../../types';

interface PerformanceMetricsProps {
  metrics: PerformanceMetric[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metrics }) => {
  const renderBar = (value: number, max: number, color: string) => {
    const width = `${(value / max) * 100}%`;
    
    return (
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color}`} 
          style={{ width }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 border border-slate-200 dark:border-slate-800">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Performance Comparison</h3>
      
      <div className="space-y-6">
        {metrics.map((metric, index) => {
          const maxValue = Math.max(metric.quantum, metric.classical, metric.hybrid);
          
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{metric.label}</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-purple-700 dark:text-purple-400 font-medium">Quantum</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{metric.quantum.toFixed(2)}</span>
                  </div>
                  {renderBar(metric.quantum, maxValue, 'bg-purple-500 dark:bg-purple-400')}
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-blue-700 dark:text-blue-400 font-medium">Classical</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{metric.classical.toFixed(2)}</span>
                  </div>
                  {renderBar(metric.classical, maxValue, 'bg-blue-500 dark:bg-blue-400')}
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-teal-700 dark:text-teal-400 font-medium">Hybrid</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{metric.hybrid.toFixed(2)}</span>
                  </div>
                  {renderBar(metric.hybrid, maxValue, 'bg-teal-500 dark:bg-teal-400')}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          The hybrid model consistently outperforms both quantum and classical approaches across key metrics.
        </p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;