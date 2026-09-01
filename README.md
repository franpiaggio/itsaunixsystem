# Jurassic UNIX — "It's a UNIX system! I know this!"

A Three.js replica of **fsn** (the SGI IRIX 3D File System Navigator) as seen in
*Jurassic Park* (1993), rendered at movie-accurate ~12 fps, with a fake
InGen/Jurassic Park filesystem to fly around in.

Clicking a file opens a rough Windows-98-style window with fake file contents.
A few files are special (`whte_rbt.obj`, `reboot.sys`, `spared_no_expense.txt`).

## Run

Any static server works (ES modules need HTTP, not `file://`):

```bash
python3 -m http.server 8917
# open http://localhost:8917/
```

Three.js is loaded from CDN (jsdelivr), so you need network on first load.

## Controls

| Input | Action |
|---|---|
| Click salmon pedestal | Fly to that directory |
| Click blue/green box | Select file (spotlight + light column) |
| Double-click box / Enter | Open the file in a Win98 window |
| `W` `A` `S` `D` | Move forward/left/back/right |
| `← →` | Turn |
| `R` / `F` (or `Q` / `E`) | Altitude up / down |
| `Shift` | 3× speed |
| Mouse drag | Free look |
| `Esc` | Clear selection |
| `P` | Toggle CRT shaders (NTSC + tube) |

## Files

- `index.html` — page shell, path readout
- `style.css` — Win98 window styling
- `data.js` — the fake Jurassic Park filesystem tree
- `main.js` — scene, layout, labels, navigation, picking, windows, 12 fps loop,
  and the CRT post chain (NTSC composite decode + physical tube, ported from
  livecoder's `ntsc()`/`tube()` effects)
- `BENCHMARKS.md` — build-time + runtime numbers
