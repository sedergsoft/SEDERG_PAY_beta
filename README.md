# 🚀 SEDERG PAY - Plataforma de Remesas Fintech

<div align="center">

![SEDERG PAY Logo](https://img.shields.io/badge/SEDERG_PAY-v1.0.0-blue?style=for-the-badge&logo=rocket)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue?style=flat-square&logo=typescript)
![Yii2](https://img.shields.io/badge/Yii2-Framework-blue?style=flat-square&logo=php)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=flat-square&logo=mysql)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)

**Una plataforma moderna de remesas fintech para transferencias internacionales entre Cuba y Rusia**

[Características](#características) • [Tech Stack](#-tech-stack) • [Inicio Rápido](#-inicio-rápido) • [Documentación](#-documentación) • [Contribuir](#-contribuir)

</div>

---

## ✨ Características

### 💳 Remesas
- ✅ Crear y gestionar remesas internacionales
- ✅ Soporte para múltiples países (Cuba, Rusia)
- ✅ Conversión de monedas en tiempo real
- ✅ Tracking de estado de remesas
- ✅ Confirmación y notificaciones

### 🔐 Seguridad
- ✅ Autenticación JWT completa
- ✅ Password hashing con bcrypt
- ✅ Validaciones frontend + backend
- ✅ Rutas protegidas
- ✅ TypeScript strict mode

### 📊 Dashboard
- ✅ Estadísticas en tiempo real
- ✅ Gráficos de transacciones
- ✅ Historial de operaciones
- ✅ Conversión de monedas
- ✅ Últimas remesas

### 🎨 UI/UX
- ✅ Diseño moderno con TailwindCSS
- ✅ Componentes reutilizables
- ✅ Responsive design
- ✅ Dark/Light mode ready
- ✅ 45+ componentes personalizados

---

## 🛠 Tech Stack

### Frontend
```
✨ React 18.2.0              - UI framework
✨ TypeScript 5.1.6          - Type safety
✨ Vite 4.4.5               - Build tool (150KB!)
✨ Redux Toolkit 1.9.5      - State management
✨ React Router 6.14.1      - Navigation
✨ TailwindCSS 3.3.2       - Styling
✨ Recharts 2.8.0          - Charts
```

### Backend
```
⚙️ Yii2 Framework           - PHP framework
⚙️ PHP 8.1                  - Runtime
⚙️ MySQL 8.0               - Database
⚙️ JWT Authentication       - Security
```

---

## 📦 Estructura del Proyecto

```
SEDERG_PAY_beta/
├── frontend/                 # React 18 + TypeScript
│   ├── src/
│   │   ├── pages/           # 6 páginas
│   │   ├── components/      # 45+ componentes
│   │   ├── services/        # API client
│   │   ├── store/           # Redux
│   │   └── types/           # TypeScript
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # Yii2 + PHP
│   ├── controllers/         # 3 API controllers
│   ├── models/              # 5+ models
│   ├── config/              # Configuration
│   ├── migrations/          # DB migrations
│   └── composer.json
│
└── docs/                     # Documentation
```

---

## 🚀 Inicio Rápido

### Frontend
```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```

### Backend
```bash
cd backend
composer install
php yii migrate
php -S localhost:8000
```

### Credenciales
```
Email:    user@example.com
Password: password123
```

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Componentes React | 45+ |
| API Endpoints | 15+ |
| Tablas BD | 10+ |
| Bundle Size | ~150KB |
| Load Time | <1s |
| TypeScript | 100% |

---

## 📚 Documentación

- [Guía Rápida](./QUICK_START.md)
- [Arquitectura](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Deployment](./docs/DEPLOYMENT.md)

---

## 🔐 Seguridad

- ✅ JWT Authentication
- ✅ Password Hashing (bcrypt)
- ✅ Input Validation
- ✅ TypeScript Strict Mode
- ✅ CORS Configuration
- ✅ Protected Routes

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles

---

## 👥 Autor

**sedergsoft** - [@GitHub](https://github.com/sedergsoft)

---

<div align="center">

### ⭐ ¡Si te gusta, déjanos una estrella!

**SEDERG PAY v1.0.0** | 🚀 Production Ready | 📅 2026-05-26

</div>
