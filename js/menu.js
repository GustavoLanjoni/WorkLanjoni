// Seleção de elementos
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const openFormBtn = document.getElementById('openFormBtn');

// Alternância do menu em dispositivos móveis
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Adiciona/Remove a classe 'active' no botão
    nav.classList.toggle('active'); // Mostra/Esconde o menu
});

// Exemplo de funcionalidade para o botão "Publicar Nova Vaga"
openFormBtn.addEventListener('click', () => {
    alert('Botão "Publicar Nova Vaga" clicado!'); // Ação ao clicar no botão
    // Você pode substituir o alert por uma funcionalidade real, como abrir um formulário
});
