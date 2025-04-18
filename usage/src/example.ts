import { run } from "replicate";
import "@replicate/models.meta.llama2";
import type {
  DeepseekV3Request,
  DeepseekV3Response,
} from "@replicate/models.deepseek.v3";

async function example() {
  // Llama2Request is inferred automatically
  // Llama2Response is inferred automatically
  const llamaResult = await run({
    org: "meta",
    model: "llama-2",
    input: {
      prompt: "Hello, world!",
      system_prompt: "You are a helpful assistant.",
    },
  });

  // TypeScript will ensure this is a string due to the type augmentation
  console.log(llamaResult.output);

  // Using deepseek/deepseek-v3 with its specific types
  const deepseekRequest: DeepseekV3Request = {
    org: "deepseek-ai",
    model: "deepseek-v3",
    input: {
      prompt: "Hello, world!",
      system_prompt: "You are a helpful assistant.",
      temperature: 0.7,
      max_tokens: 100,
      top_p: 0.9,
    },
  };
  // DeepseekV3Response can be inferred automatically
  const deepseekResult: DeepseekV3Response = await run(deepseekRequest);

  // TypeScript will ensure this is a string due to the type augmentation
  console.log(deepseekResult.output);

  // Explicit type for the request and response using generics
  const deepseekResult2: DeepseekV3Response = await run<
    DeepseekV3Request,
    DeepseekV3Response
  >({
    org: "deepseek-ai",
    model: "deepseek-v3",
    input: {
      prompt: "Hello, world!",
      system_prompt: "You are a helpful assistant.",
      temperature: 0.7,
      max_tokens: 100,
      top_p: 0.9,
    },
  });

  // TypeScript will ensure this is a string due to the type augmentation
  console.log(deepseekResult2.output);
}
