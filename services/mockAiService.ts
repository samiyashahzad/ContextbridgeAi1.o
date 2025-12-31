
import { HandoffResult } from '../types';

/**
 * MOCK AI SERVICE
 * In a production environment, this function would call the Gemini API
 * using ai.models.generateContent with a prompt structured to extract
 * specific entities.
 * 
 * Logic below uses heuristic keyword matching to simulate 'Intelligence'.
 */
export const processHandoffMock = async (text: string): Promise<HandoffResult> => {
  // Simulate network/processing latency
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const lowerText = text.toLowerCase();
  
  // Heuristic-based extraction
  const commitments: string[] = [];
  const risks: string[] = [];
  const actions: string[] = [];
  let summary = "The customer is focused on streamlining internal workflows and reducing operational overhead.";

  // Detection Logic (Deterministic Simulation)
  if (lowerText.includes('discount') || lowerText.includes('price') || lowerText.includes('off')) {
    commitments.push("Agreed to a 15% discount for the first 12 months.");
  }
  if (lowerText.includes('api') || lowerText.includes('integration') || lowerText.includes('connect')) {
    actions.push("Schedule technical deep-dive on API documentation with their Dev team.");
  }
  if (lowerText.includes('security') || lowerText.includes('soc2') || lowerText.includes('audit')) {
    risks.push("Legal/Security review required; customer mentioned strict data privacy compliance.");
  }
  if (lowerText.includes('deadline') || lowerText.includes('launch') || lowerText.includes('go-live')) {
    commitments.push("Target go-live date set for end of Q3.");
  }
  if (lowerText.includes('competitor') || lowerText.includes('evaluating') || lowerText.includes('switching')) {
    risks.push("High churn risk: currently evaluating two other competitors simultaneously.");
  }
  if (lowerText.includes('training') || lowerText.includes('onboard')) {
    actions.push("Provision sandbox environment for user training sessions.");
  }

  // Fallbacks for empty results
  if (commitments.length === 0) commitments.push("No explicit financial commitments identified beyond standard pricing.");
  if (risks.length === 0) risks.push("No immediate red flags detected; sentiments appear positive.");
  if (actions.length === 0) actions.push("Schedule internal strategy sync before the client kickoff call.");

  return {
    summary,
    commitments,
    risks,
    actions
  };
};
