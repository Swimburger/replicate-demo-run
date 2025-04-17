import type { BaseConfig, BaseResult } from 'replicate';
export interface Llama2Config extends BaseConfig {
    model: "meta/llama-2-70b";
    input: {
        prompt: string;
        system_prompt?: string;
        temperature?: number;
        max_tokens?: number;
        top_p?: number;
    };
}
export interface Llama2Result extends BaseResult {
    output: string;
}
declare module 'replicate' {
    function run(config: Llama2Config): Promise<Llama2Result>;
}
