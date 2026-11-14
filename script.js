// Password gate: client-side greeting gate, not strong security.
const SITE_PASSWORD = "jeklovegracesomuch";
const passwordGate = document.getElementById("passwordGate");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("sitePassword");
const passwordError = document.getElementById("passwordError");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value === SITE_PASSWORD) {
    passwordError.textContent = "";
    passwordGate.classList.add("unlocked");
    document.body.style.overflow = "";
  } else {
    passwordError.textContent = "Hmm, password-nya belum tepat. Coba sekali lagi, Honey ♡";
    passwordInput.value = "";
    passwordInput.focus();
  }
});
document.body.style.overflow = "hidden";

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause our song";
      musicToggle.setAttribute("aria-label", "Jeda musik");
    } catch (error) {
      musicLabel.textContent = "Add your-song.mp3";
      alert("Tambahkan file musik bernama our-song.mp3 ke folder assets/music, lalu coba lagi.");
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play our song";
    musicToggle.setAttribute("aria-label", "Putar musik");
  }
});

document.getElementById("surpriseButton").addEventListener("click", () => {
  const message = document.getElementById("surpriseMessage");
  message.hidden = !message.hidden;
  document.getElementById("surpriseButton").textContent = message.hidden
    ? "Open your surprise ♡" : "Close surprise";
  document.getElementById("giftIcon").textContent = message.hidden ? "🎁" : "💝";
});

document.getElementById("letterButton").addEventListener("click", () => {
  const letter = document.getElementById("letterContent");
  const button = document.getElementById("letterButton");
  letter.hidden = !letter.hidden;
  button.setAttribute("aria-expanded", String(!letter.hidden));
  button.querySelector(".envelope-label").textContent = letter.hidden
    ? "Tap to open your letter" : "Tap to close your letter";
  button.querySelector(".envelope-heart").textContent = letter.hidden ? "♡" : "♥";
});

// Tanggal mulai hubungan: 12 November 2026 (format bulan dimulai dari 0).
const relationshipStart = new Date(2026, 10, 12);
const today = new Date();
today.setHours(0, 0, 0, 0);
const start = new Date(relationshipStart);
start.setHours(0, 0, 0, 0);
const days = Math.floor((today - start) / (1000 * 60 * 60 * 24));
const counter = document.getElementById("dayCounter");

if (days < 0) {
  counter.textContent = "Counting down to our beginning ♡";
} else if (days === 0) {
  counter.textContent = "Our story started today ♡";
} else {
  counter.textContent = `${days} ${days === 1 ? "beautiful day" : "beautiful days"} together ♡`;
}
