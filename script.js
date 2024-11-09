document.getElementById("exploreButton").addEventListener("click", () => {
    const introSection = document.getElementById("intro");
    introSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("exploreButton").click();
    }
});
