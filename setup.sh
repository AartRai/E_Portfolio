#!/bin/bash

# Setup script for the portfolio application
# This script sets up both frontend and backend

echo "🚀 Setting up Portfolio Application..."

# Frontend setup
echo ""
echo "📦 Setting up Frontend..."
npm install
echo "✓ Frontend dependencies installed"

# Backend setup
echo ""
echo "📦 Setting up Backend..."
cd server
npm install
echo "✓ Backend dependencies installed"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  cp .env.example .env
  echo "✓ Created .env file from template"
  echo "⚠️  Please update server/.env with your MongoDB URI"
else
  echo "✓ .env file already exists"
fi

cd ..

# Create frontend .env.local if it doesn't exist
if [ ! -f .env.local ]; then
  echo "VITE_API_URL=http://localhost:5000/api" > .env.local
  echo "✓ Created .env.local for frontend"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update server/.env with your MongoDB URI"
echo "2. Start MongoDB: mongod (or ensure MongoDB Atlas is accessible)"
echo "3. In one terminal, run: cd server && npm run dev"
echo "4. In another terminal, run: npm run dev"
echo ""
echo "Then open http://localhost:5173 in your browser"
