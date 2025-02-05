document.addEventListener("DOMContentLoaded", function () {
    carregarVagas();
});

function carregarVagas() {
    const listaVagas = document.getElementById("vagalists");
    listaVagas.innerHTML = ""; // Limpa a lista antes de carregar

    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    if (vagasPublicadas.length === 0) {
        listaVagas.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    vagasPublicadas.forEach((vaga) => {
        const vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");
        vagaElement.dataset.id = String(vaga.id); // Garante que o ID seja string

        // Atualização do conteúdo com nome, descrição e salário
        vagaElement.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Descrição:</strong> ${vaga.descricao}</p>
            <p><strong>Salário:</strong> R$ ${vaga.salario}</p>
        `;

        // Adiciona o botão "Ver Vaga"
        const verVagaButton = document.createElement("button");
        verVagaButton.innerText = "Ver Vaga";
        verVagaButton.classList.add("ver-vaga-btn");
        verVagaButton.addEventListener("click", function (e) {
            e.stopPropagation(); // Previne que o evento de click da vaga seja disparado
            verDetalhesVaga(vaga);
        });

        vagaElement.appendChild(verVagaButton);
        listaVagas.appendChild(vagaElement);
    });
}

function verDetalhesVaga(vaga) {
    // Salva os dados da vaga no localStorage para ser acessado na página detalhes.html
    localStorage.setItem("vagaSelecionada", JSON.stringify(vaga));

    // Redireciona para a página detalhes.html
    window.location.href = "detalhes.html";
}
