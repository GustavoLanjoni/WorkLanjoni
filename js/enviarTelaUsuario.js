document.addEventListener("DOMContentLoaded", function () {
    carregarVagas(); // Carrega as vagas ao abrir a página

    document.getElementById("vagaForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const hoje = new Date();
        const mesAtual = hoje.getMonth();
        const anoAtual = hoje.getFullYear();

        let vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

        // Filtrar vagas publicadas no mesmo mês e ano
        const vagasNoMes = vagasPublicadas.filter(vaga => {
            const dataPublicacao = new Date(vaga.dataPublicacao);
            return dataPublicacao.getMonth() === mesAtual && dataPublicacao.getFullYear() === anoAtual;
        });

        if (vagasNoMes.length >= 15) {
            alert("Você já publicou 15 vagas neste mês. Tente novamente no próximo mês.");
            return;
        }

        const vaga = {
            id: Date.now(), // ID único para evitar problemas de indexação
            nome: document.getElementById("nomeVaga").value,
            descricao: document.getElementById("descricaoVaga").value,
            contato: document.getElementById("contato").value,
            beneficio: document.getElementById("beneficio").value,
            salario: document.getElementById("salario").value,
            requisitos: document.getElementById("requisitos").value,
            local: document.getElementById("local").value,
            cargaHoraria: document.getElementById("cargaHoraria").value,
            tipoContratacao: document.getElementById("tipoContratacao").value,
            tipoVaga: document.getElementById("tipoVaga").value,
            dataPublicacao: hoje.toISOString()
        };

        // Adiciona a vaga e salva no localStorage
        vagasPublicadas.push(vaga);
        localStorage.setItem("vagasPublicadas", JSON.stringify(vagasPublicadas));

        alert("Vaga publicada com sucesso!");
        document.getElementById("vagaForm").reset();

        carregarVagas(); // Atualiza a lista de vagas
    });
});

function carregarVagas() {
    console.log("Carregando vagas...");

    const listaVagas = document.getElementById("vagalists");
    if (!listaVagas) {
        console.error("Elemento vagalists não encontrado!");
        return;
    }

    listaVagas.innerHTML = ""; // Limpa a lista antes de adicionar as vagas
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    console.log("Vagas encontradas:", vagasPublicadas);

    if (vagasPublicadas.length === 0) {
        listaVagas.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    vagasPublicadas.forEach((vaga) => {
        const vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");

        vagaElement.innerHTML = `
            <div class="vaga-info">
                <h2>${vaga.nome}</h2>
                <p><strong>Descrição:</strong> ${vaga.descricao.slice(0, 100)}...</p>
                <p><strong>Contato:</strong> ${vaga.contato}</p>
                <button class="btn-detalhes" data-id="${vaga.id}">Ver Detalhes</button>
            </div>
        `;

        listaVagas.appendChild(vagaElement);
    });

    // Ajuste do botão de "Ver Detalhes"
    document.querySelectorAll(".btn-detalhes").forEach((botao) => {
        botao.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            window.location.href = `detalhes.html?id=${id}`; // Redireciona para a página de detalhes com o ID da vaga
        });
    });

    console.log("Vagas adicionadas ao DOM.");
}
