# TypeScript Type Augmentation Demo for Replicate Models

This project demonstrates how to use TypeScript's module augmentation feature to provide model-specific type safety for different AI models in the Replicate ecosystem. It shows how separate packages can extend the base `run` function's type definition to provide precise typing for their specific model parameters and outputs.

## Project Structure

- `replicate/`: Contains the base package with the generic `run` function
- `meta.llama2/`: Package providing type definitions for Meta's Llama 2 model
- `deepseek.v3/`: Package providing type definitions for DeepSeek V3 model
- `usage/`: Contains example usage of the type-augmented models

## How It Works

1. The base `replicate` package defines a generic `run` function with basic types:
   - `BaseConfig` for input configuration
   - `BaseResult` for the output structure

2. Model-specific packages (like `meta.llama2` and `deepseek.v3`) use TypeScript's module augmentation to add their own type overloads to the `run` function. This provides:
   - Type-safe model names
   - Model-specific input parameters
   - Properly typed output results

3. When importing a model package, its type definitions are automatically added to the `run` function, providing autocomplete and type checking for that specific model.

## Setup

1. Make sure you have [pnpm](https://pnpm.io/) installed on your system.

2. Run the setup script to install and build all packages:
   ```bash
   ./setup.sh
   ```

   This script will:
   - Install and build the base `replicate` package
   - Install and build the model-specific packages (`meta.llama2` and `deepseek.v3`)
   - Install and build the usage examples

3. Once setup is complete, you can proceed to the "Try It Out" section below.

## Try It Out

Look at the example usage in `usage/src/example.ts`. You'll notice that TypeScript provides:
- Autocomplete for model names
- Type checking for input parameters
- Proper return type inference

Additionally, if a user explicitly imports the request type from the model package, they create a variable that is typed as the model's request type. This allows for even more precise type checking and autocomplete features.

## Benefits

- **Type Safety**: Catch configuration errors at compile time
- **Better Developer Experience**: Get autocomplete for model-specific parameters
- **Modular Design**: Each model can live in its own package while extending the base functionality
- **Zero Runtime Overhead**: All type augmentation happens at compile time

## Technical Details

The type augmentation is achieved using TypeScript's `declare module` syntax. Each model package extends the base `replicate` module by adding its specific type overload to the `run` function. This allows TypeScript to properly type-check the function calls based on the model being used.