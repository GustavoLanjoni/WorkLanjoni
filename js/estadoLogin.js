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
    window.location.href = "login.html"; // Redireciona para a página de login
}

// Função de cadastro
function register() {
    window.location.href = "register.html"; // Redireciona para a página de cadastro
}

// Exibe o perfil do usuário logado
function showProfile(username) {
    document.getElementById('authButtons').style.display = 'none'; // Oculta os botões de login e cadastro
    document.getElementById('userMenu').style.display = 'flex'; // Exibe o menu do usuário

    // Atualiza a foto de perfil (por padrão, vamos usar uma imagem de usuário ou iniciais)
    const profileCircle = document.querySelector('#fotoPerfilMenu');
    if (profileCircle) {
        const initials = username.split('@')[0].slice(0, 2).toUpperCase(); // Usa as primeiras 2 letras do nome ou e-mail
        profileCircle.alt = "Foto de Perfil - " + initials; // Define um texto alternativo
        profileCircle.src = "img/usuarioPadrao.png"; // Aqui você pode configurar um link dinâmico para a imagem do perfil, se necessário
    }
}

// Exibe os botões de autenticação
function showAuthButtons() {
    document.getElementById('authButtons').style.display = 'flex'; // Exibe os botões de login e cadastro
    document.getElementById('userMenu').style.display = 'none'; // Oculta o menu do usuário
}

// Função de logout
function logout() {
    localStorage.removeItem('loggedInUser'); // Remove o estado do usuário logado
    showAuthButtons(); // Exibe os botões de login e cadastro novamente
}
