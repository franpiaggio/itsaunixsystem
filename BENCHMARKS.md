# Benchmarks

## Tiempo de construcción (sesión Claude Code, 2026-08-31 → 2026-09-01)

Medido desde los timestamps de la sesión y de los archivos del proyecto.

| Fase | Ventana | Duración aprox. |
|---|---|---|
| Investigación referencia (fsn / stills de la peli) + scaffolding (`index.html`, `style.css`, `data.js`, `main.js` v1) | 23:35 – 23:41 | ~6 min |
| Iteración estética contra screenshots (cielo, fog, cables, cámara, densidad) | 23:41 – 23:50 | ~9 min |
| Verificación interactiva en Chrome (vuelo, teclado, ventanas Win98, easter eggs) + README | 23:50 – 23:55 | ~5 min |
| Labels legibles + click-to-focus de archivos | 23:55 – 00:00 | ~5 min |
| Port de shaders livecoder (`ntsc()` + `tube()`) + tuning (jitter, curvatura, colores peli, crosshair out) | 00:00 – 00:10 | ~10 min |
| Fidelidad fina contra stills (labels menta "Zoology", spotlight ámbar suave, columna con bordes, labels sobre cables, fix pointerup fantasma) | 00:10 – 00:20 | ~10 min |
| **Total** | | **~45 min** |

Primera versión navegable en pantalla: **~10 min** desde el arranque.

## Claude creando esto — primera iteración

Del goal inicial (23:35) a la primera versión completa verificada en browser
(escena fsn + navegación mouse/teclado + ventanas Win98 + easter eggs + README,
~23:55):

| Métrica | Valor |
|---|---|
| Tiempo total primera iteración | **~20 min** |
| — hasta primer render en pantalla | ~6 min |
| — iteración estética contra stills (6 screenshots) | ~9 min |
| — verificación interactiva + easter eggs + README | ~5 min |
| Tokens consumidos (presupuesto de sesión) | **~115.000** |
| Llamadas a herramientas (aprox.) | ~50 (writes, edits, screenshots, JS en browser, navegación) |
| Líneas de código producidas | ~900 (main.js ~600, data.js ~150, css ~120, html ~30) |
| Bugs encontrados por Claude en esa pasada | 1 (RAF pausado en tab hidden → loop con setInterval) |

Modelo: Claude Fable 5, sesión Claude Code con browser automation (Chrome MCP)
para verificación visual contra los stills de la película.

## Runtime (medido en Chrome, canvas 1512×790, Apple Silicon)

| Métrica | Valor |
|---|---|
| Presupuesto de frame (12 fps fijos, estilo peli) | 83.3 ms |
| Tiempo de frame CPU con post FX (NTSC + tube, promedio 40 frames) | ~7.8 ms |
| Tiempo de frame CPU sin post FX | ~8.8 ms (ruido de medición; GPU asíncrona) |
| Margen de presupuesto | ~10× |
| Draw calls de escena | 353 |
| Triángulos de escena | ~2 450 |
| Texturas (labels canvas) | 98 |
| Geometrías | 129 |
| Passes de post FX por frame | 5 (scene → NTSC decode → copy half → blur H → blur V → tube a pantalla) |
| Carga de página (localhost, DOMContentLoaded / load) | 124 ms / 170 ms |

Notas:
- Los tiempos de frame son CPU-submit (la GPU trabaja asíncrona); a 12 fps el sistema está lejos de cualquier límite.
- El post FX corre a resolución completa; el halo de tube a media resolución.
- `P` desactiva/activa los shaders en vivo para comparar.
