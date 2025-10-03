function updateClock() {
  const now = new Date();
  let h = String(now.getHours()).padStart(2, '0');
  let m = String(now.getMinutes()).padStart(2, '0');
  let s = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}

// Panggil pertama kali biar langsung muncul
updateClock();

// Update setiap 1 detik
setInterval(updateClock, 1000);
