#!/bin/bash
# Backend startup script

echo "🔧 Backend Setup & Startup"
echo "=========================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo ""
fi

echo "✅ Dependencies ready"
echo ""
echo "🚀 Starting backend server..."
echo "Server will run on http://localhost:5000"
echo ""
npm run dev
