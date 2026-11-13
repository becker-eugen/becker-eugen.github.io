/* =========================================================
   Buchladen Becker · script.js
   Neue Bücher: einfach unten im Array "books" ergänzen.
   Die Zahlen auf der Seite (Titel, Reihen) rechnen sich selbst.
   ========================================================= */

// PayPal-Spendenlink
const PAYPAL_DONATE_URL = "https://paypal.me/eugen107";

const SERIES = [
  { id: "ki-praxis",        label: "KI Praxis",        text: "Vom Arbeitsalltag bis zu eigenen KI-Agenten" },
  { id: "ki-verstehen",     label: "KI Verstehen",     text: "Prompting, Vibe Coding und eine Forschungsarbeit" },
  { id: "ethical-hacking",  label: "Ethical Hacking",  text: "Werkzeuge, Methodik und die Sicht des Blue Teams" },
  { id: "netzwerk",         label: "Netzwerk verstehen", text: "Von den Grundlagen bis zum eigenen Homelab" },
  { id: "linux-security",   label: "Linux Security",   text: "Grundlagen, Hardening und Analyse unter Debian" },
  { id: "windows-security", label: "Windows Security", text: "Grundlagen, Hardening und Analyse für Windows" },
  { id: "server-cloud",    label: "Server & Cloud",    text: "Docker, Kubernetes, Webserver und Cloud-Infrastrukturen" }
];

