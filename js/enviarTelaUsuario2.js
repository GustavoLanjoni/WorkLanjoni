document.getElementById('vagaForm2').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta os dados do formulário
    const novaVaga = {
        nome: document.getElementById('nomeVaga').value,
        descricao: document.getElementById('descricaoVaga').value,
        contato: document.getElementById('contato').value,
        beneficio: document.getElementById('beneficio').value,
        salario: document.getElementById('salario').value,
        requisitos: document.getElementById('requisitos').value,
        cidade: document.getElementById('cidade').value,
        tipoTrabalho: document.getElementById('tipoTrabalho').value,
        tipoVaga: document.getElementById('tipoVaga').value
    };

    // Recupera o plano de vagas atual ou cria um novo
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];

    // Adiciona a nova vaga
    listaVagas.push(novaVaga);

    // Salva de volta no localStorage
    localStorage.setItem('planoProfissional', JSON.stringify(listaVagas));

    // Exibe uma mensagem de sucesso
    alert("Vaga publicada com sucesso!");
});

// Exibindo as vagas
function mostrarVagas() {
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];
    const vagaCards = document.getElementById('vagaCards');
    
    vagaCards.innerHTML = ''; // Limpa as vagas anteriores

    listaVagas.forEach((vaga, index) => {
        const card = document.createElement('div');
        card.classList.add('vaga-card');

        // Cria a estrutura da vaga com dados resumidos
        const resumoVaga = `
            <h3>${vaga.nome}</h3>
            <p>${vaga.descricao.substring(0, 150)}...</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Cidade:</strong> ${vaga.cidade}</p>
            <p><strong>Tipo de Trabalho:</strong> ${vaga.tipoTrabalho}</p>
            <a href="detalhesVaga.html?id=${index}" class="ver-vaga-btn">Ver Mais</a>
        `;
        
        card.innerHTML = resumoVaga;
        vagaCards.appendChild(card);

        // Estilização do card
        card.style.backgroundColor = '#f9f9f9';
        card.style.borderRadius = '8px';
        card.style.padding = '20px';
        card.style.margin = '10px';
        card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'box-shadow 0.3s ease';

        // Efeito de hover no card
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });

        // Estilização do botão diretamente no JS
        const button = card.querySelector('.ver-vaga-btn');
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.style.padding = '10px 20px';
        button.style.borderRadius = '5px';
        button.style.fontSize = '14px';
        button.style.fontWeight = 'bold';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.3s ease, transform 0.3s ease';

        // Efeito de hover no botão
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#0056b3';
            button.style.transform = 'translateY(-2px)';
        });

        // Efeito de foco no botão
        button.addEventListener('focus', () => {
            button.style.outline = 'none';
        });

        // Efeito de click no botão
        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = '#004085';
            button.style.transform = 'translateY(1px)';
        });

        // Efeito de liberar click no botão
        button.addEventListener('mouseup', () => {
            button.style.backgroundColor = '#0056b3';
            button.style.transform = 'translateY(0)';
        });
    });
}

// Chama a função para mostrar as vagas na página
mostrarVagas();
