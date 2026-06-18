# Insignia Metálica

Sitio estático en español para `https://insigniametalica.com`, orientado a compradores B2B de insignias metálicas personalizadas, pines metálicos, medallas, monedas, tokens y placas de nombre.

## Repositorio

- GitHub: `https://github.com/lzyderun-arch/insigniametalica.git`
- Rama recomendada para producción: `main`

## Despliegue en Cloudflare Pages

- Framework preset: None
- Build command: dejar vacío
- Build output directory: `/`
- Production branch: `main`
- Dominio personalizado: `insigniametalica.com`

## Datos publicados

- Nombre comercial: `Insignia Metálica`
- Sitio web: `https://insigniametalica.com/`
- Email: `lzyderun@gmail.com`
- Teléfono / WhatsApp: `+86 13922851014`
- Ubicación de fabricación: China

La dirección legal completa, datos fiscales, certificaciones y documentos de proveedor deben confirmarse en la factura proforma o documentación formal de cada pedido. No se publican números de certificado ni auditoría sin documentos reales.

## SEO base

- Cada página tiene `title`, `meta description`, `canonical` y contenido HTML estático.
- La navegación evita usar `insignia` sin contexto para no atraer búsquedas de Opel Insignia.
- Las palabras clave principales se distribuyen por intención: insignias metálicas, pin metálico, pines metálicos personalizados, medallas metálicas, placas de identificación metálicas y monedas personalizadas.
- `privacy.html` y `terms.html` están incluidos en el sitemap y enlazados desde el footer.

## Formulario

El formulario de contacto usa FormSubmit hacia `lzyderun@gmail.com` y redirige a `https://insigniametalica.com/thanks.html`. En el primer envío, FormSubmit puede pedir activar el correo receptor.

## Notas de mantenimiento

- No subir `.wrangler/`, archivos `.env` ni logs.
- Si cambias el dominio, actualiza `canonical`, `sitemap.xml`, `robots.txt` y la URL `_next` del formulario.
