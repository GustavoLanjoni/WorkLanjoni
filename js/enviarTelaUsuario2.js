document.getElementById('vagaForm2').addEventListener('submit', function (event) {
    event.preventDefault();

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

    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];
    listaVagas.push(novaVaga);
    localStorage.setItem('planoProfissional', JSON.stringify(listaVagas));

    alert("Vaga publicada com sucesso!");
    mostrarVagas(); // Atualiza a lista de vagas
});

function mostrarVagas() {
    let listaVagas = JSON.parse(localStorage.getItem('planoProfissional')) || [];
    const vagaCards = document.getElementById('vagaCards');

    vagaCards.innerHTML = '';

    listaVagas.forEach((vaga, index) => {
        const card = document.createElement('div');
        card.classList.add('vaga-card');

        const resumoVaga = `
            <h3>${vaga.nome}</h3>
            <p>${vaga.descricao.substring(0, 100)}...</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Cidade:</strong> ${vaga.cidade}</p>
            <p><strong>Tipo de Trabalho:</strong> ${vaga.tipoTrabalho}</p>
            <a href="detalhesVaga.html?id=${index}" class="ver-vaga-btn">Ver Mais</a>
        `;

        card.innerHTML = resumoVaga;
        vagaCards.appendChild(card);

        // Estilizando o card com o design solicitado
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

        // Efeito de hover
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0px 12px 20px rgba(0, 0, 0, 0.2)';
            card.style.transform = 'scale(1.02)';
        });

        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0px 10px 15px rgba(0, 0, 0, 0.1)';
            card.style.transform = 'scale(1)';
        });

        // Estilizando o botão
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

mostrarVagas(); // Exibe as vagas ao carregar a página
