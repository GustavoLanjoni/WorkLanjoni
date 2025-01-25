// Carregar as vagas do localStorage
const vagasUsuario = JSON.parse(localStorage.getItem('vagasUsuario')) || [];

const vagasContainer = document.getElementById('vagasContainer');
if (vagasUsuario.length === 0) {
    vagasContainer.innerHTML = '<p>Não há vagas disponíveis no momento.</p>';
} else {
    vagasUsuario.forEach(vaga => {
        const vagaElement = document.createElement('div');
        vagaElement.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Descrição:</strong> ${vaga.descricao}</p>
            <p><strong>Contato:</strong> ${vaga.contato}</p>
            <p><strong>Benefício:</strong> ${vaga.beneficio}</p>
            <p><strong>Salário:</strong> R$ ${vaga.salario}</p>
            <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <p><strong>Carga Horária:</strong> ${vaga.cargaHoraria}</p>
            <p><strong>Tipo de Contratação:</strong> ${vaga.tipoContratacao}</p>
            <p><strong>Tipo de Vaga:</strong> ${vaga.tipoVaga}</p>
        `;
        vagasContainer.appendChild(vagaElement);
    });
}