// Verifica o estado de login ao carregar a página
window.onload = function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showProfile();
    } else {
        showAuthButtons();
    }
};

// Função para simular login
function login() {
    localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado
    showProfile(); // Exibe o perfil
}

// Função para simular cadastro
function register() {
    localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado
    showProfile(); // Exibe o perfil
}

// Função para fazer logout
function logout() {
    localStorage.removeItem('isLoggedIn'); // Remove o estado de login
    showAuthButtons(); // Exibe os botões de autenticação
}

// Exibe o perfil e oculta os botões de login/cadastro
function showProfile() {
    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('profile-icon').style.display = 'flex';
}

// Exibe os botões de login/cadastro e oculta o perfil
function showAuthButtons() {
    document.getElementById('auth-buttons').style.display = 'flex';
    document.getElementById('profile-icon').style.display = 'none';
}
