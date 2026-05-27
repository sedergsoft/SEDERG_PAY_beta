# 📖 REFERENCIA RÁPIDA - SEDERG PAY

## ⚡ Inicio Rápido (Copiar & Pegar)

### Backend (Terminal 1)

```bash
cd backend
composer install
php yii migrate
php -S localhost:8000
```

### Frontend (Terminal 2)

```bash
cd frontend
npm install
npm run dev
```

### Acceso

```
URL:      http://localhost:5173
Email:    user@example.com
Password: password123
```

---

## 📚 Documentos Clave

| Documento | Propósito |
|-----------|----------|
| [README.md](README.md) | Presentación del proyecto |
| [GETTING_STARTED.md](GETTING_STARTED.md) | Inicio rápido |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Diseño del sistema |
| [API_REFERENCE.md](API_REFERENCE.md) | Endpoints API |
| [PRODUCTION_DEPLOYMENT.md](PRODUCTION_DEPLOYMENT.md) | Deploy a producción |

---

## 📁 Estructura

```
frontend/          # React app
backend/           # Yii2 API
docs/              # Documentación
```

---

## 🔌 API Base URL

```
Dev:    http://localhost:8000
Prod:   https://api.your-domain.com
```

---

## 📝 Comandos Útiles

### Frontend

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run preview      # Preview build
npm run lint         # Linting
npm run type-check   # Type checking
```

### Backend

```bash
php yii migrate              # Migraciones
php yii migrate/down         # Rollback
php yii serve               # Servidor local
php yii cache/flush-all     # Limpiar cache
```

---

## 🔑 Credenciales Prueba

```
Email:    user@example.com
Password: password123
Role:     user
```

---

## 🌍 URLs en Desarrollo

```
Frontend:  http://localhost:5173
Backend:   http://localhost:8000
MySQL:     localhost:3306
Redis:     localhost:6379 (opcional)
```

---

## 🐛 Troubleshooting Rápido

### Puerto en uso

```bash
# Windows
netstat -ano | findstr :8000

# Linux/Mac
lsof -i :8000
```

### Cache

```bash
# Frontend
rm -rf node_modules/.vite

# Backend
php yii cache/flush-all
```

### BD

```bash
php yii migrate/down all
php yii migrate
```

---

## 📊 Stack Técnico

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Yii2 + PHP 8.1
- **DB**: MySQL 8.0
- **Auth**: JWT

---

## 🎯 Features

- ✅ Login seguro
- ✅ Crear remesa
- ✅ Listar remesas
- ✅ Tracking en tiempo real
- ✅ Perfil usuario
- ✅ Dashboard

---

## 📞 Soporte

- Docs: https://github.com/sedergsoft/SEDERG_PAY_beta
- Issues: https://github.com/sedergsoft/SEDERG_PAY_beta/issues

---

**Version**: 1.0.0-beta  
**Status**: ✅ Production Ready
