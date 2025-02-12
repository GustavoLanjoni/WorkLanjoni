// Função para excluir as vagas com mais de 30 dias
function excluirVagasAntigas() {
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];
    
    // Filtra as vagas para manter apenas aquelas com até 30 dias
    listaVagas = listaVagas.filter(vaga => {
        const dataPublicacao = new Date(vaga.dataPublicacao);
        const dataAtual = new Date();
        const diferencaEmMilissegundos = dataAtual - dataPublicacao;
        const diferencaEmDias = diferencaEmMilissegundos / (1000 * 3600 * 24);
        return diferencaEmDias <= 30; // Retorna verdadeiro se a vaga tem até 30 dias
    });

    // Atualiza o localStorage com as vagas restantes
    localStorage.setItem('planoProfissional', JSON.stringify(listaVagas));

    console.log('Vagas antigas excluídas (se houverem).');

    // Recarregar as vagas para garantir que a interface seja atualizada
    mostrarVagas();
}

// Chama a função para exibir as vagas (como foi feito inicialmente)
function mostrarVagas() {
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];
    const vagaCards = document.getElementById('vagaCards');
    vagaCards.innerHTML = ''; // Limpa as vagas antes de mostrar as atualizações

    // Se não houver vagas, exibe uma mensagem
    if (listaVagas.length === 0) {
        vagaCards.innerHTML = '<p>Não há vagas postadas ainda.</p>';
        return;
    }

    // Itera sobre as vagas para exibir cada uma delas
    listaVagas.forEach((vaga, index) => {
        const card = document.createElement('div');
        card.classList.add('vaga-card');

        // Garantir que todos os campos necessários existem e são válidos
        const nomeVaga = vaga.nome || 'Nome da vaga não disponível';
        const descricaoVaga = vaga.descricao || 'Descrição não disponível';
        const salarioVaga = vaga.salario || 'Salário não informado';
        const cidadeVaga = vaga.cidade || 'Cidade não informada';
        const tipoTrabalhoVaga = vaga.tipoTrabalho || 'Tipo de trabalho não informado';
        const dataPublicacaoVaga = vaga.dataPublicacao || 'Data de publicação não informada';
        const requisitosVaga = vaga.requisitos || 'Requisitos não informados';

        // Estrutura do resumo da vaga
        const resumoVaga = `
            <h3>${nomeVaga}</h3>
            <p><strong>Descrição:</strong> ${descricaoVaga}</p>
            <p><strong>Salário:</strong> ${salarioVaga}</p>
            <p><strong>Cidade:</strong> ${cidadeVaga}</p>
            <p><strong>Tipo de Trabalho:</strong> ${tipoTrabalhoVaga}</p>
            <p><strong>Data de Publicação:</strong> ${dataPublicacaoVaga}</p>
            <p><strong>Requisitos:</strong> ${requisitosVaga}</p>
            <button class="editar-btn" onclick="editarVaga(${index})">Editar</button>
            <button class="excluir-btn" onclick="excluirVaga(${index})">Excluir</button>
        `;

        card.innerHTML = resumoVaga;
        vagaCards.appendChild(card);
    });
}

// Função para excluir uma vaga
function excluirVaga(index) {
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];

    // Remove a vaga do array
    listaVagas.splice(index, 1);

    // Salva a nova lista de vagas no localStorage
    localStorage.setItem('planoProfissional', JSON.stringify(listaVagas));

    alert("Vaga excluída com sucesso!");
    mostrarVagas(); // Atualiza a lista de vagas na página
}

// Chama a função para exibir as vagas ao carregar a página
mostrarVagas();
