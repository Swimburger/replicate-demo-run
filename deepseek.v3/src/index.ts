import type { BaseModelRunRequest, BaseRunResponse } from "replicate";

export const ORGANIZATION = "deepseek-ai";
export const MODEL = "deepseek-v3";
export type Organization = "deepseek-ai";
export type Model = "deepseek-v3";

export interface DeepseekV3Input {
  prompt: string;
  system_prompt?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
}

export interface DeepseekV3Request
  extends BaseModelRunRequest<Organization, Model, DeepseekV3Input> {}

export interface DeepseekV3Response extends BaseRunResponse<string> {}

declare module "replicate" {
  export function run(config: DeepseekV3Request): Promise<DeepseekV3Response>;
}
