// types/index.ts

export interface Alert {
  material: string;
  restricted_from: string;
  restricted_to: string;
  confidence?: number;
  source?: string;
}

export interface Risk {
  affected_shipments: string[];
  risk_level: "HIGH" | "MEDIUM" | "LOW";
}

export interface Decision {
  action: string;
  alternatives: string[];
  message: string;
}

export interface AnalysisResponse {
  alert: Alert;
  risk: Risk;
  decision: Decision;
  meta?: {
    time_ms: number;
  };
}