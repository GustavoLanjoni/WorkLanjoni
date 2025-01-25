document.getElementById('vagaForm').addEventListener('submit', (event) => {
    event.preventDefault();

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
        tipoVaga: document.getElementById('tipoVaga').value
    };

    // Salvando a vaga no localStorage para tela de vagas publicadas
    let vagasPublicadas = JSON.parse(localStorage.getItem('vagasPublicadas')) || [];
    vagasPublicadas.push(vaga);
    localStorage.setItem('vagasPublicadas', JSON.stringify(vagasPublicadas));

    alert('Vaga publicada com sucesso!');
});
