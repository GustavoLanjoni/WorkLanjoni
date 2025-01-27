// Função para abrir o pop-up
function openPopup() {
    document.getElementById('loginSignupPopup').style.display = 'flex';
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById('loginSignupPopup').style.display = 'none';
    // Marca que o pop-up foi mostrado
    localStorage.setItem('popupShown', 'true');
}

// Verifica se o pop-up já foi mostrado
if (!localStorage.getItem('popupShown')) {
    // Exibe o pop-up quando o usuário clica em qualquer lugar pela primeira vez
    document.addEventListener('click', function (event) {
        // Evita que o pop-up seja mostrado se o clique for dentro dele
        if (!document.getElementById('loginSignupPopup').contains(event.target)) {
            openPopup();
            // Remover o ouvinte de evento após o primeiro clique para evitar múltiplos pop-ups
            document.removeEventListener('click', arguments.callee);
        }
    });
}
