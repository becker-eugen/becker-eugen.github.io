// ——— PayPal Spenden-Link ———
// Hier deine PayPal.me-Adresse oder den kompletten Donate-Link eintragen:
// Beispiel: "https://paypal.me/DeinName"
// oder:     "https://www.paypal.com/donate/?hosted_button_id=XXXXXXXX"
const PAYPAL_DONATE_URL = "https://paypal.me/eugen107";

const books = [
  // KI Praxis
  {
    id: "ki-p1",
    title: "KI im produktiven Alltag",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 1",
    desc: "Wie du KI praktisch und effizient in deinen Arbeitsalltag integrierst.",
    file: "books/KI_Praxis/KI_PRAXIS_Band1_KI_im_produktiven_Alltag.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band1_KI_im_produktiven_Alltag.jpg"
  },
  {
    id: "ki-p2",
    title: "Recherche und Wissensmanagement",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 2",
    desc: "Mit KI schneller recherchieren, Wissen strukturieren und behalten.",
    file: "books/KI_Praxis/KI_PRAXIS_Band2_Recherche_und_Wissensmanagement.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band2_Recherche_und_Wissensmanagement.jpg"
  },
  {
    id: "ki-p3",
    title: "Automatisierung und KI-Agenten",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 3",
    desc: "Prozesse automatisieren und eigene KI-Agenten aufbauen.",
    file: "books/KI_Praxis/KI_PRAXIS_Band3_Automatisierung_und_KI-Agenten.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band3_Automatisierung_und_KI-Agenten.jpg"
  },
  {
    id: "ki-p4",
    title: "Lokale KI und eigene KI-Systeme",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 4",
    desc: "KI lokal betreiben – unabhängig und datenschutzfreundlich.",
    file: "books/KI_Praxis/KI_PRAXIS_Band4_Lokale_KI_und_eigene_KI-Systeme.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band4_Lokale_KI_und_eigene_KI-Systeme.jpg"
  },
  {
    id: "ki-p5",
    title: "Datenanalyse mit KI",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 5",
    desc: "Daten verstehen, auswerten und visualisieren mit KI-Unterstützung.",
    file: "books/KI_Praxis/KI_PRAXIS_Band5_Datenanalyse_mit_KI.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band5_Datenanalyse_mit_KI.jpg"
  },
  {
    id: "ki-p6",
    title: "Dokumente, Präsentationen & Fachbücher",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 6",
    desc: "Professionelle Dokumente und Bücher mit KI erstellen.",
    file: "books/KI_Praxis/KI_PRAXIS_Band6_Dokumente_Praesentationen_Fachbuecher.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band6_Dokumente_Praesentationen_Fachbuecher.jpg"
  },
  {
    id: "ki-p7",
    title: "Lernen mit KI und KI-Tutor",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 7",
    desc: "Effektiver lernen mit personalisierten KI-Tutoren.",
    file: "books/KI_Praxis/KI_PRAXIS_Band7_Lernen_mit_KI_und_KI-Tutor.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band7_Lernen_mit_KI_und_KI-Tutor.jpg"
  },
  {
    id: "ki-p8",
    title: "Sicherheit und verantwortungsvolle KI-Nutzung",
    category: "ki-praxis",
    categoryLabel: "KI Praxis",
    band: "Band 8",
    desc: "Risiken erkennen und KI verantwortungsvoll einsetzen.",
    file: "books/KI_Praxis/KI_PRAXIS_Band8_Sicherheit_und_verantwortungsvolle_KI-Nutzung.pdf",
    cover: "covers/ki-p-KI_PRAXIS_Band8_Sicherheit_und_verantwortungsvolle_KI-Nutzung.jpg"
  },

  // KI Verstehen
  {
    id: "ki-v1",
    title: "Der Einfluss von KI auf den Menschen",
    category: "ki-verstehen",
    categoryLabel: "KI Verstehen",
    band: "Forschungsarbeit",
    desc: "Wissenschaftliche Betrachtung der Auswirkungen von KI auf Gesellschaft und Individuum.",
    file: "books/KI_Verstehen/Forschungsarbeit_Der_Einfluss_von_KI_auf_den_Menschen_Taschenbuch.pdf",
    cover: "covers/ki-v-Forschungsarbeit_Der_Einfluss_von_KI_auf_den_Menschen_Taschenbuch.jpg"
  },
  {
    id: "ki-v2",
    title: "Prompting Handbuch",
    category: "ki-verstehen",
    categoryLabel: "KI Verstehen",
    band: "Handbuch",
    desc: "Die Kunst des Promptings – von Grundlagen bis fortgeschrittenen Techniken.",
    file: "books/KI_Verstehen/Prompting_Handbuch.pdf",
    cover: "covers/ki-v-Prompting_Handbuch.jpg"
  },
  {
    id: "ki-v3",
    title: "Vibe Coding – Linux",
    category: "ki-verstehen",
    categoryLabel: "KI Verstehen",
    band: "Linux",
    desc: "Mit KI und dem richtigen Vibe produktiv unter Linux programmieren.",
    file: "books/KI_Verstehen/Vibe_Coding_Linux.pdf",
    cover: "covers/ki-v-Vibe_Coding_Linux.jpg"
  },
  {
    id: "ki-v4",
    title: "Vibe Coding – Windows",
    category: "ki-verstehen",
    categoryLabel: "KI Verstehen",
    band: "Windows",
    desc: "Mit KI und dem richtigen Vibe produktiv unter Windows programmieren.",
    file: "books/KI_Verstehen/Vibe_Coding_Windows.pdf",
    cover: "covers/ki-v-Vibe_Coding_Windows.jpg"
  },

  // Ethical Hacking
  {
    id: "eh-1",
    title: "White Hat Credo",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "01",
    desc: "Ethik, Haltung und Grundsätze des White-Hat-Hackers.",
    file: "books/Ethical_Hacking/1_White_Hat_Credo.pdf",
    cover: "covers/eh-1_White_Hat_Credo.jpg"
  },
  {
    id: "eh-2",
    title: "Ethical Hacking",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "02",
    desc: "Grundlagen und Methodik des ethischen Hackings.",
    file: "books/Ethical_Hacking/2_Ethical_Hacking.pdf",
    cover: "covers/eh-2_Ethical_Hacking.jpg"
  },
  {
    id: "eh-3",
    title: "Nmap Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "03",
    desc: "Netzwerk-Scanning und Reconnaissance mit Nmap.",
    file: "books/Ethical_Hacking/3_Nmap_Handbuch.pdf",
    cover: "covers/eh-3_Nmap_Handbuch.jpg"
  },
  {
    id: "eh-4",
    title: "Wireshark Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "04",
    desc: "Paketanalyse und Netzwerkforensik mit Wireshark.",
    file: "books/Ethical_Hacking/4_Wireshark_Handbuch.pdf",
    cover: "covers/eh-4_Wireshark_Handbuch.jpg"
  },
  {
    id: "eh-5",
    title: "hping3 Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "05",
    desc: "Packet Crafting und Netzwerk-Tests mit hping3.",
    file: "books/Ethical_Hacking/5_hping3_Handbuch.pdf",
    cover: "covers/eh-5_hping3_Handbuch.jpg"
  },
  {
    id: "eh-6",
    title: "OWASP Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "06",
    desc: "Web-Anwendungssicherheit nach OWASP Top 10.",
    file: "books/Ethical_Hacking/6_OWASP_Handbuch.pdf",
    cover: "covers/eh-6_OWASP_Handbuch.jpg"
  },
  {
    id: "eh-7",
    title: "Burp Suite Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "07",
    desc: "Web-Pentesting mit der Burp Suite.",
    file: "books/Ethical_Hacking/7_Burp_Suite_Handbuch.pdf",
    cover: "covers/eh-7_Burp_Suite_Handbuch.jpg"
  },
  {
    id: "eh-8",
    title: "Metasploit Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "08",
    desc: "Exploitation Framework Metasploit in der Praxis.",
    file: "books/Ethical_Hacking/8_Metasploit_Handbuch.pdf",
    cover: "covers/eh-8_Metasploit_Handbuch.jpg"
  },
  {
    id: "eh-9",
    title: "Linux PrivEsc Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "09",
    desc: "Privilege Escalation Techniken unter Linux.",
    file: "books/Ethical_Hacking/9_Linux_PrivEsc_Handbuch.pdf",
    cover: "covers/eh-9_Linux_PrivEsc_Handbuch.jpg"
  },
  {
    id: "eh-10",
    title: "John the Ripper Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "10",
    desc: "Passwort-Cracking mit John the Ripper.",
    file: "books/Ethical_Hacking/10_John_the_Ripper_Handbuch.pdf",
    cover: "covers/eh-10_John_the_Ripper_Handbuch.jpg"
  },
  {
    id: "eh-11",
    title: "Hashcat Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "11",
    desc: "Hochperformantes Passwort-Cracking mit Hashcat.",
    file: "books/Ethical_Hacking/11_Hashcat_Handbuch.pdf",
    cover: "covers/eh-11_Hashcat_Handbuch.jpg"
  },
  {
    id: "eh-12",
    title: "Blue Team Handbuch",
    category: "ethical-hacking",
    categoryLabel: "Ethical Hacking",
    band: "12",
    desc: "Verteidigung, Detection und Response aus Blue-Team-Sicht.",
    file: "books/Ethical_Hacking/12_Blue_Team_Handbuch.pdf",
    cover: "covers/eh-12_Blue_Team_Handbuch.jpg"
  },

  // Linux Security
  {
    id: "ls-1",
    title: "Linux Security – Grundlagen",
    category: "linux-security",
    categoryLabel: "Linux Security",
    band: "Band 1",
    desc: "Sicherheitsgrundlagen und Best Practices für Linux-Systeme.",
    file: "books/Linux_Security_Grundlagen/Linux_Security_Band1_Grundlagen.pdf",
    cover: "covers/linux-band1.jpg"
  },
  {
    id: "ls-2",
    title: "Linux Security – Hardening",
    category: "linux-security",
    categoryLabel: "Linux Security",
    band: "Band 2",
    desc: "System-Hardening: Absichern von Linux-Servern und Workstations.",
    file: "books/Linux_Security_Grundlagen/Linux_Security_Band2_Hardening.pdf",
    cover: "covers/linux-band2.jpg"
  },
  {
    id: "ls-3",
    title: "Linux Security – Analyse",
    category: "linux-security",
    categoryLabel: "Linux Security",
    band: "Band 3",
    desc: "Sicherheitsanalyse, Forensik und Incident Response unter Linux.",
    file: "books/Linux_Security_Grundlagen/Linux_Security_Band3_Analyse.pdf",
    cover: "covers/linux-band3.jpg"
  },

  // Windows Security
  {
    id: "ws-1",
    title: "Windows Security – Grundlagen",
    category: "windows-security",
    categoryLabel: "Windows Security",
    band: "Band 1",
    desc: "Sicherheitsgrundlagen und Best Practices für Windows-Systeme.",
    file: "books/Windows_Security_Grundlagen/Windows_Security_Band1_Grundlagen.pdf",
    cover: "covers/windows-band1.jpg"
  },
  {
    id: "ws-2",
    title: "Windows Security – Hardening",
    category: "windows-security",
    categoryLabel: "Windows Security",
    band: "Band 2",
    desc: "System-Hardening: Absichern von Windows-Servern und Clients.",
    file: "books/Windows_Security_Grundlagen/Windows_Security_Band2_Hardening.pdf",
    cover: "covers/windows-band2.jpg"
  },
  {
    id: "ws-3",
    title: "Windows Security – Analyse",
    category: "windows-security",
    categoryLabel: "Windows Security",
    band: "Band 3",
    desc: "Sicherheitsanalyse, Forensik und Incident Response unter Windows.",
    file: "books/Windows_Security_Grundlagen/Windows_Security_Band3_Analyse.pdf",
    cover: "covers/windows-band3.jpg"
  },

  // Netzwerk verstehen
  {
    id: "nw-1",
    title: "Grundlagen der Netzwerktechnik",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 1",
    desc: "Ein verständlicher Einstieg in die Welt der Computernetzwerke.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band1.pdf",
    cover: "covers/netzwerk-band1.jpg"
  },
  {
    id: "nw-2",
    title: "IP – Internet Protocol",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 2",
    desc: "IPv4, IPv6, Adressierung, Subnetting und Routing verständlich erklärt.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band2.pdf",
    cover: "covers/netzwerk-band2.jpg"
  },
  {
    id: "nw-3",
    title: "TCP und UDP",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 3",
    desc: "Verbindungen, Datenübertragung, Ports und Netzwerkkommunikation verständlich erklärt.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band3.pdf",
    cover: "covers/netzwerk-band3.jpg"
  },
  {
    id: "nw-4",
    title: "Netzwerkprotokolle in der Praxis",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 4",
    desc: "DNS, DHCP, HTTP, HTTPS, SSH und weitere wichtige Netzwerkdienste verstehen.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band4.pdf",
    cover: "covers/netzwerk-band4.jpg"
  },
  {
    id: "nw-5",
    title: "Routing, Switching und Netzwerkarchitektur",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 5",
    desc: "Unternehmensnetzwerke planen, verstehen, aufbauen und verwalten.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band5.pdf",
    cover: "covers/netzwerk-band5.jpg"
  },
  {
    id: "nw-6",
    title: "Netzwerkanalyse und Troubleshooting",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 6",
    desc: "Netzwerkverkehr analysieren, Fehler erkennen und Probleme systematisch lösen.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band6.pdf",
    cover: "covers/netzwerk-band6.jpg"
  },
  {
    id: "nw-7",
    title: "WLAN verstehen",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 7",
    desc: "Funktechnik, Standards, Sicherheit und Planung von WLAN-Netzen.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band7.pdf",
    cover: "covers/netzwerk-band7.jpg"
  },
  {
    id: "nw-8",
    title: "Netzwerksicherheit",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 8",
    desc: "Firewalls, VLANs, VPN und Zero Trust.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band8.pdf",
    cover: "covers/netzwerk-band8.jpg"
  },
  {
    id: "nw-9",
    title: "Netzwerke im Homelab",
    category: "netzwerk",
    categoryLabel: "Netzwerk verstehen",
    band: "Band 9",
    desc: "Das eigene Netzwerk planen, aufbauen und betreiben.",
    file: "books/Netzwerk_verstehen/Netzwerk_verstehen_Band9.pdf",
    cover: "covers/netzwerk-band9.jpg"
  }
];

