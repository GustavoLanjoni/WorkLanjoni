document.addEventListener("DOMContentLoaded", () => {
    const vagasList = document.getElementById("vagasList");
    const mensagemContainer = document.getElementById("mensagem");

    function exibirMensagem(texto, tipo = "info") {
        mensagemContainer.innerHTML = `<p class="${tipo}">${texto}</p>`;
        mensagemContainer.style.display = "block";

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            mensagemContainer.style.display = "none";
        }, 5000);
    }

    if (!vagasList) {
        exibirMensagem("Erro: Elemento 'vagasList' não encontrado!", "erro");
        return;
    }

    // Recupera as vagas do localStorage
    let vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    if (vagasPublicadas.length === 0) {
        exibirMensagem("Nenhuma vaga disponível no momento.", "aviso");
        vagasList.innerHTML = "<p class='aviso'>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    // Ordenar as vagas pela data de publicação (mais recentes primeiro)
    vagasPublicadas.sort((a, b) => new Date(b.dataPublicacao) - new Date(a.dataPublicacao));

    // Adiciona as vagas na div
    vagasPublicadas.forEach(vaga => {
        const vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");

        vagaElement.innerHTML = `
            <h3>${vaga.nome}</h3>
            <p><strong>Descrição:</strong> ${vaga.descricao}</p>
            <p><strong>Contato:</strong> ${vaga.contato}</p>
            <p><strong>Benefícios:</strong> ${vaga.beneficio || "Não informado"}</p>
            <p><strong>Salário:</strong> ${vaga.salario || "Não informado"}</p>
            <p><strong>Requisitos:</strong> ${vaga.requisitos || "Não informado"}</p>
            <p><strong>Local:</strong> ${vaga.local}</p>
            <p><strong>Carga Horária:</strong> ${vaga.cargaHoraria || "Não informado"}</p>
            <p><strong>Tipo de Contratação:</strong> ${vaga.tipoContratacao}</p>
            <p><strong>Tipo de Vaga:</strong> ${vaga.tipoVaga}</p>
            <p><strong>Data de Publicação:</strong> ${new Date(vaga.dataPublicacao).toLocaleDateString()}</p>
        `;

        vagasList.appendChild(vagaElement);
    });

    exibirMensagem("Vagas carregadas com sucesso!", "sucesso");
});
