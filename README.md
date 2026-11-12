# Buchladen Becker

Website für die Fachbücher von Eugen Becker, gehostet auf GitHub Pages.

**Live:** [becker-eugen.github.io](https://becker-eugen.github.io/)

## Reihen

- KI Praxis
- KI Verstehen
- Ethical Hacking
- Netzwerk verstehen
- Linux Security
- Windows Security

Die genaue Anzahl der Bücher pro Reihe steht live auf der Seite und berechnet sich automatisch aus `script.js`.

## Was die Seite kann

Im Hero dreht sich ein 3D-Karussell mit Buchcovern, das sich mit der Maus neigt. Daneben tippt ein Terminal die Reihen und die Anzahl der Bücher. Im Regal sind die Bücher als 3D-Bücher mit farbigem Buchrücken dargestellt und drehen sich beim Darüberfahren. Filter, Suche und Raster/Liste wechseln mit animierten Übergängen (View Transitions in Chrome, Edge und Safari). Im Detailfenster gibt es Download, Lesen im Browser, Link kopieren und Blättern mit den Pfeiltasten oder per Wischen.

Unter den Reihen steht eine kurze **„Über mich“**-Sektion mit der Motivation hinter den kostenlosen Fachbüchern. Darunter der Spenden-Hinweis.

Tastenkürzel: `/` springt in die Suche, `Esc` schließt das Fenster, `←` und `→` blättern.

Jedes Buch hat einen eigenen Link, z. B. `.../#buch-eh-3` für das Nmap Handbuch. Die Über-mich-Sektion erreichst du über `#ueber`.

Wer in den Systemeinstellungen „Bewegung reduzieren“ eingeschaltet hat, bekommt die Seite ohne Animationen.

## Neues Buch hinzufügen

1. PDF in den passenden Ordner unter `books/` legen.
2. Cover als JPG unter `covers/` ablegen (etwa 640 px breit). Aus der ersten PDF-Seite geht das so:
   ```bash
   pdftoppm -f 1 -l 1 -r 150 -jpeg -singlefile buch.pdf covers/mein-cover
   ```
3. In `script.js` im Array `books` einen Eintrag ergänzen. Mit `isNew: true` bekommt das Buch das Kennzeichen „Neu“.

Die Zahlen auf der Seite (Bücher pro Reihe, Gesamtzahl) rechnen sich von selbst.

## Spendenlink

Steht ganz oben in `script.js` als `PAYPAL_DONATE_URL`.

## Struktur

```
├── index.html
├── styles.css
├── script.js
├── README.md
├── covers/   Buchcover (JPG)
└── books/    PDF-Dateien
```

## Lokal testen

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.
