import type { BaseConfig, BaseResult } from 'replicate';

export interface Gpt4_5Config extends BaseConfig {
    model: "openai/gpt-4-5";
    input: {
        prompt: string;
        system_prompt?: string;
        temperature?: number;
        max_tokens?: number;
        top_p?: number;
    };
}

export interface Gpt4_5Result extends BaseResult {
    output: string;
}

declare module 'replicate' {
    export function run(config: Gpt4_5Config): Promise<Gpt4_5Result>;
}