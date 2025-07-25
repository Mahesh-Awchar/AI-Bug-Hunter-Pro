import { TradeData, PerformanceMetric, DetectionResult } from '../types';

// Generate simulated trading data
export const generateTradingData = (count: number): TradeData[] => {
  const data: TradeData[] = [];
  const now = Date.now();
  
  for (let i = 0; i < count; i++) {
    // Generate base price with some normal fluctuation
    const basePrice = 150 + Math.sin(i / 10) * 5 + (Math.random() - 0.5) * 2;
    const baseVolume = 100 + Math.cos(i / 8) * 20 + (Math.random() - 0.5) * 10;
    
    // Occasionally insert anomalies
    const isAnomalous = Math.random() > 0.95;
    const anomalyMultiplier = isAnomalous ? (Math.random() > 0.5 ? 1.5 : 0.5) : 1;
    const anomalyScore = isAnomalous 
      ? 0.7 + Math.random() * 0.3 
      : Math.random() * 0.3;
    
    data.push({
      id: `trade-${i}`,
      timestamp: now - (count - i) * 1000,
      price: basePrice * anomalyMultiplier,
      volume: baseVolume * (isAnomalous ? anomalyMultiplier : 1),
      anomalyScore,
      isAnomalous
    });
  }
  
  return data;
};

// Generate performance metrics for comparison
export const generatePerformanceMetrics = (): PerformanceMetric[] => {
  return [
    {
      label: 'Accuracy',
      quantum: 0.82 + Math.random() * 0.08,
      classical: 0.76 + Math.random() * 0.06,
      hybrid: 0.89 + Math.random() * 0.06
    },
    {
      label: 'Processing Time (ms)',
      quantum: 12 + Math.random() * 5,
      classical: 25 + Math.random() * 8,
      hybrid: 18 + Math.random() * 4
    },
    {
      label: 'Resource Usage',
      quantum: 0.65 + Math.random() * 0.1,
      classical: 0.45 + Math.random() * 0.1,
      hybrid: 0.55 + Math.random() * 0.1
    },
    {
      label: 'Scalability',
      quantum: 0.78 + Math.random() * 0.1,
      classical: 0.82 + Math.random() * 0.1,
      hybrid: 0.92 + Math.random() * 0.08
    }
  ];
};

// Generate detection results
export const generateDetectionResults = (): DetectionResult => {
  return {
    accuracy: 0.92 + Math.random() * 0.05,
    recall: 0.89 + Math.random() * 0.06,
    precision: 0.87 + Math.random() * 0.07,
    f1Score: 0.88 + Math.random() * 0.06,
    latency: 18 + Math.random() * 5,
    anomaliesDetected: Math.floor(Math.random() * 5) + 8,
    falsePositives: Math.floor(Math.random() * 3)
  };
};