// pages = Seitenzahl, kb = Dateigröße, isNew = Kennzeichnung "Neu"
const books = [
  // KI Praxis
  { id: "ki-p1", title: "KI im produktiven Alltag", category: "ki-praxis", band: "Band 1", pages: 50, kb: 87,
    desc: "Wie du KI praktisch und effizient in deinen Arbeitsalltag einbaust.",
    file: "books/KI_Praxis/KI_PRAXIS_Band1_KI_im_produktiven_Alltag.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band1_KI_im_produktiven_Alltag.jpg" },
  { id: "ki-p2", title: "Recherche und Wissensmanagement", category: "ki-praxis", band: "Band 2", pages: 47, kb: 83,
    desc: "Mit KI schneller recherchieren und Wissen so ablegen, dass du es wiederfindest.",
    file: "books/KI_Praxis/KI_PRAXIS_Band2_Recherche_und_Wissensmanagement.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band2_Recherche_und_Wissensmanagement.jpg" },
  { id: "ki-p3", title: "Automatisierung und KI-Agenten", category: "ki-praxis", band: "Band 3", pages: 52, kb: 85,
    desc: "Abläufe automatisieren und erste eigene KI-Agenten aufbauen.",
    file: "books/KI_Praxis/KI_PRAXIS_Band3_Automatisierung_und_KI-Agenten.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band3_Automatisierung_und_KI-Agenten.jpg" },
  { id: "ki-p4", title: "Lokale KI und eigene KI-Systeme", category: "ki-praxis", band: "Band 4", pages: 53, kb: 87,
    desc: "Sprachmodelle auf dem eigenen Rechner betreiben, ohne Daten an die Cloud zu geben.",
    file: "books/KI_Praxis/KI_PRAXIS_Band4_Lokale_KI_und_eigene_KI-Systeme.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band4_Lokale_KI_und_eigene_KI-Systeme.jpg" },
  { id: "ki-p5", title: "Datenanalyse mit KI", category: "ki-praxis", band: "Band 5", pages: 52, kb: 167,
    desc: "Daten auswerten und als Diagramm darstellen, mit KI als Helfer.",
    file: "books/KI_Praxis/KI_PRAXIS_Band5_Datenanalyse_mit_KI.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band5_Datenanalyse_mit_KI.jpg" },
  { id: "ki-p6", title: "Dokumente, Präsentationen und Fachbücher", category: "ki-praxis", band: "Band 6", pages: 53, kb: 113,
    desc: "Saubere Dokumente, Folien und ganze Bücher mit KI erstellen.",
    file: "books/KI_Praxis/KI_PRAXIS_Band6_Dokumente_Praesentationen_Fachbuecher.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band6_Dokumente_Praesentationen_Fachbuecher.jpg" },
  { id: "ki-p7", title: "Lernen mit KI und KI-Tutor", category: "ki-praxis", band: "Band 7", pages: 49, kb: 81,
    desc: "Besser lernen mit einem KI-Tutor, der sich an dein Tempo anpasst.",
    file: "books/KI_Praxis/KI_PRAXIS_Band7_Lernen_mit_KI_und_KI-Tutor.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band7_Lernen_mit_KI_und_KI-Tutor.jpg" },
  { id: "ki-p8", title: "Sicherheit und verantwortungsvolle KI-Nutzung", category: "ki-praxis", band: "Band 8", pages: 59, kb: 97,
    desc: "Risiken beim Einsatz von KI erkennen und vernünftig damit umgehen.",
    file: "books/KI_Praxis/KI_PRAXIS_Band8_Sicherheit_und_verantwortungsvolle_KI-Nutzung.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band8_Sicherheit_und_verantwortungsvolle_KI-Nutzung.jpg" },
  { id: "ki-p9", title: "KI und Recht", category: "ki-praxis", band: "Band 9", pages: 107, kb: 204, isNew: true,
    desc: "DSGVO, EU AI Act und Urheberrecht: was beim Einsatz von KI rechtlich gilt und wie du es bewertest.",
    file: "books/KI_Praxis/KI_PRAXIS_Band9_KI_und_Recht.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band9_KI_und_Recht.jpg" },
  { id: "ki-p10", title: "Eigene KI-Agenten mit MCP", category: "ki-praxis", band: "Band 10", pages: 111, kb: 253, isNew: true,
    desc: "Vom Sprachmodell zum KI-System, das mit dem Model Context Protocol selbst Werkzeuge benutzt.",
    file: "books/KI_Praxis/KI_PRAXIS_Band10_Eigene_KI-Agenten_mit_MCP.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band10_Eigene_KI-Agenten_mit_MCP.jpg" },

  // KI Verstehen
  { id: "ki-v1", title: "Der Einfluss von KI auf den Menschen", category: "ki-verstehen", band: "Forschungsarbeit", pages: 50, kb: 115,
    desc: "Wie künstliche Intelligenz auf Gesellschaft und den einzelnen Menschen wirkt, wissenschaftlich betrachtet.",
    file: "books/KI_Verstehen/Forschungsarbeit_Der_Einfluss_von_KI_auf_den_Menschen_Taschenbuch.pdf",
    cover: "covers/ki-v-Forschungsarbeit_Der_Einfluss_von_KI_auf_den_Menschen_Taschenbuch.jpg" },
  { id: "ki-v2", title: "Prompting Handbuch", category: "ki-verstehen", band: "Handbuch", pages: 83, kb: 403,
    desc: "Gute Prompts schreiben, von den Grundlagen bis zu fortgeschrittenen Techniken.",
    file: "books/KI_Verstehen/Prompting_Handbuch.pdf",
    cover: "covers/ki-v-Prompting_Handbuch.jpg" },
  { id: "ki-v3", title: "Vibe Coding unter Linux", category: "ki-verstehen", band: "Linux", pages: 78, kb: 407,
    desc: "Mit KI unter Linux programmieren, auch ohne lange Vorkenntnisse.",
    file: "books/KI_Verstehen/Vibe_Coding_Linux.pdf",
    cover: "covers/ki-v-Vibe_Coding_Linux.jpg" },
  { id: "ki-v4", title: "Vibe Coding unter Windows", category: "ki-verstehen", band: "Windows", pages: 82, kb: 421,
    desc: "Mit KI unter Windows und PowerShell programmieren, auch ohne lange Vorkenntnisse.",
    file: "books/KI_Verstehen/Vibe_Coding_Windows.pdf",
    cover: "covers/ki-v-Vibe_Coding_Windows.jpg" },

  // Ethical Hacking
  { id: "eh-1", title: "White Hat Credo", category: "ethical-hacking", band: "Band 1", pages: 16, kb: 225,
    desc: "Haltung und Grundsätze für ethisches Hacking.",
    file: "books/Ethical_Hacking/1_White_Hat_Credo.pdf", cover: "covers/eh-1_White_Hat_Credo.jpg" },
  { id: "eh-2", title: "Ethical Hacking", category: "ethical-hacking", band: "Band 2", pages: 67, kb: 398,
    desc: "Grundlagen und Methodik von Penetrationstests.",
    file: "books/Ethical_Hacking/2_Ethical_Hacking.pdf", cover: "covers/eh-2_Ethical_Hacking.jpg" },
  { id: "eh-3", title: "Nmap Handbuch", category: "ethical-hacking", band: "Band 3", pages: 34, kb: 271,
    desc: "Netzwerke scannen und Dienste erkennen mit Nmap.",
    file: "books/Ethical_Hacking/3_Nmap_Handbuch.pdf", cover: "covers/eh-3_Nmap_Handbuch.jpg" },
  { id: "eh-4", title: "Wireshark Handbuch", category: "ethical-hacking", band: "Band 4", pages: 33, kb: 289,
    desc: "Netzwerkverkehr mitschneiden und Pakete analysieren.",
    file: "books/Ethical_Hacking/4_Wireshark_Handbuch.pdf", cover: "covers/eh-4_Wireshark_Handbuch.jpg" },
  { id: "eh-5", title: "hping3 Handbuch", category: "ethical-hacking", band: "Band 5", pages: 35, kb: 277,
    desc: "Eigene Pakete bauen und Firewalls testen mit hping3.",
    file: "books/Ethical_Hacking/5_hping3_Handbuch.pdf", cover: "covers/eh-5_hping3_Handbuch.jpg" },
  { id: "eh-6", title: "OWASP Handbuch", category: "ethical-hacking", band: "Band 6", pages: 34, kb: 271,
    desc: "Sicherheitslücken in Webanwendungen nach den OWASP Top 10.",
    file: "books/Ethical_Hacking/6_OWASP_Handbuch.pdf", cover: "covers/eh-6_OWASP_Handbuch.jpg" },
  { id: "eh-7", title: "Burp Suite Handbuch", category: "ethical-hacking", band: "Band 7", pages: 34, kb: 272,
    desc: "Webanwendungen mit der Burp Suite prüfen.",
    file: "books/Ethical_Hacking/7_Burp_Suite_Handbuch.pdf", cover: "covers/eh-7_Burp_Suite_Handbuch.jpg" },
  { id: "eh-8", title: "Metasploit Handbuch", category: "ethical-hacking", band: "Band 8", pages: 34, kb: 276,
    desc: "Das Metasploit Framework in der Praxis.",
    file: "books/Ethical_Hacking/8_Metasploit_Handbuch.pdf", cover: "covers/eh-8_Metasploit_Handbuch.jpg" },
  { id: "eh-9", title: "Linux PrivEsc Handbuch", category: "ethical-hacking", band: "Band 9", pages: 34, kb: 270,
    desc: "Wie Angreifer unter Linux an Root-Rechte kommen und wie du das verhinderst.",
    file: "books/Ethical_Hacking/9_Linux_PrivEsc_Handbuch.pdf", cover: "covers/eh-9_Linux_PrivEsc_Handbuch.jpg" },
  { id: "eh-10", title: "John the Ripper Handbuch", category: "ethical-hacking", band: "Band 10", pages: 34, kb: 274,
    desc: "Passwort-Hashes prüfen und knacken mit John the Ripper.",
    file: "books/Ethical_Hacking/10_John_the_Ripper_Handbuch.pdf", cover: "covers/eh-10_John_the_Ripper_Handbuch.jpg" },
  { id: "eh-11", title: "Hashcat Handbuch", category: "ethical-hacking", band: "Band 11", pages: 34, kb: 274,
    desc: "Passwort-Cracking auf der Grafikkarte mit Hashcat.",
    file: "books/Ethical_Hacking/11_Hashcat_Handbuch.pdf", cover: "covers/eh-11_Hashcat_Handbuch.jpg" },
  { id: "eh-12", title: "Blue Team Handbuch", category: "ethical-hacking", band: "Band 12", pages: 34, kb: 274,
    desc: "Angriffe erkennen und abwehren aus Sicht der Verteidiger.",
    file: "books/Ethical_Hacking/12_Blue_Team_Handbuch.pdf", cover: "covers/eh-12_Blue_Team_Handbuch.jpg" },
  { id: "eh-13", title: "Kryptographie verständlich", category: "ethical-hacking", band: "Band 13", pages: 113, kb: 242, isNew: true,
    desc: "Von Hashes und Verschlüsselung bis zu TLS und Zertifikaten.",
    file: "books/Ethical_Hacking/13_Kryptographie_Verstaendlich.pdf", cover: "covers/eh-13_Kryptographie_verstaendlich.jpg" },
  { id: "eh-14", title: "Digitale Forensik", category: "ethical-hacking", band: "Band 14", pages: 108, kb: 230, isNew: true,
    desc: "Digitale Spuren sichern und auswerten, Beweise nachvollziehbar dokumentieren.",
    file: "books/Ethical_Hacking/14_Digitale_Forensik.pdf", cover: "covers/eh-14_Digitale_Forensik.jpg" },
  { id: "eh-15", title: "Active Directory Security", category: "ethical-hacking", band: "Band 15", pages: 149, kb: 310, isNew: true,
    desc: "Angriffe auf Windows-Domänen verstehen, Schwachstellen erkennen und Active Directory wirksam absichern.",
    file: "books/Ethical_Hacking/15_Active_Directory_Security.pdf", cover: "covers/eh-15_Active_Directory_Security.jpg" },
  { id: "eh-16", title: "Social Engineering & Phishing-Abwehr", category: "ethical-hacking", band: "Band 16", pages: 64, kb: 127, isNew: true,
    desc: "Manipulation und Phishing erkennen, E-Mail-Absender prüfen und Angriffe durch technische und organisatorische Maßnahmen abwehren.",
    file: "books/Ethical_Hacking/16_Social_Engineering_und_Phishing_Abwehr.pdf", cover: "covers/eh-16_Social_Engineering_Phishing_Abwehr.jpg" },


  // Netzwerk verstehen
  { id: "nv-1", title: "Grundlagen der Netzwerktechnik", category: "netzwerk", band: "Band 1", pages: 77, kb: 237,
    desc: "Ein verständlicher Einstieg in Computernetzwerke, von Switch und Router bis zu OSI und TCP/IP.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band1.pdf", cover: "covers/nv-band1.jpg" },
  { id: "nv-2", title: "IP: Internet Protocol", category: "netzwerk", band: "Band 2", pages: 77, kb: 284,
    desc: "IPv4, IPv6, Adressierung, Subnetting und Routing verständlich erklärt.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band2.pdf", cover: "covers/nv-band2.jpg" },
  { id: "nv-3", title: "TCP und UDP", category: "netzwerk", band: "Band 3", pages: 101, kb: 368,
    desc: "Verbindungen, Ports und Datenübertragung auf der Transportschicht.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band3.pdf", cover: "covers/nv-band3.jpg" },
  { id: "nv-4", title: "Netzwerkprotokolle in der Praxis", category: "netzwerk", band: "Band 4", pages: 129, kb: 473,
    desc: "DNS, DHCP, HTTP, HTTPS, SSH und weitere Dienste, die jedes Netz braucht.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band4.pdf", cover: "covers/nv-band4.jpg" },
  { id: "nv-5", title: "Routing, Switching und Netzwerkarchitektur", category: "netzwerk", band: "Band 5", pages: 205, kb: 732,
    desc: "Unternehmensnetzwerke planen, aufbauen und verwalten.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band5.pdf", cover: "covers/nv-band5.jpg" },
  { id: "nv-6", title: "Netzwerkanalyse und Troubleshooting", category: "netzwerk", band: "Band 6", pages: 233, kb: 764,
    desc: "Netzwerkverkehr analysieren und Fehler systematisch finden.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band6.pdf", cover: "covers/nv-band6.jpg" },
  { id: "nv-7", title: "WLAN verstehen", category: "netzwerk", band: "Band 7", pages: 95, kb: 378,
    desc: "Funktechnik, Standards, Sicherheit und die Planung von Funknetzen.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band7.pdf", cover: "covers/nv-band7.jpg" },
  { id: "nv-8", title: "Netzwerksicherheit", category: "netzwerk", band: "Band 8", pages: 141, kb: 489,
    desc: "Firewalls, VLANs, VPN und Zero Trust.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band8.pdf", cover: "covers/nv-band8.jpg" },
  { id: "nv-9", title: "Netzwerke im Homelab", category: "netzwerk", band: "Band 9", pages: 159, kb: 591,
    desc: "Das eigene Netzwerk zu Hause planen, aufbauen und betreiben.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band9.pdf", cover: "covers/nv-band9.jpg" },

  // Linux Security
  { id: "ls-1", title: "Linux Security: Grundlagen", category: "linux-security", band: "Band 1", pages: 51, kb: 339,
    desc: "Wie ein Linux-System aufgebaut ist und wo seine Sicherheit anfängt.",
    file: "books/Linux_Security_Grundlagen/Linux_Security_Band1_Grundlagen.pdf", cover: "covers/linux-band1.jpg" },
  { id: "ls-2", title: "Linux Security: Hardening", category: "linux-security", band: "Band 2", pages: 66, kb: 401,
    desc: "Linux-Server und Arbeitsplätze Schritt für Schritt absichern.",
    file: "books/Linux_Security_Grundlagen/Linux_Security_Band2_Hardening.pdf", cover: "covers/linux-band2.jpg" },
  { id: "ls-3", title: "Linux Security: Analyse", category: "linux-security", band: "Band 3", pages: 67, kb: 405,
    desc: "Logs auswerten und auf Sicherheitsvorfälle unter Linux reagieren.",
    file: "books/Linux_Security_Grundlagen/Linux_Security_Band3_Analyse.pdf", cover: "covers/linux-band3.jpg" },

  // Windows Security
  { id: "ws-1", title: "Windows Security: Grundlagen", category: "windows-security", band: "Band 1", pages: 50, kb: 343,
    desc: "Wie Windows Sicherheit umsetzt und wo du ansetzen kannst.",
    file: "books/Windows_Security_Grundlagen/Windows_Security_Band1_Grundlagen.pdf", cover: "covers/windows-band1.jpg" },
  { id: "ws-2", title: "Windows Security: Hardening", category: "windows-security", band: "Band 2", pages: 73, kb: 426,
    desc: "Windows-Clients und Server mit Bordmitteln und Active Directory absichern.",
    file: "books/Windows_Security_Grundlagen/Windows_Security_Band2_Hardening.pdf", cover: "covers/windows-band2.jpg" },
  { id: "ws-3", title: "Windows Security: Analyse", category: "windows-security", band: "Band 3", pages: 75, kb: 435,
    desc: "Ereignisprotokolle auswerten und Angriffe unter Windows nachvollziehen.",
    file: "books/Windows_Security_Grundlagen/Windows_Security_Band3_Analyse.pdf", cover: "covers/windows-band3.jpg" },

  // Server & Cloud
  { id: "sc-1", title: "Docker und Container", category: "server-cloud", band: "Band 1", pages: 568, kb: 2094, isNew: true,
    desc: "Von den Grundlagen der Containertechnologie über Docker, Images, Netzwerke und Docker Compose bis zu Sicherheit, produktivem Betrieb und Docker unter Windows.",
    file: "books/Server_Cloud/Server_Cloud_Band_01.pdf", cover: "covers/server-cloud-band1.jpg" }
];

