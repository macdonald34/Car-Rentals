@echo off
REM Car Rentals Application - Quick Start Script for Windows
REM This script starts both the frontend and backend servers

echo.
echo ========================================
echo   Car Rentals Application - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Install dependencies if needed
echo Checking dependencies...
echo.

if not exist "car\node_modules" (
    echo Installing frontend dependencies...
    cd car
    call npm install
    cd ..
    echo.
)

if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
    echo.
)

echo.
echo ========================================
echo   Starting Car Rentals Application
echo ========================================
echo.
echo Starting backend on http://localhost:5000...
echo Starting frontend on http://localhost:3000...
echo.
echo Press Ctrl+C to stop the servers.
echo.

REM Start backend in a new window
start "Car Rentals Backend" cmd /k "cd backend && npm run dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start frontend in a new window
start "Car Rentals Frontend" cmd /k "cd car && npm start"

echo.
echo ========================================
echo   Servers started!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Two terminal windows have been opened.
echo Close them when you want to stop the application.
echo.
pause
