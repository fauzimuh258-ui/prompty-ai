// lib/types/prompt.types.ts

export type Complexity = "ringan" | "menengah" | "berat" | "ultra-berat";

export interface PromptRequest {
  task: string;
  persona?: string;
  goal: string;
  complexity: Complexity;
  tone?: string;
}

export interface IterationRequest {
  previousPrompt: string;
  feedback: string;
}
