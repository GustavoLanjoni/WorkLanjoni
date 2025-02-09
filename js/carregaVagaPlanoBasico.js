document.addEventListener('DOMContentLoaded', () => {
    // Recupera as vagas do localStorage
    const vagasPublicadas = JSON.parse(localStorage.getItem('planoBasico')) || [];

    // Adiciona log para verificar as vagas carregadas
    console.log("Vagas carregadas:", vagasPublicadas);

    // Função para exibir as vagas na página
    exibirVagas(vagasPublicadas);
});

// Função para exibir as vagas publicadas
function exibirVagas(vagas) {
    const vagaListDiv = document.getElementById('vagalists'); // Div onde as vagas serão exibidas

    if (!vagaListDiv) {
        console.error("Elemento com ID 'vagalists' não encontrado no HTML.");
        return;
    }

    // Limpa a lista antes de reexibir
    vagaListDiv.innerHTML = '';

    if (vagas.length === 0) {
        vagaListDiv.innerHTML = "<p>Não há vagas publicadas no momento.</p>";
        return;
    }

    // Loop para adicionar cada vaga à lista
    vagas.forEach(vaga => {
        const vagaDiv = document.createElement('div');
        vagaDiv.classList.add('vaga');

        // Verifica se a data de publicação existe antes de exibir
        const dataPublicacao = vaga.dataPublicacao ? new Date(vaga.dataPublicacao).toLocaleDateString() : "Data não disponível";

        // Verifica se os requisitos são um array e formata a exibição
        const requisitos = Array.isArray(vaga.requisitos) && vaga.requisitos.length > 0
            ? vaga.requisitos.join(", ")
            : "Não especificado";

        // Adiciona as informações da vaga
        vagaDiv.innerHTML = `
    <h3>${vaga.nome}</h3>
    <p><strong>Descrição:</strong> ${vaga.descricao}</p>
    <p><strong>Contato:</strong> ${vaga.contato}</p>
    <p><strong>Benefícios:</strong> ${vaga.beneficio}</p>
    <p><strong>Salário:</strong> ${vaga.salario}</p>
    <p><strong>Requisitos:</strong> ${requisitos}</p>
    <p><strong>Local:</strong> ${vaga.local}</p>
    <p><strong>Carga Horária:</strong> ${vaga.cargaHoraria}</p>
    <p><strong>Tipo de Contratação:</strong> ${vaga.tipoContratacao}</p>
    <p><strong>Tipo de Vaga:</strong> ${vaga.tipoVaga}</p>
    <p><strong>Data de Publicação:</strong> ${dataPublicacao}</p>
    <button onclick="abrirDetalhes('${vaga.id}')">Ver Detalhes</button>
    <hr>
`;

        // Adiciona a vaga à div #vagalists
        vagaListDiv.appendChild(vagaDiv);
    });
}

function abrirDetalhes(vagaId) {
    console.log("ID da vaga:", vagaId);  // Verifique se o ID está sendo passado corretamente
    if (vagaId) {
        // Garantir que o parâmetro 'id' seja passado corretamente na URL
        window.location.href = `detalhes.html?id=${vagaId}`;
    } else {
        console.error("Vaga ID não encontrado.");
    }
}