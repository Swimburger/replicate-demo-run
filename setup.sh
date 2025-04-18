#!/bin/bash

# Install dependencies for base replicate package first
echo "Installing and building replicate package..."
pushd replicate
pnpm install
pnpm build
popd

# Install dependencies for model packages
echo "Installing and building model packages..."
pushd meta.llama2
pnpm install
pnpm build
popd

pushd openai.gpt4_5
pnpm install
pnpm build
popd

# Install dependencies for usage package
echo "Installing and building usage package..."
pushd usage
pnpm install
pnpm build
popd

echo "Setup complete! All packages installed and built."