// ——— State ———
let currentFilter = "all";
let searchQuery = "";
let currentView = "grid";

// ——— DOM ———
const grid = document.getElementById("booksGrid");
const noResults = document.getElementById("noResults");
const sectionTitle = document.getElementById("sectionTitle");
const resultCount = document.getElementById("resultCount");
const bookCountEl = document.getElementById("bookCount");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const catPills = document.querySelectorAll(".cat-pill");
const seriesCards = document.querySelectorAll(".series-card");
const viewBtns = document.querySelectorAll(".view-btn");
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const resetBtn = document.getElementById("resetFilters");

// ——— Init ———
bookCountEl.textContent = books.length;
initTheme();
renderBooks();
setupDonateLinks();

function setupDonateLinks() {
  const url = PAYPAL_DONATE_URL;
  ["donateBtnTop", "donateBtnHero", "donateBtnFooter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

// ——— Events ———
catPills.forEach(btn => {
  btn.addEventListener("click", () => setFilter(btn.dataset.filter));
});

seriesCards.forEach(card => {
  card.addEventListener("click", () => {
    setFilter(card.dataset.filter);
    document.querySelector(".shelf-section").scrollIntoView({ behavior: "smooth" });
  });
});

searchInput.addEventListener("input", e => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderBooks();
});

viewBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    viewBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentView = btn.dataset.view;
    grid.classList.toggle("view-grid", currentView === "grid");
    grid.classList.toggle("view-list", currentView === "list");
  });
});

