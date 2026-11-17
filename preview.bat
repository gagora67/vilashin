@echo off
title VILASHIN production preview
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" call npm install
echo Building production site (/, /hy/, /ru/) ...
node "%~dp0node_modules\vite\bin\vite.js" build
if errorlevel 1 (echo BUILD FAILED & pause & exit /b 1)
echo Preview on http://localhost:4173
node "%~dp0node_modules\vite\bin\vite.js" preview --port 4173 --host 127.0.0.1
pause
