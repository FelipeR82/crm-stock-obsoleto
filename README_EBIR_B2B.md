# EBIR B2B Portal

## Estructura que debes subir a GitHub

- `index.html` o `ebir_b2b_v14_mejorado.html`
- `data/datos-stock-codigo.xlsx`
- `data/bbdd-clientes.xlsx`
- `Images/`
- `Images/<Nombre Colección>/*.jpg`
- `scripts/build-data.mjs`
- `.github/workflows/build-data.yml`
- `package.json`

La web carga primero estos JSON generados:

- `data/products.json`
- `data/customers.json`
- `data/collections-images.json`

Si los JSON no existen, intenta leer directamente los Excel desde:

- `data/datos-stock-codigo.xlsx`
- `data/bbdd-clientes.xlsx`

Para GitHub Pages se recomienda usar siempre el flujo automático de GitHub Actions, porque el navegador no puede listar carpetas de imágenes por sí solo.

## Excel de productos

Archivo: `data/datos-stock-codigo.xlsx`

Columnas esperadas:

- `Código`
- `Superofertas`
- `Categoria`
- `Colección`
- `Descripción`
- `Descripción 2`
- `Medida`
- `Sensores`
- `CCT`
- `Tipo de iluminación`
- `Potencia`
- `Voltage`
- `Unidades por Caja`
- `Unidades por Pallet`
- `Pedido Mínimo`
- `Stock`
- `Precio`

`Superofertas` admite valores como `Sí`, `SI`, `1`, `true`, `x`.

## Excel de clientes

Archivo: `data/bbdd-clientes.xlsx`

Columnas esperadas:

- `Codigo Cliente`
- `Nombre  Cliente`
- `Pais Cliente`
- `Idioma`
- `Comercial`
- `email_contact_1`
- `email_contact_2`

`email_contact_2` queda registrado como destinatario pendiente cuando se genera una oferta u oportunidad. El envío real automático requiere backend o un servicio externo.

## Imágenes

Carpeta: `Images/`

Cada colección debe tener su propia subcarpeta:

```text
Images/
  MIA/
    01.jpg
    02.jpg
  LINA/
    principal.jpg
```

El proceso `scripts/build-data.mjs` genera `data/collections-images.json` automáticamente.

## Subida a GitHub paso a paso

1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido del ZIP a la raíz del repositorio.
3. Coloca `datos-stock-codigo.xlsx` dentro de `data/`.
4. Coloca `bbdd-clientes.xlsx` dentro de `data/`.
5. Coloca las imágenes dentro de `Images/<Nombre Colección>/`.
6. Si quieres que la página inicial sea esta web, renombra `ebir_b2b_v14_mejorado.html` a `index.html`.
7. Haz commit en la rama `main`.
8. En GitHub, entra en `Actions` y ejecuta `Build static data`.
9. El Action generará `products.json`, `customers.json` y `collections-images.json`.
10. En `Settings > Pages`, selecciona desplegar desde la rama `main`.

## Qué funciona en GitHub Pages

- Catálogo desde JSON/Excel publicado.
- Imágenes desde `Images/`.
- Filtros, incluyendo `Superofertas` para administrador y comercial.
- Carrito.
- Generación de PDF.
- Generación de Excel.
- Ofertas y oportunidades guardadas en `localStorage`.
- Roles demo en frontend.

## Qué requiere backend en producción

- Login real y seguro.
- Contraseñas cifradas.
- Roles no manipulables.
- Envío automático real de emails a `email_contact_2`.
- Registro centralizado de ofertas de todos los usuarios.
- Base de datos compartida.

Los roles actuales sirven para demo estática. No guardes contraseñas reales en el HTML ni en `localStorage`.
