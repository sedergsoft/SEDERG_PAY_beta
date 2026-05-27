@echo off
REM SEDERG PAY - Production Deployment Script
REM This script prepares and deploys SEDERG PAY to production

echo.
echo ===============================================
echo   SEDERG PAY - PRODUCTION DEPLOYMENT
echo   Version 1.0.0-beta
echo ===============================================
echo.

cd frontend
echo Building frontend...
call npm install
call npm run build
echo Frontend build complete!

cd ..
cd backend
echo Setting up backend...
call composer install
echo Backend setup complete!

echo.
echo ===============================================
echo   SYSTEM READY FOR PRODUCTION
echo ===============================================
echo.
echo Next steps:
echo 1. Edit backend\.env with your database credentials
echo 2. Run: php yii migrate
echo 3. Start backend: php -S localhost:8000
echo 4. Serve frontend: npx serve -s frontend/dist
echo.
pause