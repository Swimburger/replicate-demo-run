export interface BaseConfig {
    model: string;
    input?: Record<string, unknown>;
}
export interface BaseResult {
    id: string;
    output: unknown;
}
export declare function run<T extends BaseConfig = BaseConfig>(config: T): Promise<BaseResult>;
