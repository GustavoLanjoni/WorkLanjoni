document.addEventListener("DOMContentLoaded", function () {
    const listaVagas = document.getElementById("listaVagas");
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    if (vagasPublicadas.length === 0) {
        listaVagas.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    vagasPublicadas.forEach((vaga, index) => {
        const vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");

        // Criar HTML da vaga resumida com botão
        vagaElement.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <p><strong>Salário:</strong> R$ ${vaga.salario}</p>
            <button class="ver-detalhes" onclick="verDetalhes(${index})">Ver Detalhes</button>
        `;

        listaVagas.appendChild(vagaElement);
    });
});

// Função para redirecionar para a página de detalhes
function verDetalhes(id) {
    window.location.href = `detalhes.html?id=${id}`;
}
