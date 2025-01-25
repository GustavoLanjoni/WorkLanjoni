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

    // Salvando a vaga no localStorage para a tela do usuário
    let vagasUsuario = JSON.parse(localStorage.getItem('vagasUsuario')) || []; // Usando a chave correta
    vagasUsuario.push(vaga);
    localStorage.setItem('vagasUsuario', JSON.stringify(vagasUsuario));

    alert('Vaga enviada para a tela do usuário com sucesso!');
    document.getElementById('vagaForm').reset(); // Limpa o formulário
});