/* ---------- Hilfsfunktionen ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const seriesById = Object.fromEntries(SERIES.map(s => [s.id, s]));
const colorVar = id => `var(--c-${id})`;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = str => String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const countIn = id => books.filter(b => b.category === id).length;
const plural = n => `${n} ${n === 1 ? "Buch" : "Bücher"}`;

function book3d(b, extraClass = "") {
  return `
    <div class="book3d ${extraClass}" style="--spine:${colorVar(b.category)}">
      <div class="book3d-inner">
        <img class="book3d-front" src="${b.cover}" alt="" loading="lazy" decoding="async" />
        <span class="book3d-spine"></span>
        <span class="book3d-back"></span>
      </div>
    </div>`;
}

/* ---------- Zustand ---------- */
let currentFilter = "all";
let searchQuery = "";
let currentView = "grid";
let visibleBooks = books.slice();
let modalIndex = -1;

/* ---------- Spendenlinks ---------- */
$$("[data-donate]").forEach(a => (a.href = PAYPAL_DONATE_URL));
$("#year").textContent = new Date().getFullYear();

/* ---------- Terminal im Hero ---------- */
function runTerminal() {
  const el = $("#terminal");
  const lines = [
    { cmd: "ls reihen/" },
    { out: SERIES.map(s => `<span style="color:${colorVar(s.id)};white-space:nowrap">${s.id}</span>`).join("  ") },
    { cmd: "ls buecher/*.pdf | wc -l" },
    { out: `<span class="o">${books.length}</span>` },
    { cmd: "grep preis lizenz.txt" },
    { out: `<span class="o">preis: 0 €, Spenden willkommen</span>` }
  ];
  const prompt = `<span class="p">$</span> `;

  if (reduceMotion) {
    el.innerHTML = lines.map(l => l.cmd ? prompt + `<span class="c">${l.cmd}</span>` : l.out).join("\n") + `\n${prompt}<span class="caret"></span>`;
    return;
  }

  let html = "";
  let li = 0;
  const caret = `<span class="caret"></span>`;

  const next = () => {
    if (li >= lines.length) { el.innerHTML = html + prompt + caret; return; }
    const line = lines[li++];
    if (line.out) {
      html += line.out + "\n";
      el.innerHTML = html + caret;
      setTimeout(next, 380);
      return;
    }
    let i = 0;
    const type = () => {
      el.innerHTML = html + prompt + `<span class="c">${line.cmd.slice(0, i)}</span>` + caret;
      if (i++ < line.cmd.length) setTimeout(type, 38 + Math.random() * 55);
      else { html += prompt + `<span class="c">${line.cmd}</span>\n`; setTimeout(next, 260); }
    };
    type();
  };
  el.innerHTML = prompt + caret;
  setTimeout(next, 1100);
}

