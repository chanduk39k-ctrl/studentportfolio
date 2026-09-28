@echo off
title Chandler Portfolio Launcher
echo Starting Portfolio Local Server...
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel% neq 0 (
    set "PATH=C:\Program Files\nodejs;%PATH%"
)
start http://localhost:5173
npm.cmd run dev -- --port 5173
pause
