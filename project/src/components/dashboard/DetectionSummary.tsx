import React from 'react';
import { DetectionResult } from '../../types';
import { ShieldCheck, AlertCircle, Clock, BarChart } from 'lucide-react';

interface DetectionSummaryProps {
  results: DetectionResult;
}

const DetectionSummary: React.FC<DetectionSummaryProps> = ({ results }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 border border-slate-200 dark:border-slate-800">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Hybrid Model Performance</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <ShieldCheck className="w-5 h-5 text-teal-500 mr-2 mt-0.5" />
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Accuracy</p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {(results.accuracy * 100).toFixed(1)}%
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <BarChart className="w-5 h-5 text-purple-500 mr-2 mt-0.5" />
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400">F1 Score</p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {results.f1Score.toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <Clock className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Latency</p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {results.latency.toFixed(1)} ms
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <AlertCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Anomalies Detected</p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {results.anomaliesDetected}
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-1">
                ({results.falsePositives} false +)
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
        <h4 className="text-sm font-medium text-purple-900 dark:text-purple-300 mb-1">Key Insight</h4>
        <p className="text-xs text-purple-800 dark:text-purple-200">
          The hybrid approach achieves sub-20ms latency while maintaining {(results.accuracy * 100).toFixed(1)}% accuracy,
          a significant improvement over classical-only models.
        </p>
      </div>
    </div>
  );
};

export default DetectionSummary;