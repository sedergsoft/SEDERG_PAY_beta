# Guía de Inicio Rápido - SEDERG PAY

## 🚀 Inicio en 5 Minutos

### Requisitos Previos
- **Node.js** 18+ (descargar de https://nodejs.org)
- **npm** 9+ (incluido con Node.js)
- **Backend** en ejecución (http://localhost:8000)

### Paso 1: Instalación
```bash
cd frontend
npm install
```

### Paso 2: Configuración
```bash
# Copiar archivo de ejemplo
cp .env.example .env

# Editar si es necesario (por defecto apunta a localhost:8000)
# VITE_API_URL=http://localhost:8000
```

### Paso 3: Ejecutar Desarrollo
```bash
npm run dev
```

Se abrirá automáticamente en: **http://localhost:3000**

### Paso 4: Login
```
Email:    user@example.com
Password: password123
```

---

## 📦 Comandos Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Verificar tipos TypeScript
npm run type-check

# Linting
npm run lint

# Preview de build
npm run preview
```

---

## 🏗️ Estructura de Carpetas

```
frontend/
├── src/
│   ├── components/       # Componentes React reutilizables
│   ├── pages/           # Páginas principales
│   ├── services/        # API client
│   ├── store/           # Redux (auth, remesa)
│   ├── types/           # TypeScript interfaces
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globales
├── index.html           # HTML principal
├── vite.config.ts       # Config Vite
├── tailwind.config.ts   # Config TailwindCSS
├── package.json         # Dependencias
└── .env.example         # Vars de ambiente
```

---

## 🔐 Autenticación

El frontend implementa:
- **JWT Token** almacenado en localStorage
- **Interceptor Axios** que adjunta el token a cada request
- **Rutas protegidas** que redirigen a login si no hay sesión

### Flujo de Autenticación
1. Usuario ingresa email/password
2. Backend valida y retorna JWT token
3. Token se guarda en localStorage
4. Interceptor de Axios adjunta token a todos los requests
5. Si token expira (401), se limpia y redirige a login

---

## 🎨 Estilos y Temas

El proyecto usa **TailwindCSS** con configuración personalizada:

### Colores Corporativos
- **Primary**: Azul (#1e40af)
- **Accent**: Rojo (#dc2626)
- **Success**: Verde (#16a34a)
- **Warning**: Naranja (#ea580c)

### Fuentes
- **Sans**: Inter (texto)
- **Heading**: Poppins (títulos)

---

## 🐛 Troubleshooting

### Puerto 3000 ocupado
```bash
# Windows
netstat -ano | findstr :3000

# macOS/Linux
lsof -i :3000
```

### CORS error en desarrollo
El proxy de Vite redirige `/api/*` a `http://localhost:8000`. Si aún hay errores, verificar que el backend tiene CORS habilitado.

### TypeScript errors
```bash
npm run type-check
```

### Node modules corruptos
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Recursos

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 💡 Próximos Pasos

1. Implementar más páginas (Perfil, Remesas, etc)
2. Agregar pruebas (Vitest + Playwright)
3. Optimizar bundle size
4. Agregar análisis de performance
5. Internacionalización (i18n)

---

¿Preguntas? Abre un [issue](https://github.com/sedergsoft/SEDERG_PAY_beta/issues)
