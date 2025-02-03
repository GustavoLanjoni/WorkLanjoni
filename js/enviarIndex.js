document.getElementById('formVaga').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

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

    localStorage.setItem('vagaPublicada', JSON.stringify(vaga)); // Salva os dados no localStorage

    alert('Vaga cadastrada com sucesso!'); // Mensagem de confirmação (opcional)
});
