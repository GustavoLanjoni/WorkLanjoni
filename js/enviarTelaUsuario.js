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

    if (vagasNoMes.length >= 20) {
        const proximoMes = new Date(anoAtual, mesAtual + 1, 1);
        const diasRestantes = Math.ceil((proximoMes - hoje) / (1000 * 3600 * 24));

        document.getElementById('mensagemLimite').innerHTML = `Você já publicou 15 vagas neste mês. Tente novamente em ${diasRestantes} dias.`;
        document.getElementById('myModal').style.display = "block";
        return;
    }

    const requisitosInput = document.getElementById('requisitos').value;
    const requisitosArray = requisitosInput ? requisitosInput.split(',').map(req => req.trim()) : [];

    const vaga = {
        id: Date.now(),  // Usando o timestamp como ID único
        nome: document.getElementById('nomeVaga').value,
        descricao: document.getElementById('descricaoVaga').value,
        contato: document.getElementById('contato').value,
        beneficio: document.getElementById('beneficio').value,
        salario: document.getElementById('salario').value,
        requisitos: requisitosArray,
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

    vagas.forEach((vaga) => {
        const vagaDiv = document.createElement('div');
        vagaDiv.classList.add('vaga');

        // Resumo da descrição (mostra apenas os primeiros 50 caracteres ou até o final)
        const descricaoResumo = vaga.descricao.length > 50 ? vaga.descricao.slice(0, 50) + '...' : vaga.descricao;

        // Resumo dos requisitos (mostra apenas os primeiros 3 requisitos ou até 50 caracteres)
        const requisitosResumo = Array.isArray(vaga.requisitos) && vaga.requisitos.length > 0
            ? vaga.requisitos.slice(0, 3).join(", ") + (vaga.requisitos.length > 3 ? "..." : "")
            : "Não especificado";

        vagaDiv.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Descrição:</strong> ${descricaoResumo}</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <p><strong>Requisitos:</strong> ${requisitosResumo}</p>
            <p><strong>Data de Publicação:</strong> ${new Date(vaga.dataPublicacao).toLocaleDateString()}</p>
            <a href="detalhes.html?id=${vaga.id}"><button>Ver Mais</button></a>
            <hr>
        `;
        vagaListDiv.appendChild(vagaDiv);

        // Estilização do botão diretamente no JS
        const button = vagaDiv.querySelector('button');
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.style.padding = '10px 20px';
        button.style.borderRadius = '5px';
        button.style.fontSize = '14px';
        button.style.fontWeight = 'bold';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.3s ease, transform 0.3s ease';

        // Efeito de hover
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0056b3';
            button.style.transform = 'translateY(-2px)';
        });

        // Efeito de foco
        button.addEventListener('focus', () => {
            button.style.outline = 'none';
        });

        // Efeito de click
        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = '#004085';
            button.style.transform = 'translateY(1px)';
        });

        // Efeito de liberar click
        button.addEventListener('mouseup', () => {
            button.style.backgroundColor = '#0056b3';
            button.style.transform = 'translateY(0)';
        });
    });
}
