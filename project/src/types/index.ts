export interface TradeData {
  id: string;
  timestamp: number;
  price: number;
  volume: number;
  anomalyScore: number;
  isAnomalous: boolean;
}

export interface PerformanceMetric {
  label: string;
  quantum: number;
  classical: number;
  hybrid: number;
}

export interface ModelComponent {
  id: string;
  name: string;
  description: string;
  type: 'quantum' | 'classical' | 'hybrid';
  icon?: string;
}

export interface DetectionResult {
  accuracy: number;
  recall: number;
  precision: number;
  f1Score: number;
  latency: number;
  anomaliesDetected: number;
  falsePositives: number;
}

export type Theme = 'light' | 'dark';