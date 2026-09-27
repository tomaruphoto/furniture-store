const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", () => {
    navMenu.classList.remove("open");
});
