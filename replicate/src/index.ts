export interface VersionRunRequest {
  version: string;
  input: unknown;
}

export interface BaseModelRunRequest<
  TOrganization = string,
  TModel = string,
  TInput = unknown,
> {
  org: TOrganization;
  model: TModel;
  input: TInput;
}

export interface ModelRunRequest {
  org: string;
  model: string;
  input: unknown;
}

export interface BaseRunResponse<TOutput = unknown> {
  id: string;
  output: TOutput;
}

export interface RunResponse {
  id: string;
  output: unknown;
}

export function run(request: VersionRunRequest): Promise<RunResponse>;
export function run(request: ModelRunRequest): Promise<RunResponse>;
export function run<
  TRequest extends BaseModelRunRequest,
  TResponse extends BaseRunResponse,
>(request: TRequest): Promise<TResponse>;
export function run(request: unknown): Promise<RunResponse> {
  // This is just a mock implementation
  return Promise.resolve({
    id: "mock-id",
    output: {
      result: "mock-result",
    },
  });
}
