#!/bin/bash

# Auto Web App Vulnerability Scanner - Quick Install Script
# This script helps you set up the project quickly

echo "======================================"
echo "VulnScan - Quick Installation"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check if MongoDB is running
echo "Checking MongoDB connection..."
if command -v mongosh &> /dev/null; then
    if mongosh --eval "db.runCommand('ping')" &> /dev/null; then
        echo "✅ MongoDB is running"
    else
        echo "⚠️  MongoDB might not be accessible. Make sure it's running:"
        echo "   - Windows: MongoDB should auto-start"
        echo "   - macOS: brew services start mongodb-community"
        echo "   - Linux: sudo systemctl start mongod"
    fi
else
    echo "⚠️  MongoDB tools not found. Make sure MongoDB is installed and running."
fi

echo ""
echo "======================================"
echo "Installing Backend Dependencies"
echo "======================================"
cd backend

# Check if .env exists
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "✅ .env created (update MONGODB_URI if needed)"
fi

echo "Installing npm packages..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

echo ""
echo "======================================"
echo "Installing Frontend Dependencies"
echo "======================================"
cd ../frontend

echo "Installing npm packages..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

echo ""
echo "======================================"
echo "✅ Installation Complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Start MongoDB (if not already running):"
echo "   - Windows: Net start MongoDB"
echo "   - macOS: brew services start mongodb-community"
echo "   - Linux: sudo systemctl start mongod"
echo ""
echo "2. Start the backend (in one terminal):"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "3. Start the frontend (in another terminal):"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "4. Open your browser and go to:"
echo "   http://localhost:3000"
echo ""
echo "For more help, see MONGODB_SETUP.md"
