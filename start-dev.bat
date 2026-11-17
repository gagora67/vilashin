@echo off
title VILASHIN dev server
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" (
  echo Installing dependencies...
  call npm install --legacy-peer-deps
)
echo Starting dev server on http://localhost:5173 ...
rem Run Vite via node directly: the "&" in the folder name breaks npm's .cmd shims.
node "%~dp0node_modules\vite\bin\vite.js" --port 5173 --host 127.0.0.1
pause
