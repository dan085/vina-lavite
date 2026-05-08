# 📸 Guía Rápida: Renombrar y Usar Imágenes

## Opción 1: Script Automático ⚡

1. Guarda todas las 9 imágenes del chat en una carpeta (ej: `~/Downloads/vinalavite-fotos/`)
2. Ejecuta desde la terminal:
   ```bash
   ./copiar-imagenes.sh ~/Downloads/vinalavite-fotos/
   ```

El script buscará y copiará automáticamente las imágenes con los nombres correctos.

---

## Opción 2: Renombrado Manual 📝

### Paso 1: Identifica cada imagen

Del chat recibiste **9 imágenes** en este orden:

1. **Mesa elegante con flores y vino** → `evento.jpg`
2. **Persona catando del barril** → `catacion.jpg`
3. **Dos barriles con logo "Viña La Vite"** → `barriles.jpg`
4. **Logo "Carmenere Mulchén 2009" sobre viñedo** → `carmenere-vinedo.jpg`
5. **Botella Malbec Gran Reserva (frontal)** → `malbec-reserva.jpg`
6. **Botella Malbec Gran Reserva (frontal, duplicada)** → (ignorar o usar como backup)
7. **Botella Carmenere con montañas** → `carmenere-aconcagua.jpg`
8. **Botella Malbec con montañas** → `malbec-colchagua.jpg`
9. **Botella Cabernet con montañas** → `cabernet-maipo.jpg`

### Paso 2: Descarga y renombra

1. Haz clic derecho en cada imagen del chat
2. "Guardar imagen como..." o "Save Image As..."
3. Guárdala directamente con el nombre correcto en la carpeta correspondiente

### Paso 3: Ubicación de las imágenes

```
vinalavite/public/images/
├── barriles.jpg          ← Imagen #3
├── catacion.jpg          ← Imagen #2
├── carmenere-vinedo.jpg  ← Imagen #4
├── evento.jpg            ← Imagen #1
└── vinos/
    ├── malbec-colchagua.jpg      ← Imagen #8
    ├── carmenere-aconcagua.jpg   ← Imagen #7
    ├── cabernet-maipo.jpg        ← Imagen #9
    └── malbec-reserva.jpg        ← Imagen #5
```

---

## Opción 3: Arrastrar y Soltar 🖱️

1. Abre la carpeta `vinalavite/public/images/` en Finder
2. Arrastra cada imagen del chat directamente a la carpeta
3. Renombra cada una según la tabla de arriba
4. Mueve las 4 botellas a la subcarpeta `vinos/`

---

## Verificación ✅

Después de copiar las imágenes, verifica que tienes estos 8 archivos:

```bash
ls -la public/images/
# Deberías ver: barriles.jpg, catacion.jpg, carmenere-vinedo.jpg, evento.jpg

ls -la public/images/vinos/
# Deberías ver: malbec-colchagua.jpg, carmenere-aconcagua.jpg, cabernet-maipo.jpg, malbec-reserva.jpg
```

## 🎉 Resultado Final

Una vez todas las imágenes estén en su lugar:
- Recarga http://localhost:4200
- Verás las imágenes reales en:
  - ✨ Página de inicio: 3 botellas con montañas
  - 🖼️ Galería: Barriles, catación, Carmenere, evento elegante
  - 📖 Sobre Nosotros: Imagen de barriles

¡Tu sitio web ahora lucirá completamente profesional con las fotos reales! 🍷