themeToggle.addEventListener("click", toggleTheme);
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    setFilter("all");
  });
}

// ——— Functions ———
function setFilter(filter) {
  currentFilter = filter;
  catPills.forEach(b => b.classList.toggle("active", b.dataset.filter === filter));
  renderBooks();
}

function getFilteredBooks() {
  return books.filter(b => {
    const matchesCat = currentFilter === "all" || b.category === currentFilter;
    const q = searchQuery;
    const matchesSearch =
      !q ||
      b.title.toLowerCase().includes(q) ||
      b.desc.toLowerCase().includes(q) ||
      b.categoryLabel.toLowerCase().includes(q) ||
      b.band.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });
}

function renderBooks() {
  const filtered = getFilteredBooks();

  const titles = {
    all: "Alle Titel",
    "ki-praxis": "KI Praxis",
    "ki-verstehen": "KI Verstehen",
    "ethical-hacking": "Ethical Hacking",
    "linux-security": "Linux Security",
    "windows-security": "Windows Security",
    netzwerk: "Netzwerk verstehen"
  };
  sectionTitle.textContent = titles[currentFilter] || "Titel";
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "Buch" : "Bücher"}`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");
  grid.innerHTML = filtered
    .map(
      b => `
    <button type="button" class="book-card" data-id="${b.id}" aria-label="${escapeHtml(b.title)}">
      <div class="cover-frame">
        <img class="cover-img" src="${b.cover}" alt="Cover: ${escapeHtml(b.title)}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="cover-placeholder" style="display:none">${escapeHtml(b.title.charAt(0))}</div>
      </div>
      <div class="book-info">
        <span class="book-series">${escapeHtml(b.categoryLabel)}</span>
        <span class="book-title">${escapeHtml(b.title)}</span>
        <span class="book-band">${escapeHtml(b.band)}</span>
      </div>
    </button>
  `
    )
    .join("");

  grid.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", () => {
      const book = books.find(x => x.id === card.dataset.id);
      if (book) openModal(book);
    });
  });
}

function openModal(book) {
  document.getElementById("modalCover").src = book.cover;
  document.getElementById("modalCover").alt = "Cover: " + book.title;
  document.getElementById("modalBadge").textContent = book.categoryLabel;
  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalBand").textContent = book.band;
  document.getElementById("modalDesc").textContent = book.desc;
  const dl = document.getElementById("modalDownload");
  dl.href = book.file;
  dl.setAttribute("download", "");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.querySelector(".theme-icon").textContent = "☀️";
  }
}

function toggleTheme() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    themeToggle.querySelector(".theme-icon").textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeToggle.querySelector(".theme-icon").textContent = "☀️";
  }
}