/* ---------- 3D-Karussell ---------- */
function buildCarousel() {
  const picks = ["sc-1", "ki-p10", "nv-6", "eh-13", "ls-2", "ki-v2", "nv-9", "ws-2", "eh-3", "ki-p9", "nv-1", "eh-14", "ls-3"];
  const items = picks.map(id => books.find(b => b.id === id)).filter(Boolean);
  const step = 360 / items.length;
  const ring = document.createElement("div");
  ring.className = "carousel-ring";
  ring.innerHTML = items.map((b, i) => `
    <div class="carousel-item" style="--a:${i * step}deg; --d:${(i * -0.6).toFixed(1)}s">
      <button type="button" data-id="${b.id}" aria-label="${esc(b.title)} öffnen">${book3d(b)}</button>
    </div>`).join("");
  $("#carousel").appendChild(ring);
  ring.addEventListener("click", e => {
    const btn = e.target.closest("button[data-id]");
    if (btn) openModalById(btn.dataset.id, btn);
  });

  // Radius an Buchbreite und Anzahl anpassen
  const stage = $("#carouselStage");
  const setRadius = () => {
    const bw = $("#carousel").offsetWidth;
    const r = Math.round((bw * 1.18) / (2 * Math.tan(Math.PI / items.length)));
    stage.style.setProperty("--r", r + "px");
  };
  setRadius();
  addEventListener("resize", setRadius);

  // Neigung folgt der Maus
  if (!reduceMotion) {
    const hero = $("#hero");
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      $("#carousel").style.setProperty("--tilt-y", `${(x - .5) * 24}deg`);
      $("#carousel").style.setProperty("--tilt-x", `${-6 + (y - .5) * -14}deg`);
      hero.style.setProperty("--mx", `${x * 100}%`);
      hero.style.setProperty("--my", `${y * 100}%`);
    });
  }
}

