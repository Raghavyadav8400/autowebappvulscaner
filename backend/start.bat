@echo off
REM Backend startup script for Windows

echo.
echo 🔧 Backend Setup ^& Startup
echo ==========================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
  echo 📦 Installing dependencies...
  call npm install
  echo.
)

echo ✅ Dependencies ready
echo.
echo 🚀 Starting backend server...
echo Server will run on http://localhost:5000
echo.
call npm run dev
pause
