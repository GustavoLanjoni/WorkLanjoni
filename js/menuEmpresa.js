document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const openFormBtn = document.getElementById("openFormBtn");

    // Alterna as classes para abrir/fechar o menu
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Fechar o menu ao clicar no botão Publicar Nova Vaga (opcional)
    openFormBtn.addEventListener("click", function () {
        if (nav.classList.contains("active")) {
            menuToggle.classList.remove("active");
            nav.classList.remove("active");
        }
    });
});