/* ---------- Filter ---------- */
const filters = $("#filters");
const indicator = $("#filterIndicator");

function buildFilters() {
  const all = [{ id: "all", label: "Alle", n: books.length }, ...SERIES.map(s => ({ ...s, n: countIn(s.id) }))];
  filters.insertAdjacentHTML("beforeend", all.map(f => `
    <button class="filter${f.id === "all" ? " active" : ""}" type="button" data-filter="${f.id}">
      ${esc(f.label)}<span class="n">${f.n}</span>
    </button>`).join(""));
  filters.addEventListener("click", e => {
    const btn = e.target.closest(".filter");
    if (btn) setFilter(btn.dataset.filter);
  });
  requestAnimationFrame(moveIndicator);
  addEventListener("resize", moveIndicator);
  document.fonts && document.fonts.ready.then(moveIndicator);
}

function moveIndicator() {
  const active = $(".filter.active", filters);
  if (!active) return;
  indicator.style.width = active.offsetWidth + "px";
  indicator.style.transform = `translateX(${active.offsetLeft}px)`;
  indicator.style.setProperty("--fc", currentFilter === "all" ? "var(--accent)" : colorVar(currentFilter));
  // nur die Filterleiste waagerecht scrollen, nicht die ganze Seite
  const left = active.offsetLeft - (filters.clientWidth - active.offsetWidth) / 2;
  filters.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
}

