import { run } from "replicate";
import "@replicate/models.meta.llama2";
import type {
  Gpt4_5Request,
  Gpt4_5Response,
} from "@replicate/models.openai.gpt4_5";

async function example() {
  // Using Llama2 with its specific types
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

  // Using openai/gpt-4-5 with its specific types
  const gpt4_5Request: Gpt4_5Request = {
    org: "openai",
    model: "gpt-4-5",
    input: {
      prompt: "Hello, world!",
      system_prompt: "You are a helpful assistant.",
      temperature: 0.7,
      max_tokens: 100,
      top_p: 0.9,
    },
  };
  const gpt4_5Result: Gpt4_5Response = await run(gpt4_5Request);

  // TypeScript will ensure this is a string due to the type augmentation
  console.log(gpt4_5Result.output);

  // Explicit type for the request and response
  const gpt4_5Result2: Gpt4_5Response = await run<Gpt4_5Request, Gpt4_5Response>({
    org: "openai",
    model: "gpt-4-5",
    input: {
      prompt: "Hello, world!",
      system_prompt: "You are a helpful assistant.",
      temperature: 0.7,
      max_tokens: 100,
      top_p: 0.9,
    },
  });

  // TypeScript will ensure this is a string due to the type augmentation
  console.log(gpt4_5Result2.output);
}
