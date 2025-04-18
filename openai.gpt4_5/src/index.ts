import type { BaseModelRunRequest, BaseRunResponse } from "replicate";

export const ORGANIZATION = "openai";
export const MODEL = "gpt-4-5";
export type Organization = "openai";
export type Model = "gpt-4-5";

export interface Gpt4_5Input {
  prompt: string;
  system_prompt?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
}

export interface Gpt4_5Request
  extends BaseModelRunRequest<Organization, Model, Gpt4_5Input> {}

export interface Gpt4_5Response extends BaseRunResponse<string> {}

declare module "replicate" {
  export function run(config: Gpt4_5Request): Promise<Gpt4_5Response>;
}
