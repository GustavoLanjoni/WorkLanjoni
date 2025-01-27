// Função para remover um campo de link
function removerItem(button) {
    button.parentElement.remove();
}

// Função para verificar o link e mostrar o ícone correspondente
function verificarLink(input) {
    const link = input.value.toLowerCase();
    const iconContainer = input.parentElement.querySelector('.icon-container');

    // Limpar o ícone antes de adicionar um novo
    iconContainer.innerHTML = '';

    if (link.includes('instagram.com')) {
        // Exemplo: adicionar ícone do Instagram
        iconContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt="Instagram" style="width: 20px; height: 20px;"/>';
    } else if (link.includes('tiktok.com')) {
        // Exemplo: adicionar ícone do TikTok
        iconContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/67/TikTok_logo_2021.svg" alt="TikTok" style="width: 20px; height: 20px;"/>';
    } else if (link.includes('facebook.com')) {
        // Exemplo: adicionar ícone do Facebook
        iconContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style="width: 20px; height: 20px;"/>';
    } else if (link.includes('twitter.com')) {
        // Exemplo: adicionar ícone do Twitter
        iconContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/LinkedIn_icon.svg" alt="LinkedIn" style="width: 20px; height: 20px;"/>';
    } else if (link.includes('linkedin.com')) {
        // Exemplo: adicionar ícone do LinkedIn
        iconContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2013.png" alt="LinkedIn" style="width: 20px; height: 20px;"/>';
    } else if (link.includes('portfolio.com')) {
        // Exemplo: adicionar ícone de Portfolio
        iconContainer.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Globe_icon.svg" alt="Portfolio" style="width: 20px; height: 20px;"/>';
    } else {
        // Se não for reconhecido, esconde o ícone
        iconContainer.style.display = 'none';
    }

    // Mostrar o ícone se houver um
    if (iconContainer.innerHTML !== '') {
        iconContainer.style.display = 'block';
    }
}
