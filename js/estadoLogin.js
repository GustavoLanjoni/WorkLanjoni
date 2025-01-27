// Verifica o estado de login ao carregar a página
window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser'); // Verifica o usuário logado
    if (loggedInUser) {
        showProfile(loggedInUser); // Exibe o perfil do usuário
    } else {
        showAuthButtons(); // Exibe os botões de autenticação
    }
};

// Função de login
function login() {
    window.location.href = "telaUsuario.html"; // Redireciona para a página de login
}

// Função de cadastro
function register() {
    window.location.href = "register.html"; // Redireciona para a página de cadastro
}

// Exibe o perfil do usuário logado
function showProfile(username) {
    document.getElementById('auth-buttons').style.display = 'none'; // Oculta os botões de login e cadastro
    document.getElementById('profile-icon').style.display = 'flex'; // Exibe a bola de perfil

    // Atualiza a bola de perfil com as iniciais do usuário
    const profileCircle = document.querySelector('.profile-circle');
    if (profileCircle) {
        // Calcula as iniciais do nome (caso seja um nome completo ou apenas e-mail)
        const initials = username.split('@')[0].slice(0, 2).toUpperCase(); // Usa as primeiras 2 letras do nome ou e-mail
        profileCircle.textContent = initials; // Exibe as iniciais na bola
    }
}

// Exibe os botões de autenticação
function showAuthButtons() {
    document.getElementById('auth-buttons').style.display = 'flex'; // Exibe os botões de login e cadastro
    document.getElementById('profile-icon').style.display = 'none'; // Oculta a bola de perfil
}

// Função de logout
function logout() {
    localStorage.removeItem('loggedInUser'); // Remove o estado do usuário logado
    showAuthButtons(); // Exibe os botões de login e cadastro novamente
}
