// vagasPostadas.js

// Carregar as vagas do localStorage
const vagasPostadas = JSON.parse(localStorage.getItem('vagasUsuario')) || [];
const vagasContainer = document.getElementById('vagasPostadasContainer');

// Função para exibir vagas
function renderVagas() {
    vagasContainer.innerHTML = '';

    if (vagasPostadas.length === 0) {
        vagasContainer.innerHTML = '<p>Não há vagas postadas no momento.</p>';
    } else {
        vagasPostadas.forEach((vaga, index) => {
            const vagaElement = document.createElement('div');
            vagaElement.classList.add('vaga');

            // Verifica se a vaga está expirada
            const hoje = new Date();
            const expirada = vaga.expiracao ? new Date(vaga.expiracao) < hoje : false;

            vagaElement.innerHTML = `
                <h3>${vaga.nome} ${expirada ? '(Expirada)' : ''}</h3>
                <p><strong>Descrição:</strong> ${vaga.descricao}</p>
                <p><strong>Contato:</strong> ${vaga.contato}</p>
                <p><strong>Benefício:</strong> ${vaga.beneficio}</p>
                <p><strong>Salário:</strong> R$ ${vaga.salario}</p>
                <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
                <p><strong>Local:</strong> ${vaga.local}</p>
                <p><strong>Carga Horária:</strong> ${vaga.cargaHoraria}</p>
                <p><strong>Tipo de Contratação:</strong> ${vaga.tipoContratacao}</p>
                <p><strong>Tipo de Vaga:</strong> ${vaga.tipoVaga}</p>
                <p><strong>Data de Postagem:</strong> ${vaga.dataPostagem || 'N/A'}</p>
                <p><strong>Data de Expiração:</strong> ${vaga.expiracao || 'Não definida'}</p>
                <button onclick="editarVaga(${index})">Editar</button>
                <button onclick="excluirVaga(${index})">Excluir</button>
            `;
            vagasContainer.appendChild(vagaElement);
        });
    }
}

// Função para excluir uma vaga
function excluirVaga(index) {
    if (confirm('Tem certeza de que deseja excluir esta vaga?')) {
        vagasPostadas.splice(index, 1); // Remove a vaga pelo índice
        localStorage.setItem('vagasUsuario', JSON.stringify(vagasPostadas)); // Atualiza o localStorage
        renderVagas(); // Re-renderiza as vagas
        alert('Vaga excluída com sucesso!');
    }
}

// Função para editar uma vaga
function editarVaga(index) {
    const vaga = vagasPostadas[index];
    const nome = prompt('Editar Nome:', vaga.nome);
    const descricao = prompt('Editar Descrição:', vaga.descricao);
    const contato = prompt('Editar Contato:', vaga.contato);
    const beneficio = prompt('Editar Benefício:', vaga.beneficio);
    const salario = prompt('Editar Salário:', vaga.salario);
    const requisitos = prompt('Editar Requisitos:', vaga.requisitos);
    const local = prompt('Editar Local:', vaga.local);
    const cargaHoraria = prompt('Editar Carga Horária:', vaga.cargaHoraria);
    const tipoContratacao = prompt('Editar Tipo de Contratação:', vaga.tipoContratacao);
    const tipoVaga = prompt('Editar Tipo de Vaga:', vaga.tipoVaga);
    const expiracao = prompt('Definir Data de Expiração (AAAA-MM-DD):', vaga.expiracao || '');

    if (nome && descricao && contato) { // Atualiza apenas se valores essenciais forem preenchidos
        vagasPostadas[index] = {
            nome,
            descricao,
            contato,
            beneficio,
            salario,
            requisitos,
            local,
            cargaHoraria,
            tipoContratacao,
            tipoVaga,
            dataPostagem: vaga.dataPostagem, // Mantém a data de postagem original
            expiracao: expiracao || null // Atualiza a data de expiração
        };
        localStorage.setItem('vagasUsuario', JSON.stringify(vagasPostadas));
        alert('Vaga atualizada com sucesso!');
        renderVagas();
    } else {
        alert('Os campos Nome, Descrição e Contato são obrigatórios!');
    }
}

// Função para adicionar data de postagem ao salvar nova vaga
function adicionarDataDePostagem(vaga) {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} às ${hora}:${minutos}`;
}

// Atualiza a data de postagem ao criar vagas (se necessário)
vagasPostadas.forEach((vaga) => {
    if (!vaga.dataPostagem) {
        vaga.dataPostagem = adicionarDataDePostagem(vaga);
    }
});
localStorage.setItem('vagasUsuario', JSON.stringify(vagasPostadas));


function excluirVaga(index) {
    if (confirm('Tem certeza de que deseja excluir esta vaga?')) {
        // Remove a vaga pelo índice
        vagasPostadas.splice(index, 1);
        // Atualiza o localStorage com as vagas restantes
        localStorage.setItem('vagasUsuario', JSON.stringify(vagasPostadas));
        // Re-renderiza as vagas na tela de "Vagas Postadas"
        renderVagas();
        alert('Vaga excluída com sucesso!');
    }
}


// Inicializa a página exibindo as vagas
renderVagas();
