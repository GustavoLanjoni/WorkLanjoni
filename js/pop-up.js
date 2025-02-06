// Função para abrir o pop-up
function openPopup() {
    document.getElementById('loginSignupPopup').classList.add('show');
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById('loginSignupPopup').classList.remove('show');
}

// Verifica se o usuário está logado
function isUserLoggedIn() {
    return localStorage.getItem('userLoggedIn') === 'true'; // Ou utilize sessionStorage
}

// Se o usuário NÃO estiver logado, exibe o pop-up no primeiro clique
if (!isUserLoggedIn()) {
    document.addEventListener('click', function showPopupOnce() {
        openPopup();
        document.removeEventListener('click', showPopupOnce);
    });
}
