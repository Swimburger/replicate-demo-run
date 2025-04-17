export interface BaseConfig {
    model: string;
    input?: Record<string, unknown>;
}

export interface BaseResult {
    id: string;
    output: unknown;
}

export function run<T extends BaseConfig = BaseConfig>(config: T): Promise<BaseResult> {
    // This is just a mock implementation
    return Promise.resolve({
        id: 'mock-id',
        output: null
    });
}