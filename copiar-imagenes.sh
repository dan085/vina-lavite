#!/bin/bash

# Script para copiar y renombrar las imágenes de Viña La Vite
# Uso: ./copiar-imagenes.sh [carpeta-origen-con-imagenes]

ORIGEN=${1:-.}  # Si no se especifica carpeta, usa la actual
DESTINO_BASE="public/images"
DESTINO_VINOS="public/images/vinos"

echo "🍷 Copiando imágenes de Viña La Vite..."
echo "Origen: $ORIGEN"
echo ""

# Crear directorios si no existen
mkdir -p "$DESTINO_BASE"
mkdir -p "$DESTINO_VINOS"

# Contador de imágenes copiadas
COPIADAS=0

# Función para copiar imagen
copiar_imagen() {
    local patron=$1
    local destino=$2
    local descripcion=$3
    
    # Buscar archivo que coincida con el patrón
    archivo=$(find "$ORIGEN" -maxdepth 1 -iname "*$patron*" -type f | head -n 1)
    
    if [ -n "$archivo" ]; then
        cp "$archivo" "$destino"
        echo "✅ $descripcion → $destino"
        ((COPIADAS++))
    else
        echo "⚠️  No se encontró: $descripcion (patrón: *$patron*)"
    fi
}

echo "📁 Imágenes de galería:"
copiar_imagen "barril" "$DESTINO_BASE/barriles.jpg" "Barriles de roble"
copiar_imagen "catacion" "$DESTINO_BASE/catacion.jpg" "Catación del barril"
copiar_imagen "carmenere.*vine\|vine.*carmenere\|mulchen" "$DESTINO_BASE/carmenere-vinedo.jpg" "Carmenere Mulchén"
copiar_imagen "mesa\|evento\|celebr" "$DESTINO_BASE/evento.jpg" "Evento elegante"

echo ""
echo "🍾 Botellas de vino:"
copiar_imagen "malbec.*colchagua\|colchagua.*malbec" "$DESTINO_VINOS/malbec-colchagua.jpg" "Malbec Colchagua"
copiar_imagen "carmenere.*aconcagua\|aconcagua.*carmenere" "$DESTINO_VINOS/carmenere-aconcagua.jpg" "Carmenere Aconcagua"
copiar_imagen "cabernet.*maipo\|maipo.*cabernet" "$DESTINO_VINOS/cabernet-maipo.jpg" "Cabernet Maipo"
copiar_imagen "malbec.*reserva\|reserva.*malbec" "$DESTINO_VINOS/malbec-reserva.jpg" "Malbec Gran Reserva"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Proceso completado: $COPIADAS/8 imágenes copiadas"
echo ""

if [ $COPIADAS -eq 8 ]; then
    echo "🎉 ¡Todas las imágenes fueron copiadas exitosamente!"
    echo "💡 Recarga el navegador en http://localhost:4200"
else
    echo "⚠️  Algunas imágenes no se encontraron."
    echo ""
    echo "💡 Instrucciones manuales:"
    echo "   1. Guarda cada imagen del chat en una carpeta"
    echo "   2. Ejecuta: ./copiar-imagenes.sh [carpeta-con-imagenes]"
    echo ""
    echo "   O renombra manualmente:"
    echo "   - Imagen de barriles → barriles.jpg"
    echo "   - Imagen de catación → catacion.jpg"
    echo "   - Logo Carmenere → carmenere-vinedo.jpg"
    echo "   - Mesa evento → evento.jpg"
    echo "   - Botellas con montañas → [nombre-apropiado].jpg"
fi