function setFilter(f) {
  if (f === currentFilter) return;
  currentFilter = f;
  $$(".filter", filters).forEach(b => b.classList.toggle("active", b.dataset.filter === f));
  moveIndicator();
  withTransition(renderBooks);
}

/* ---------- Bücher anzeigen ---------- */
const grid = $("#booksGrid");

function getFiltered() {
  const q = searchQuery;
  return books.filter(b => {
    if (currentFilter !== "all" && b.category !== currentFilter) return false;
    if (!q) return true;
    const hay = `${b.title} ${b.desc} ${seriesById[b.category].label} ${b.band}`.toLowerCase();
    return q.split(/\s+/).every(w => hay.includes(w));
  });
}

function renderBooks(animate = true) {
  visibleBooks = getFiltered();
  $("#sectionTitle").textContent = currentFilter === "all" ? "Alle Bücher" : seriesById[currentFilter].label;
  $("#resultCount").textContent = searchQuery
    ? `${plural(visibleBooks.length)} zu „${searchQuery}“`
    : plural(visibleBooks.length);

  const empty = visibleBooks.length === 0;
  $("#noResults").classList.toggle("hidden", !empty);
  $("#emptyQuery").textContent = searchQuery;

  grid.innerHTML = visibleBooks.map((b, i) => `
    <button type="button" class="book-card${animate ? " reveal-card" : ""}" data-id="${b.id}"
      style="--sc:${colorVar(b.category)}; --vt:book-${b.id}; --i:${i % 12}">
      ${book3d(b)}
      <span class="book-meta">
        <span class="book-series">${esc(seriesById[b.category].label)}</span>
        <span class="book-title">${esc(b.title)}${b.isNew ? '<span class="badge-new">Neu</span>' : ""}</span>
        <span class="book-desc">${esc(b.desc)}</span>
        <span class="book-sub">${esc(b.band)}, ${b.pages} Seiten</span>
      </span>
    </button>`).join("");

  if (animate) observeCards();
}

