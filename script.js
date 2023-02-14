const toggleMenu = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");


toggleMenu.addEventListener("click", () => {
    toggleMenu.querySelector("i").classList.toggle("fa-x");

    showcase.classList.toggle("active");
})
