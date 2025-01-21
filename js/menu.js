document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do menu
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Adiciona o evento de clique para alternar o menu
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("menu-open"); // Adiciona ou remove a classe para abrir/fechar o menu
    });

    // Fecha o menu quando um link ou botão for clicado
    nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
            nav.classList.remove("menu-open"); // Fecha o menu
        }
    });
});
