import React from 'react';
import TradingChart from '../components/dashboard/TradingChart';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import DetectionSummary from '../components/dashboard/DetectionSummary';
import ModelArchitecture from '../components/models/ModelArchitecture';
import { useData } from '../context/DataContext';
import { RefreshCw, ZoomIn, Eye, Download } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { tradingData, performanceMetrics, detectionResults, modelComponents, refreshData, isLoading } = useData();
  
  return (
    <section id="dashboard" className="container mx-auto px-4">
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Quantum-Classical Fraud Detection</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Real-time anomaly detection in high-frequency trading data</p>
        </div>
        
        <div className="flex space-x-2 mt-4 lg:mt-0">
          <button 
            onClick={refreshData}
            className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium transition-colors"
            disabled={isLoading}
          >
            <RefreshCw size={16} className={`mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Refresh Data
          </button>
          <button className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium transition-colors">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TradingChart 
            data={tradingData} 
            isLoading={isLoading}
            onRefresh={refreshData}
          />
        </div>
        
        <div>
          <DetectionSummary results={detectionResults} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div>
          <PerformanceMetrics metrics={performanceMetrics} />
        </div>
        
        <div className="lg:col-span-2">
          <ModelArchitecture components={modelComponents} />
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-100 dark:border-purple-900/30">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Ready to see more?</h3>
            <p className="text-slate-700 dark:text-slate-300">
              Explore our interactive demo showcasing the power of quantum-classical hybrid fraud detection.
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 rounded-md text-sm font-medium hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors">
              <ZoomIn size={16} className="mr-2" />
              Detailed Analysis
            </button>
            <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition-colors">
              <Eye size={16} className="mr-2" />
              Try Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;