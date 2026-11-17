@echo off
chcp 65001 >nul
title Publish vilashin.com to GitHub
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed. Opening https://git-scm.com/download/win ...
  start "" https://git-scm.com/download/win
  pause
  exit /b 1
)

rem GitHub Actions workflow (builds and publishes the site to GitHub Pages)
if not exist ".github\workflows" mkdir ".github\workflows"
copy /Y "github-setup\deploy.yml" ".github\workflows\deploy.yml" >nul

if not exist ".git" (
  git init
  git branch -M main
  git remote add origin https://github.com/gagora67/vilashin.git
)

git config user.name >nul 2>nul
if errorlevel 1 git config user.name "gagora67"
git config user.email >nul 2>nul
if errorlevel 1 git config user.email "gagora67@users.noreply.github.com"

git add -A
git commit -m "Update vilashin.com"
git branch -M main
echo.
echo Pushing to https://github.com/gagora67/vilashin ...
echo (On first run a GitHub sign-in window may open - sign in there.)
git push -u origin main
echo.
if errorlevel 1 (echo PUSH FAILED - see the message above.) else (echo DONE. Build status: https://github.com/gagora67/vilashin/actions)
pause
