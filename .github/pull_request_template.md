## Resumen

Describe brevemente qué cambia este PR y por qué.

---

## Checklist de filtros críticos

- [ ] Categoría de producto funciona.
- [ ] Tipo de iluminación funciona.
- [ ] CCT funciona.
- [ ] Superofertas funciona.
- [ ] Sensores funciona.
- [ ] Stock mínimo funciona.
- [ ] Búsqueda funciona.
- [ ] Filtros combinados funcionan.
- [ ] Caso sin resultados funciona correctamente.

---

## Checklist de tests

- [ ] He ejecutado `npm test` localmente.
- [ ] `npm test` pasa sin errores.
- [ ] Los tests cubren la lógica tocada en este PR.
- [ ] Si faltan tests, lo he documentado en este PR.

---

## Archivos sensibles revisados

Marca los que aplican en este PR:

- [ ] `index.html`
- [ ] `src/data/normalizers.js`
- [ ] `src/data/repository.js`
- [ ] `src/filters/state.js`
- [ ] `src/filters/matchers.js`
- [ ] `src/filters/apply.js`
- [ ] `src/ui/filters-controls.js`
- [ ] `src/render/catalog.js`
- [ ] `src/render/detail.js`
- [ ] `src/main.js`

---

## Confirmaciones obligatorias

- [ ] Confirmo que el proyecto usa el test runner nativo de Node (`node --test`).
- [ ] Confirmo que **no** he añadido Vitest ni dependencias de test externas innecesarias.
- [ ] Confirmo que no he mezclado rediseño visual con cambios de lógica de filtros.
- [ ] Confirmo que, si toqué lógica de filtros, expliqué exactamente el motivo.
