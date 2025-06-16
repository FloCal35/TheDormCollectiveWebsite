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