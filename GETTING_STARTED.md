# 🚀 GETTING STARTED WITH SEDERG PAY

## ⚡ Quick Start (5 minutes)

### Prerequisites
- Node.js 18+ (`node --version`)
- PHP 8.1+ (`php --version`)  
- Composer (`composer --version`)
- MySQL running (XAMPP, WAMP, etc.)

### Step 1: Clone Repository

```bash
git clone https://github.com/sedergsoft/SEDERG_PAY_beta.git
cd SEDERG_PAY_beta
```

### Step 2: Setup Backend

```bash
cd backend

# Copy config
cp .env.example .env

# Edit .env with your database credentials
# Install dependencies
composer install

# Run migrations
php yii migrate

# Start server
php -S localhost:8000
```

Backend available at: `http://localhost:8000`

### Step 3: Setup Frontend

```bash
# Open new terminal
cd frontend

# Copy config
cp .env.example .env

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend available at: `http://localhost:5173`

### Step 4: Login

1. Open browser: `http://localhost:5173`
2. Login with:
   - Email: `user@example.com`
   - Password: `password123`

---

## 🐳 With Docker

```bash
docker-compose up -d

# Frontend: http://localhost:3000
# Backend:  http://localhost:8000
# MySQL:    localhost:3306
```

---

## 📦 Build for Production

### Frontend

```bash
cd frontend
npm run build
# Files ready in: frontend/dist/
```

### Backend

```bash
cd backend
composer install --no-dev
php -S 0.0.0.0:8000
```

---

## 🔍 Verify Installation

### Test API

```bash
# Check API
curl http://localhost:8000/api

# Login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

---

## 📚 Documentation

- [README.md](README.md) - Project overview
- [QUICK_START.md](QUICK_START.md) - 5-minute guide
- [ARCHITECTURE.md](ARCHITECTURE.md) - System design
- [API_REFERENCE.md](API_REFERENCE.md) - API documentation
- [PRODUCTION_DEPLOYMENT.md](PRODUCTION_DEPLOYMENT.md) - Production guide

---

## 🔧 Troubleshooting

### Port already in use

```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :8000
kill -9 <PID>
```

### Database connection error

Edit `backend/.env` with correct credentials:

```
DB_HOST=localhost
DB_NAME=sederg_pay
DB_USER=root
DB_PASSWORD=your_password
```

### npm install fails

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 📋 Next Steps

After starting the system:

1. ✅ Explore Dashboard
2. ✅ Create test Remesa
3. ✅ Check transaction history
4. ✅ Try language switch
5. ✅ Review documentation

---

## 💡 Tips

- Use `npm run dev` for development (hot reload)
- Use `npm run build` for production (optimized)
- Check logs in `backend/runtime/logs/`
- Use Redux DevTools browser extension for debugging
- Use Postman for API testing

---

## 📖 Full Documentation

See [INDEX.md](INDEX.md) for complete documentation index.

---

**Ready to go! 🎉**

For issues: https://github.com/sedergsoft/SEDERG_PAY_beta/issues
