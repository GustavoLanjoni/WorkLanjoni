// Função para lidar com o envio do formulário de vaga
document.getElementById('vagaForm2').addEventListener('submit', function (event) {
    event.preventDefault();

    // Criação do objeto novaVaga com os dados do formulário
    const novaVaga = {
        nome: document.getElementById('nomeVaga').value,
        descricao: document.getElementById('descricaoVaga').value,
        contato: document.getElementById('contato').value,
        beneficio: document.getElementById('beneficio').value,
        salario: document.getElementById('salario').value,
        requisitos: document.getElementById('requisitos').value,
        cidade: document.getElementById('cidade').value,
        tipoTrabalho: document.getElementById('tipoTrabalho').value,
        tipoVaga: document.getElementById('tipoVaga').value,
        // Adiciona a data de postagem
        dataPostagem: new Date().toLocaleDateString('pt-BR')
    };

    // Recupera a lista de vagas do localStorage ou cria um novo array caso não exista
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];

    // Adiciona a nova vaga à lista
    listaVagas.push(novaVaga);

    // Atualiza o localStorage com a nova lista de vagas
    localStorage.setItem('planoProfissional', JSON.stringify(listaVagas));

    // Exibe uma mensagem de sucesso
    alert("Vaga publicada com sucesso!");

    // Limpa os campos do formulário
    document.getElementById('vagaForm2').reset();

    // Atualiza a lista de vagas na página
    mostrarVagas();
});

// Função para exibir as vagas
function mostrarVagas() {
    // Recupera a lista de vagas do localStorage
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];
    console.log(listaVagas); // Verifica o conteúdo de listaVagas no console

    // Obtém o elemento onde os cards de vagas serão exibidos
    const vagaCards = document.getElementById('vagaCards');

    // Limpa os cards de vagas existentes
    vagaCards.innerHTML = '';

    // Para cada vaga na lista, cria um card
    listaVagas.forEach((vaga, index) => {
        const card = document.createElement('div');
        card.classList.add('vaga-card');

        // Cria o conteúdo do card de vaga
        const resumoVaga = `
            <h3>${vaga.nome}</h3>
            <p>${vaga.descricao.substring(0, 100)}...</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Cidade:</strong> ${vaga.cidade}</p>
            <p><strong>Tipo de Trabalho:</strong> ${vaga.tipoTrabalho}</p>
            <p><strong>Data de Publicação:</strong> ${vaga.dataPostagem}</p> <!-- Exibe a data -->
            <a href="detalhesVaga.html?id=${index}" class="ver-vaga-btn">Ver Mais</a>
        `;

        // Insere o conteúdo no card
        card.innerHTML = resumoVaga;
        vagaCards.appendChild(card);

        // Estiliza o card (essas regras podem ser transferidas para o CSS)
        card.style.background = '#f8f9fa';
        card.style.borderRadius = '10px';
        card.style.padding = '20px';
        card.style.margin = '15px';
        card.style.boxShadow = '0px 10px 15px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'space-between';
        card.style.minHeight = '200px';
        card.style.width = 'calc(33.333% - 30px)';
        card.style.boxSizing = 'border-box';
        card.style.wordWrap = 'break-word';
        card.style.overflowWrap = 'break-word';
        card.style.wordBreak = 'break-word';

        // Efeito de hover no card
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)';
            card.style.transform = 'scale(1.02)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0px 10px 15px rgba(0, 0, 0, 0.1)';
            card.style.transform = 'scale(1)';
        });

        // Estiliza o botão
        const button = card.querySelector('.ver-vaga-btn');
        button.style.background = '#28a745'; // Verde fluorescente
        button.style.color = 'white';
        button.style.padding = '10px 15px';
        button.style.borderRadius = '5px';
        button.style.fontSize = '14px';
        button.style.fontWeight = 'bold';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.transition = 'background 0.3s ease, transform 0.3s ease';
        button.style.textAlign = 'center';
        button.style.display = 'inline-block';
        button.style.textDecoration = 'none';

        // Efeito de hover no botão
        button.addEventListener('mouseover', () => {
            button.style.background = '#218838';
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.background = '#28a745';
            button.style.transform = 'scale(1)';
        });
    });
}

// Chama a função para mostrar as vagas ao carregar a página
mostrarVagas();
