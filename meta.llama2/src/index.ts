import type { BaseModelRunRequest, BaseRunResponse } from "replicate";

export const ORGANIZATION = "meta";
export const MODEL = "llama-2";
export type Organization = "meta";
export type Model = "llama-2";

export interface Llama2Input {
  prompt: string;
  system_prompt?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
}

export interface Llama2Request
  extends BaseModelRunRequest<Organization, Model, Llama2Input> {}

export interface Llama2Response extends BaseRunResponse<string> {}

declare module "replicate" {
  export function run(config: Llama2Request): Promise<Llama2Response>;
}