let cardObserver;
function observeCards() {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    $$(".reveal-card", grid).forEach(c => c.classList.remove("reveal-card"));
    return;
  }
  cardObserver && cardObserver.disconnect();
  cardObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); cardObserver.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal-card", grid).forEach(c => cardObserver.observe(c));
}

// Sanfter Wechsel mit der View Transitions API (Chrome, Edge, Safari 18)
function withTransition(fn) {
  if (document.startViewTransition && !reduceMotion) {
    document.startViewTransition(() => { fn(false); });
  } else {
    fn(true);
  }
}

grid.addEventListener("click", e => {
  const card = e.target.closest(".book-card");
  if (card) openModalById(card.dataset.id, card);
});

/* ---------- Suche ---------- */
const searchInput = $("#searchInput");
if (matchMedia("(max-width: 480px)").matches) searchInput.placeholder = "Suchen";
let searchTimer;
searchInput.addEventListener("input", e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.trim().toLowerCase();
    withTransition(renderBooks);
  }, 140);
});
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") $("#regal").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  if (e.key === "Escape") { searchInput.value = ""; searchQuery = ""; withTransition(renderBooks); searchInput.blur(); }
});
$("#resetFilters").addEventListener("click", () => {
  searchInput.value = ""; searchQuery = "";
  currentFilter = "x"; setFilter("all");
});

document.addEventListener("keydown", e => {
  const typing = /input|textarea/i.test(document.activeElement.tagName);
  if (e.key === "/" && !typing && modal.hidden) { e.preventDefault(); searchInput.focus(); }
});

/* ---------- Ansicht ---------- */
$$(".view-btn").forEach(btn => btn.addEventListener("click", () => {
  if (btn.dataset.view === currentView) return;
  currentView = btn.dataset.view;
  $$(".view-btn").forEach(b => b.classList.toggle("active", b === btn));
  withTransition(() => {
    grid.classList.toggle("view-grid", currentView === "grid");
    grid.classList.toggle("view-list", currentView === "list");
    $$(".reveal-card", grid).forEach(c => c.classList.add("in"));
  });
}));

/* ---------- Reihen ---------- */
function buildSeries() {
  $("#seriesList").innerHTML = SERIES.map(s => {
    const own = books.filter(b => b.category === s.id);
    const fan = own.slice(-3);
    return `
      <button type="button" class="series-row reveal" data-filter="${s.id}" style="--sc:${colorVar(s.id)}">
        <span>
          <span class="series-name">${esc(s.label)}</span>
          <span class="series-text" style="display:block">${esc(s.text)}</span>
        </span>
        <span class="series-count">${plural(own.length)}</span>
        <span class="series-fan" aria-hidden="true">
          ${fan.map((b, i) => `<img src="${b.cover}" alt="" loading="lazy" style="--k:${i - (fan.length - 1) / 2}; z-index:${i}" />`).join("")}
        </span>
      </button>`;
  }).join("");

  $("#seriesList").addEventListener("click", e => {
    const row = e.target.closest(".series-row");
    if (!row) return;
    searchInput.value = ""; searchQuery = "";
    setFilter(row.dataset.filter);
    $("#regal").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });
}

