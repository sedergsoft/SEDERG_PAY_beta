#!/bin/bash

# SEDERG PAY - Production Deployment Script (Linux/macOS)

echo ""
echo "======================================="
echo "  SEDERG PAY - PRODUCTION DEPLOYMENT"
echo "  Version 1.0.0-beta"
echo "======================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed"
    exit 1
fi

# Check PHP
if ! command -v php &> /dev/null; then
    echo "ERROR: PHP is not installed"
    exit 1
fi

# Check Composer
if ! command -v composer &> /dev/null; then
    echo "ERROR: Composer is not installed"
    exit 1
fi

echo "[1/3] Building frontend..."
cd frontend
npm install
npm run build
echo "✓ Frontend build complete!"

cd ..
echo ""
echo "[2/3] Setting up backend..."
cd backend
composer install
echo "✓ Backend setup complete!"

cd ..
echo ""
echo "[3/3] System ready for production!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your database credentials"
echo "2. Run: php yii migrate"
echo "3. Start backend: php -S localhost:8000"
echo "4. Serve frontend: npx serve -s frontend/dist"
echo ""
