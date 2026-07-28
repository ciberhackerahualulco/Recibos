# Generador de Recibos de Abono

Herramienta de una sola página (HTML/CSS/JS, sin backend) para generar recibos de abono con vista previa en vivo, exportación a PNG/PDF, envío por WhatsApp y modo oscuro.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (o usa uno existente) en GitHub.
2. Sube este archivo `index.html` a la raíz del repositorio (así la URL queda limpia, sin `/index.html` al final).
3. Ve a **Settings → Pages**.
4. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. En 1–2 minutos tu recibo estará en:
   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

## Novedad: historial por cliente + producto

- El botón **💾 Guardar este abono** guarda el abono actual bajo la combinación `cliente + concepto` en el `localStorage` del navegador (por ejemplo: `Eli` + `Mounjaro`).
- El botón **🔎 Cargar historial** recupera todos los abonos guardados previamente para ese mismo cliente/producto y los coloca en la sección "Abonos anteriores".
- El botón **🗑 Borrar este historial** elimina el historial guardado de ese cliente/producto específico (pide confirmación).
- Al escribir el nombre del cliente (y opcionalmente el producto), aparece un aviso si ya existe historial guardado.
- El campo **Concepto** ahora autocompleta con los productos que ya has usado antes (ej. si ya guardaste "Mounjaro" una vez, te lo sugiere al volver a escribir).
- **⬇ Exportar respaldo (JSON)** descarga todo el historial guardado en un archivo `.json`, útil para respaldar o pasar los datos a otro dispositivo.
- **⬆ Importar respaldo** carga un archivo `.json` exportado previamente. Si ya hay historial guardado en el navegador, te preguntará si quieres combinarlo o reemplazarlo todo.

**Importante:** todo esto se guarda en el navegador/dispositivo donde se usa, no en la nube. Si cambias de computadora o navegador, usa exportar/importar para llevar el historial contigo.
