document.addEventListener("DOMContentLoaded", function () {
    const listaVagas = document.getElementById("listaVagas");
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    // Verificar se existem vagas publicadas
    if (vagasPublicadas.length === 0) {
        listaVagas.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    // Adicionar as vagas à lista
    vagasPublicadas.forEach((vaga, index) => {
        const vagaElement = criarElementoVaga(vaga, index);
        listaVagas.appendChild(vagaElement);
    });
});

// Função para criar o elemento da vaga com informações resumidas
function criarElementoVaga(vaga, index) {
    const vagaElement = document.createElement("div");
    vagaElement.classList.add("vaga");

    // Adiciona o HTML para cada vaga com a opção de ver detalhes
    vagaElement.innerHTML = `
        <div class="vaga-info">
            <h2>${vaga.nome}</h2>
            <p><strong>Descrição:</strong> ${vaga.descricao.slice(0, 100)}...</p>
            <p><strong>Contato:</strong> ${vaga.contato}</p>
            <p><strong>Benefício:</strong> ${vaga.beneficio}</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <button class="btn-detalhes" data-index="${index}">Ver Detalhes</button>
        </div>
    `;

    // Evento de clique para exibir os detalhes da vaga
    vagaElement.querySelector(".btn-detalhes").addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        mostrarDetalhesVaga(index);
    });

    return vagaElement;
}

// Função para mostrar os detalhes da vaga em uma nova página
function mostrarDetalhesVaga(index) {
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];
    const vaga = vagasPublicadas[index];

// Cria uma nova página com os detalhes
const detalhesPagina = `
    <html>
        <head>
            <title>Detalhes da Vaga - ${vaga.nome}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    padding: 20px;
                    margin: 0;
                    color: #333;
                }
                h1 {
                    color: #2c3e50;
                }
                p {
                    margin: 10px 0;
                    font-size: 16px;
                }
                strong {
                    color: #3498db;
                }

                /* CSS Adicionado */
                .vaga-detalhes-container {
                    display: block;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 12px;
                    border: 1px solid #e1e1e1;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                    max-width: 900px;
                    margin: 0 auto;
                    margin-top: 20px;
                }

                .vaga-detalhes-container h3 {
                    font-size: 26px;
                    color: #333;
                    margin-bottom: 20px;
                }

                .vaga-detalhes-container p {
                    font-size: 18px;
                    color: #555;
                    margin-bottom: 15px;
                    line-height: 1.6;
                }

                .vaga-detalhes-container button {
                    background-color: #ff6f61;
                    color: #fff;
                    border: none;
                    padding: 12px 25px;
                    font-size: 18px;
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                /* Alteração do botão de voltar */
                .btn-voltar {
                    padding: 10px 20px;
                    background-color: #3498db;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 20px;
                }

                .btn-voltar:hover {
                    background-color: #2980b9;
                }
            </style>
        </head>
        <body>
            <div class="vaga-detalhes-container">
                <h1>${vaga.nome}</h1>
                <p><strong>Descrição:</strong> ${vaga.descricao}</p>
                <p><strong>Contato:</strong> ${vaga.contato}</p>
                <p><strong>Benefício:</strong> ${vaga.beneficio}</p>
                <p><strong>Salário:</strong> ${vaga.salario}</p>
                <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
                <p><strong>Local:</strong> ${vaga.local}</p>
                <p><strong>Carga Horária:</strong> ${vaga.cargaHoraria}</p>
                <p><strong>Tipo de Contratação:</strong> ${vaga.tipoContratacao}</p>
                <p><strong>Tipo de Vaga:</strong> ${vaga.tipoVaga}</p>
                <p><strong>Data de Publicação:</strong> ${new Date(vaga.dataPublicacao).toLocaleDateString()}</p>

                <button class="btn-voltar" onclick="window.location.href='index.html';">Voltar</button>
            </div>
        </body>
    </html>
`;

const novaAba = window.open();
novaAba.document.write(detalhesPagina);
novaAba.document.close();

}
