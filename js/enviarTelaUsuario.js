document.getElementById('vagaForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    let vagasPublicadas = JSON.parse(localStorage.getItem('planoBasico')) || [];

    const vagasNoMes = vagasPublicadas.filter(vaga => {
        const dataPublicacao = new Date(vaga.dataPublicacao);
        return dataPublicacao.getMonth() === mesAtual && dataPublicacao.getFullYear() === anoAtual;
    });

    if (vagasNoMes.length >= 15) {
        const proximoMes = new Date(anoAtual, mesAtual + 1, 1);
        const diasRestantes = Math.ceil((proximoMes - hoje) / (1000 * 3600 * 24));

        document.getElementById('mensagemLimite').innerHTML = `Você já publicou 15 vagas neste mês. Tente novamente em ${diasRestantes} dias.`;
        document.getElementById('myModal').style.display = "block";
        return;
    }

    const vaga = {
        nome: document.getElementById('nomeVaga').value,
        descricao: document.getElementById('descricaoVaga').value,
        contato: document.getElementById('contato').value,
        beneficio: document.getElementById('beneficio').value,
        salario: document.getElementById('salario').value,
        requisitos: document.getElementById('requisitos').value,
        local: document.getElementById('local').value,
        cargaHoraria: document.getElementById('cargaHoraria').value,
        tipoContratacao: document.getElementById('tipoContratacao').value,
        tipoVaga: document.getElementById('tipoVaga').value,
        dataPublicacao: hoje.toISOString()
    };

    vagasPublicadas.push(vaga);
    localStorage.setItem('planoBasico', JSON.stringify(vagasPublicadas));

    document.getElementById('mensagemLimite').innerHTML = `Vaga publicada com sucesso!`;
    document.getElementById('myModal').style.display = "block";

    exibirVagas(vagasPublicadas);
});

function exibirVagas(vagas) {
    const vagaListDiv = document.getElementById('vagalists');
    
    vagaListDiv.innerHTML = '';

    vagas.forEach((vaga, index) => {
        const vagaDiv = document.createElement('div');
        vagaDiv.classList.add('vaga');

        vagaDiv.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Descrição:</strong> ${vaga.descricao.slice(0, 50)}...</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <p><strong>Data de Publicação:</strong> ${new Date(vaga.dataPublicacao).toLocaleDateString()}</p>
            <button class="verMais" onclick="redirecionarParaDetalhes(${index})">Ver Mais</button>
            <hr>
        `;

        vagaListDiv.appendChild(vagaDiv);
    });
}

function redirecionarParaDetalhes(index) {
    window.location.href = `detalhes.html?index=${index}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const vagasPublicadas = JSON.parse(localStorage.getItem('planoBasico')) || [];
    exibirVagas(vagasPublicadas);
});

function fecharModal() {
    document.getElementById('myModal').style.display = "none";
}
