const formInputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
let currentInputIndex = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        currentInputIndex = (currentInputIndex + 1) % formInputs.length;
        formInputs[currentInputIndex].focus();
    }
});
