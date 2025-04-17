import { run } from 'replicate';
import 'meta.llama2';
import 'openai.gpt4_5';

async function example() {
    // Using Llama2 with its specific types
    const llamaResult = await run({
        model: "meta/llama-2-70b",
        input: {
            prompt: "Hello, world!",
            system_prompt: "You are a helpful assistant.",
            temperature: 0.7,
            max_tokens: 100,
            top_p: 0.9
        }
    });
    
    // TypeScript will ensure this is a string due to the type augmentation
    console.log(llamaResult.output);


    // Using openai/gpt-4-5 with its specific types
    const gpt4_5Result = await run({
        model: "openai/gpt-4-5",
        input: {
            prompt: "Hello, world!",
            system_prompt: "You are a helpful assistant.",
            temperature: 0.7,
            max_tokens: 100,
            top_p: 0.9
        }
    });
    
    // TypeScript will ensure this is a string due to the type augmentation
    console.log(gpt4_5Result.output);
}