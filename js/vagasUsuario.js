// Carregar as vagas do localStorage
const vagasUsuario = JSON.parse(localStorage.getItem('vagasUsuario')) || [];

const vagasContainer = document.getElementById('vagasList'); // Alterei para o ID correto

if (vagasUsuario.length === 0) {
    vagasContainer.innerHTML = '<p>Não há vagas disponíveis no momento.</p>';
} else {
    vagasUsuario.forEach((vaga, index) => {
        const vagaElement = document.createElement('div');
        vagaElement.classList.add('vaga-card'); // Adiciona classe para estilização
        
        // Criar HTML da vaga resumida com botão
        vagaElement.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <p><strong>Salário:</strong> R$ ${vaga.salario}</p>
            <button class="ver-detalhes" onclick="verDetalhes(${index})">Ver Detalhes</button>
        `;

        vagasContainer.appendChild(vagaElement);
    });
}

// Função para redirecionar para a página de detalhes
function verDetalhes(id) {
    window.location.href = `detalhes.html?id=${id}`;
}
