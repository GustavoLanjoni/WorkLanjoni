// Seleção de elementos
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const openFormBtn = document.getElementById('openFormBtn');

// Alternância do menu em dispositivos móveis
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Exemplo de funcionalidade para o botão "Publicar Nova Vaga"
if (openFormBtn) {
    openFormBtn.addEventListener('click', () => {
        alert('Botão "Publicar Nova Vaga" clicado!');
        // Implementar funcionalidade real aqui
    });
}
