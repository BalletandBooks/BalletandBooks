#!/bin/bash

echo "Installing frontend dependencies..."
npm install

echo "Installing backend dependencies..."
cd amplify
npm install
cd ..

echo "Setup complete!"
