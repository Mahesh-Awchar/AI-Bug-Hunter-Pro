import React, { createContext, useContext, useState, useEffect } from 'react';
import { TradeData, PerformanceMetric, DetectionResult, ModelComponent } from '../types';
import { generateTradingData, generatePerformanceMetrics, generateDetectionResults } from '../utils/generators';

interface DataContextType {
  tradingData: TradeData[];
  performanceMetrics: PerformanceMetric[];
  detectionResults: DetectionResult;
  modelComponents: ModelComponent[];
  refreshData: () => void;
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const modelComponents: ModelComponent[] = [
  { 
    id: 'qae', 
    name: 'Quantum Autoencoder', 
    description: 'Compresses trading patterns into quantum states to identify anomalies',
    type: 'quantum'
  },
  { 
    id: 'qk', 
    name: 'Quantum Kernel', 
    description: 'Maps trading data to quantum feature space for enhanced classification',
    type: 'quantum'
  },
  { 
    id: 'lstm', 
    name: 'LSTM Network', 
    description: 'Classical deep learning for sequential pattern recognition',
    type: 'classical'
  },
  { 
    id: 'transformer', 
    name: 'Transformer', 
    description: 'Attention mechanism for contextual analysis of trading patterns',
    type: 'classical'
  },
  { 
    id: 'hybrid-proc', 
    name: 'Hybrid Processing Unit', 
    description: 'Coordinates quantum-classical data transfer and processing',
    type: 'hybrid'
  },
  { 
    id: 'error-mit', 
    name: 'Error Mitigation', 
    description: 'Reduces noise in quantum computations for increased accuracy',
    type: 'hybrid'
  }
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tradingData, setTradingData] = useState<TradeData[]>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetric[]>([]);
  const [detectionResults, setDetectionResults] = useState<DetectionResult>({
    accuracy: 0,
    recall: 0,
    precision: 0,
    f1Score: 0,
    latency: 0,
    anomaliesDetected: 0,
    falsePositives: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTradingData(generateTradingData(50));
      setPerformanceMetrics(generatePerformanceMetrics());
      setDetectionResults(generateDetectionResults());
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadData();
  }, []);

  const refreshData = () => {
    loadData();
  };

  return (
    <DataContext.Provider value={{ 
      tradingData, 
      performanceMetrics, 
      detectionResults,
      modelComponents,
      refreshData,
      isLoading
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};