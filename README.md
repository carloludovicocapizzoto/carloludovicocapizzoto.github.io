# Carlo Ludovico Capizzoto — CV & Portfolio

Sito statico one-page (HTML/CSS/JS puro), bilingue IT/EN, dark/light mode. Nessuna build.

## Da sostituire
- `cv.pdf` → il tuo CV (stesso nome file)
- `photo.jpg` → la tua foto (formato verticale 4:5, ~1000×1250px). Finché manca si vede `photo-placeholder.svg`
- Dominio: se cambia l'indirizzo del sito, aggiornalo in `index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt` e `sitemap.xml`

## Modificare i testi
- Italiano: direttamente in `index.html`
- Inglese: oggetto `EN` in `main.js` (stesse chiavi `data-i18n`)
- Colore d'accento: `--accent` in `styles.css` (light e dark)

Link diretto in inglese: `/?lang=en`

## Anteprima locale
```
python3 -m http.server 4321
```

## Pubblicazione
Il sito è servito da GitHub Pages: https://carloludovicocapizzoto.github.io
Ogni push su `main` lo aggiorna in 1–2 minuti.
