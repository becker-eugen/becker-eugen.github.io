# Buchladen Becker – Fachbücher

Professionelle Buchladen-Website mit Cover-Bildern für GitHub Pages.

## Inhalte

- **KI Praxis** (8 Bände)
- **KI Verstehen** (4 Titel)
- **Ethical Hacking** (12 Handbücher)
- **Linux Security** (3 Bände)
- **Windows Security** (3 Bände)

## Features

- Buchcover aus den Original-PDFs / Frontcovern
- Raster- & Listenansicht (wie ein Shop)
- Detail-Modal mit Cover + Download
- Kategorie-Filter & Live-Suche
- Dark / Light Mode
- Responsive Design

## GitHub Pages

1. Inhalt dieses Ordners in ein GitHub-Repository pushen
2. **Settings → Pages**
3. Source: **Deploy from a branch** → Branch `main`, Folder `/ (root)`
4. Seite ist unter `https://DEIN-USERNAME.github.io/REPO-NAME/` erreichbar

## Struktur

```
├── index.html
├── styles.css
├── script.js
├── README.md
├── covers/          ← Buchcover (JPG)
└── books/           ← PDF-Dateien
```

## Lokal testen

`index.html` im Browser öffnen oder:

```bash
npx serve .
```
