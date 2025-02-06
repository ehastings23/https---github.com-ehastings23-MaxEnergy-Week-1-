document.querySelectorAll(".question button").forEach((button) => {
    button.addEventListener("click", () => {
        const faq = button.nextElementSibling;
        const icon = button.querySelector(".d-arrow");

        faq.classList.toggle("show");
        icon.classList.toggle("rotate");
    });
});