/* ---------- Reveal für Abschnitte ---------- */
function observeReveals() {
  const els = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        en.target.style.transitionDelay = `${i * 70}ms`;
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  els.forEach(el => io.observe(el));
}

/* ---------- Modal ---------- */
const modal = $("#modal");
let lastFocus = null;

function fillModal(b) {
  const s = seriesById[b.category];
  $(".modal-panel").style.setProperty("--sc", colorVar(b.category));
  $("#modalBook").style.setProperty("--spine", colorVar(b.category));
  $("#modalCover").src = b.cover;
  $("#modalCover").alt = `Cover: ${b.title}`;
  $("#modalSeries").textContent = s.label;
  $("#modalTitle").textContent = b.title;
  $("#modalBand").textContent = b.isNew ? `${b.band}, neu erschienen` : b.band;
  $("#modalDesc").textContent = b.desc;
  $("#modalPages").textContent = b.pages;
  $("#modalSize").textContent = b.kb >= 1000 ? `${(b.kb / 1024).toFixed(1).replace(".", ",")} MB` : `${b.kb} KB`;
  $("#modalDownload").href = b.file;
  $("#modalRead").href = b.file;
  const list = visibleBooks.some(x => x.id === b.id) ? visibleBooks : books;
  modalIndex = list.findIndex(x => x.id === b.id);
  $("#modalPos").textContent = `${modalIndex + 1} von ${list.length}`;
  history.replaceState(null, "", `#buch-${b.id}`);
}

function openModalById(id, origin) {
  const b = books.find(x => x.id === id);
  if (!b) return;
  lastFocus = origin || document.activeElement;
  fillModal(b);
  modal.hidden = false;
  modal.classList.remove("closing");
  document.body.style.overflow = "hidden";
  // Showcase-Animation neu starten
  const inner = $("#modalBook .book3d-inner");
  inner.style.animation = "none"; inner.offsetHeight; inner.style.animation = "";
  $(".modal-close").focus({ preventScroll: true });
}

function stepModal(dir) {
  const list = visibleBooks.length ? visibleBooks : books;
  if (!list.length) return;
  const i = (modalIndex + dir + list.length) % list.length;
  const body = $(".modal-body");
  body.classList.remove("swap-next", "swap-prev");
  body.offsetWidth;
  body.classList.add(dir > 0 ? "swap-next" : "swap-prev");
  fillModal(list[i]);
}

function closeModal() {
  if (modal.hidden) return;
  const done = () => {
    modal.hidden = true;
    modal.classList.remove("closing");
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  };
  if (reduceMotion) return done();
  modal.classList.add("closing");
  setTimeout(done, 280);
}

$$("[data-close]", modal).forEach(el => el.addEventListener("click", closeModal));
$("#modalPrev").addEventListener("click", () => stepModal(-1));
$("#modalNext").addEventListener("click", () => stepModal(1));
document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") stepModal(1);
  if (e.key === "ArrowLeft") stepModal(-1);
  if (e.key === "Tab") {
    const f = $$("a[href], button:not([disabled])", $(".modal-panel"));
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// Wischen auf dem Handy
let touchX = null;
modal.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
modal.addEventListener("touchend", e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 60) stepModal(dx < 0 ? 1 : -1);
  touchX = null;
});

$("#modalShare").addEventListener("click", async () => {
  const url = location.href;
  try {
    if (navigator.share && matchMedia("(pointer: coarse)").matches) {
      await navigator.share({ title: $("#modalTitle").textContent, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    toast("Link kopiert");
  } catch (_) { /* abgebrochen */ }
});

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ---------- Theme ---------- */
$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  const apply = () => {
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (_) {}
  };
  if (document.startViewTransition && !reduceMotion) document.startViewTransition(apply);
  else apply();
});

/* ---------- Header und Scroll-Fortschritt ---------- */
const header = $("#header");
const progress = $("#scrollProgress");
let ticking = false;
addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = scrollY;
    header.classList.toggle("scrolled", y > 8);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    ticking = false;
  });
}, { passive: true });

/* ---------- Start ---------- */
buildFilters();
renderBooks();
buildSeries();
buildCarousel();
observeReveals();
runTerminal();

// Direktlink wie .../#buch-eh-3 öffnet das Buch
const m = location.hash.match(/^#buch-(.+)$/);
if (m) openModalById(decodeURIComponent(m[1]));
