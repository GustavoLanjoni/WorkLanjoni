document.getElementById('vagaForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    let vagasPublicadas = JSON.parse(localStorage.getItem('vagasPublicadas')) || [];

    // Filtrar vagas publicadas no mesmo mês e ano
    const vagasNoMes = vagasPublicadas.filter(vaga => {
        const dataPublicacao = new Date(vaga.dataPublicacao);
        return dataPublicacao.getMonth() === mesAtual && dataPublicacao.getFullYear() === anoAtual;
    });

    if (vagasNoMes.length >= 5) {
        alert('Você já publicou 5 vagas neste mês. Tente novamente no próximo mês.');
        return; // Impede que a vaga seja salva e publicada
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
        dataPublicacao: hoje.toISOString() // Salva a data de publicação
    };

    // Adiciona a vaga e salva no localStorage
    vagasPublicadas.push(vaga);
    localStorage.setItem('vagasPublicadas', JSON.stringify(vagasPublicadas));

    alert('Vaga publicada com sucesso!');
    document.getElementById('vagaForm').reset(); // Limpa o formulário
});
