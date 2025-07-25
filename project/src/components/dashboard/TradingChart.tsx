import React, { useState } from 'react';
import { TradeData } from '../../types';
import { RefreshCw } from 'lucide-react';

interface TradingChartProps {
  data: TradeData[];
  isLoading: boolean;
  onRefresh: () => void;
}

const TradingChart: React.FC<TradingChartProps> = ({ data, isLoading, onRefresh }) => {
  const [showAnomalies, setShowAnomalies] = useState(true);
  
  // Calculate chart dimensions
  const chartHeight = 180;
  const chartWidth = 800;
  const padding = { top: 10, right: 20, bottom: 20, left: 40 };
  const innerHeight = chartHeight - padding.top - padding.bottom;
  const innerWidth = chartWidth - padding.left - padding.right;
  
  // Find min/max values for scaling
  const minPrice = Math.min(...data.map(d => d.price)) * 0.95;
  const maxPrice = Math.max(...data.map(d => d.price)) * 1.05;
  
  // Map data points to SVG coordinates
  const points = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * innerWidth;
    const y = padding.top + innerHeight - ((d.price - minPrice) / (maxPrice - minPrice)) * innerHeight;
    return { ...d, x, y };
  });
  
  // Generate path string for line chart
  const linePath = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">High-Frequency Trading Activity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="show-anomalies"
              checked={showAnomalies}
              onChange={() => setShowAnomalies(!showAnomalies)}
              className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-300 rounded"
            />
            <label htmlFor="show-anomalies" className="text-xs text-slate-700 dark:text-slate-300">
              Show Anomalies
            </label>
          </div>
          <button
            onClick={onRefresh}
            className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
            disabled={isLoading}
            aria-label="Refresh data"
          >
            <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none" className="overflow-visible">
          {/* Y-axis labels */}
          <text x={padding.left - 5} y={padding.top} textAnchor="end" fontSize="10" fill="currentColor" className="text-slate-500 dark:text-slate-400">
            {maxPrice.toFixed(2)}
          </text>
          <text x={padding.left - 5} y={padding.top + innerHeight/2} textAnchor="end" fontSize="10" fill="currentColor" className="text-slate-500 dark:text-slate-400">
            {((maxPrice + minPrice) / 2).toFixed(2)}
          </text>
          <text x={padding.left - 5} y={padding.top + innerHeight} textAnchor="end" fontSize="10" fill="currentColor" className="text-slate-500 dark:text-slate-400">
            {minPrice.toFixed(2)}
          </text>
          
          {/* Grid lines */}
          <line 
            x1={padding.left} y1={padding.top + innerHeight/2} 
            x2={padding.left + innerWidth} y2={padding.top + innerHeight/2} 
            stroke="currentColor" 
            className="text-slate-200 dark:text-slate-800" 
            strokeDasharray="4 4" 
          />
          
          {/* Price line */}
          <path
            d={linePath}
            fill="none"
            stroke="currentColor"
            className="text-teal-500 dark:text-teal-400"
            strokeWidth="2"
          />
          
          {/* Anomaly dots */}
          {showAnomalies && points.filter(p => p.isAnomalous).map((point, i) => (
            <circle
              key={`anomaly-${i}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="currentColor"
              className="text-red-500 dark:text-red-400"
            >
              <title>Anomaly detected: Price ${point.price.toFixed(2)}</title>
            </circle>
          ))}
        </svg>
        
        {/* X-axis time labels */}
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1 px-8">
          <span>-50s</span>
          <span>-40s</span>
          <span>-30s</span>
          <span>-20s</span>
          <span>-10s</span>
          <span>Now</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full mr-1"></span>
          <span>Price movement</span>
        </div>
        {showAnomalies && (
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full mr-1"></span>
            <span>Detected anomalies ({points.filter(p => p.isAnomalous).length})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingChart;