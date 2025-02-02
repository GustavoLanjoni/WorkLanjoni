document.addEventListener("DOMContentLoaded", () => {
    const vagasList = document.getElementById("vagasList");

    // Recupera as vagas do localStorage
    let vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    if (vagasPublicadas.length === 0) {
        vagasList.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    // Ordena as vagas pela data de publicação (mais recentes primeiro)
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
});
