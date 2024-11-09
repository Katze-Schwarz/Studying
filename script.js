const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

cards.forEach(card => {
    card.addEventListener("click", () => {
        popupText.innerText = card.dataset.info;
        popup.style.display = "block";
    });
});

function closePopup() {
    popup.style.display = "none";
}
