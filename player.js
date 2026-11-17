/* Minimaler Hintergrundmusik-Player.
   Neue Titel: einfach Dateinamen in TRACKS ergänzen und die MP3 in /music hochladen. */
(function () {
  var TRACKS = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3"];
  var DIR = "music/";

  var el = document.createElement("div");
  el.className = "mp";
  el.setAttribute("role", "region");
  el.setAttribute("aria-label", "Hintergrundmusik");
  el.innerHTML =
    '<button class="mp-btn mp-play" type="button" aria-label="Musik abspielen">' +
      '<svg class="i-play" viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg>' +
      '<svg class="i-pause" viewBox="0 0 24 24"><rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/></svg>' +
    '</button>' +
    '<span class="mp-info"><span class="mp-eq" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<span class="mp-track"></span><span class="mp-time"></span></span>' +
    '<button class="mp-btn mp-next" type="button" aria-label="Nächster Titel">' +
      '<svg viewBox="0 0 24 24"><path d="M6 5l9 7-9 7zM18 5v14"/></svg></button>' +
    '<button class="mp-btn mp-mute" type="button" aria-label="Stumm schalten">' +
      '<svg class="i-on" viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4zM16.5 8.5a5 5 0 0 1 0 7"/></svg>' +
      '<svg class="i-off" viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4zM17 9l5 6M22 9l-5 6"/></svg></button>' +
    '<div class="mp-bar" aria-hidden="true"><span></span></div>';
  document.body.appendChild(el);

  var audio = new Audio();
  audio.preload = "none";
  audio.volume = 0.5;

  var $ = function (s) { return el.querySelector(s); };
  var playBtn = $(".mp-play"), trackEl = $(".mp-track"), timeEl = $(".mp-time"), fill = $(".mp-bar span");
  var i = 0;

  function load(n) {
    i = (n + TRACKS.length) % TRACKS.length;
    audio.src = DIR + TRACKS[i];
    trackEl.textContent = (i + 1) + "/" + TRACKS.length;
    fill.style.width = "0";
    timeEl.textContent = "";
  }
  function fmt(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }

  playBtn.addEventListener("click", function () {
    if (audio.paused) audio.play().catch(function () {}); else audio.pause();
  });
  $(".mp-next").addEventListener("click", function () {
    var wasPlaying = !audio.paused;
    load(i + 1);
    if (wasPlaying) audio.play().catch(function () {});
  });
  $(".mp-mute").addEventListener("click", function () {
    audio.muted = !audio.muted;
    el.classList.toggle("muted", audio.muted);
  });
  $(".mp-bar").addEventListener("click", function (e) {
    if (!audio.duration) return;
    var r = this.getBoundingClientRect();
    audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
  });

  audio.addEventListener("play", function () {
    el.classList.add("playing"); playBtn.setAttribute("aria-label", "Musik pausieren");
  });
  audio.addEventListener("pause", function () {
    el.classList.remove("playing"); playBtn.setAttribute("aria-label", "Musik abspielen");
  });
  audio.addEventListener("timeupdate", function () {
    if (!audio.duration) return;
    fill.style.width = (audio.currentTime / audio.duration * 100) + "%";
    timeEl.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener("ended", function () { load(i + 1); audio.play().catch(function () {}); });

  load(Math.floor(Math.random() * TRACKS.length));
})();
