# 🎯 Checklist de Producción - SEDERG PAY

## ✅ Antes del Despliegue

### Frontend
- [ ] `npm run build` ejecutado exitosamente
- [ ] `frontend/dist/` existe y tiene contenido
- [ ] `.env` configurado con VITE_API_URL correcta
- [ ] Bundle size: ~150KB ✓
- [ ] Todas las páginas funcionan localmente
- [ ] Login y autenticación probada

### Backend
- [ ] `composer install` completado
- [ ] `.env` creado con credenciales reales
- [ ] JWT_SECRET configurado (fuerte)
- [ ] BD creada en servidor de producción
- [ ] `php yii migrate` ejecutado
- [ ] API endpoints probados con Postman/Curl

### Base de Datos
- [ ] BD `sederg_pay` existe
- [ ] Todas las tablas creadas
- [ ] Datos de prueba cargados
- [ ] Backup automático configurado
- [ ] Credenciales seguras

### Seguridad
- [ ] HTTPS/SSL configurado
- [ ] JWT_SECRET es fuerte (40+ caracteres)
- [ ] CORS_ALLOWED_ORIGINS configurado correctamente
- [ ] Headers de seguridad en Nginx/Apache
- [ ] Rate limiting implementado

### Infraestructura
- [ ] Servidor web (Nginx/Apache) configurado
- [ ] PHP 8.1+ instalado
- [ ] MySQL 8.0+ instalado
- [ ] Node.js 18+ para build
- [ ] Espacio en disco suficiente (>5GB)

---

## 🚀 Durante el Despliegue

- [ ] Mantener backup de BD actual
- [ ] Tener plan de rollback
- [ ] Monitorear logs en tiempo real
- [ ] Verificar que API responde
- [ ] Verificar que Frontend carga
- [ ] Verificar autenticación JWT

---

## ✅ Después del Despliegue

- [ ] Verificar Frontend en navegador
- [ ] Verificar API endpoints con curl
- [ ] Probar login con credenciales
- [ ] Probar crear remesa
- [ ] Verificar logs sin errores
- [ ] Verificar SSL/HTTPS funciona
- [ ] Configurar monitoreo (uptime, errores)
- [ ] Configurar alertas (email, Slack)

---

## 📊 Pruebas de Producción

```bash
# Verificar Frontend
curl http://localhost:3000 | head -20

# Verificar Backend API
curl http://localhost:8000/api

# Test de Login
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Verificar HTTPS
curl -I https://your-domain.com
```

---

## 🆘 Rollback

Si algo sale mal:

```bash
# Restaurar BD anterior
mysql sederg_pay < backup.sql

# Volver a versión anterior
git checkout v1.0.0-alpha

# Reinstalar dependencias
composer install
npm install
```

---

## 📞 Soporte Post-Despliegue

- **Monitorear logs**: `tail -f logs/app.log`
- **Revisar errores**: Nginx error.log, PHP logs
- **Verificar performance**: New Relic, DataDog, etc.
- **Backups**: Configurar cron para backups diarios

---

**Última actualización**: 2026-05-27
