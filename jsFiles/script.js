//manages news popup on homescreen
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
    popup.classList.add("active");
    openBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    openBtn.classList.remove("active");
});


  // Set your release date here (YYYY-MM-DD HH:MM:SS)
const releaseDate = new Date("2025-07-25T23:00:00").getTime();

const countdown = setInterval(() => {
const now = new Date().getTime();
const distance = releaseDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").textContent = days.toString().padStart(2, '0');
document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Out now!";
}
}, 1000);