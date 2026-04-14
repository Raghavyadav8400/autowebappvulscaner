@echo off
REM Auto Web App Vulnerability Scanner - Quick Install Script for Windows

echo ======================================
echo VulnScan - Quick Installation
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install it first:
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%
echo.

echo ======================================
echo Installing Backend Dependencies
echo ======================================
cd backend

if not exist .env (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo ✅ .env created (update MONGODB_URI if needed)
)

echo Installing npm packages...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

echo ✅ Backend dependencies installed
echo.

echo ======================================
echo Installing Frontend Dependencies
echo ======================================
cd ..\frontend

echo Installing npm packages...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

echo ✅ Frontend dependencies installed
echo.

echo ======================================
echo ✅ Installation Complete!
echo ======================================
echo.
echo Next steps:
echo.
echo 1. Start MongoDB:
echo    - Make sure MongoDB is running (it should auto-start on Windows)
echo    - Check Task Manager for "mongod.exe"
echo.
echo 2. Start the backend (open a new terminal in backend folder):
echo    cd backend
echo    npm run dev
echo.
echo 3. Start the frontend (open another new terminal in frontend folder):
echo    cd frontend
echo    npm run dev
echo.
echo 4. Open your browser and go to:
echo    http://localhost:3000
echo.
echo For more help, see MONGODB_SETUP.md
echo.
pause
