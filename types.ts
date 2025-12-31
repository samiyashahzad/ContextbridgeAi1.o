
export enum Persona {
  CS = 'Customer Success',
  TECHNICAL = 'Technical/Ops',
  RISK = 'Sales Manager (Risk)'
}

export interface HandoffSection {
  title: string;
  content: string[];
  type: 'summary' | 'commitment' | 'risk' | 'action';
}

export interface HandoffResult {
  summary: string;
  commitments: string[];
  risks: string[];
  actions: string[];
}
