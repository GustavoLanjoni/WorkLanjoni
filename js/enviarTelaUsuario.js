document.addEventListener("DOMContentLoaded", function () {
    carregarVagas();
});

function carregarVagas() {
    const listaVagas = document.getElementById("vagalists");
    listaVagas.innerHTML = "";  // Limpa a lista antes de carregar

    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

    if (vagasPublicadas.length === 0) {
        listaVagas.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
        return;
    }

    // Cria um item para cada vaga
    vagasPublicadas.forEach((vaga) => {
        const vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");

        // Garantir que o ID seja uma string para comparação correta
        vagaElement.dataset.id = String(vaga.id);

        vagaElement.innerHTML = `<h3>${vaga.nome}</h3>`;
        listaVagas.appendChild(vagaElement);

        // Adiciona o evento de clique para selecionar a vaga
        vagaElement.addEventListener("click", function () {
            selecionarVaga(vaga.id);  // Passa o ID da vaga ao clicar
        });
    });
}

function selecionarVaga(id) {
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];
    
    const vaga = vagasPublicadas.find(v => String(v.id) === String(id));

    console.log("ID recebido:", id);
    console.log("Vagas armazenadas:", vagasPublicadas);
    console.log("Vaga encontrada:", vaga);

    if (!vaga) return;

    // Remove a classe 'selecionada' apenas da vaga anteriormente selecionada
    const vagaAnterior = document.querySelector(".vaga.selecionada");
    if (vagaAnterior) {
        vagaAnterior.classList.remove("selecionada");
    }

    // Seleciona o novo elemento corretamente
    const vagaElement = document.querySelector(`.vaga[data-id="${id}"]`);
    if (vagaElement) {
        vagaElement.classList.add("selecionada");
    } else {
        console.log("Erro: elemento da vaga não encontrado.");
    }

    // Exibe os detalhes da vaga no modal
    exibirDetalhesVaga(vaga);
}


function exibirDetalhesVaga(vaga) {
    document.getElementById("modalNome").innerText = vaga.nome || "Nome não disponível";
    document.getElementById("modalDescricao").innerText = vaga.descricao || "Descrição não disponível";
    document.getElementById("modalContato").innerText = vaga.contato || "Contato não disponível";
    document.getElementById("modalBeneficio").innerText = vaga.beneficio || "Benefício não disponível";
    document.getElementById("modalSalario").innerText = vaga.salario || "Salário não disponível";

    // Exibindo requisitos como lista
    const requisitosList = document.getElementById("modalRequisitos");
    requisitosList.innerHTML = "";
    if (vaga.requisitos) {
        vaga.requisitos.split("\n").forEach(requisito => {
            const listItem = document.createElement("li");
            listItem.innerText = requisito;
            requisitosList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement("li");
        listItem.innerText = "Nenhum requisito listado";
        requisitosList.appendChild(listItem);
    }

    document.getElementById("modalLocal").innerText = vaga.local || "Local não informado";
    document.getElementById("modalCargaHoraria").innerText = vaga.cargaHoraria || "Carga horária não informada";
    document.getElementById("modalTipoContratacao").innerText = vaga.tipoContratacao || "Tipo de contratação não informado";
    document.getElementById("modalTipoVaga").innerText = vaga.tipoVaga || "Tipo de vaga não informado";

    // Configura o botão de salvar
    document.getElementById("salvarVagaBtn").onclick = () => salvarVaga(vaga.id);
    document.getElementById("compartilharVagaBtn").onclick = () => compartilharVaga(vaga);
}

function salvarVaga(id) {
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];
    const vaga = vagasPublicadas.find(v => String(v.id) === String(id));

    if (vaga) {
        let vagasSalvas = JSON.parse(localStorage.getItem("vagasSalvas")) || [];
        vagasSalvas.push(vaga);
        localStorage.setItem("vagasSalvas", JSON.stringify(vagasSalvas));
        alert("Vaga salva com sucesso!");
    }
}

function compartilharVaga(vaga) {
    const vagaDetails = `Nome: ${vaga.nome}\nLocal: ${vaga.local}\nSalário: ${vaga.salario}\nDescrição: ${vaga.descricao}`;
    alert(`Compartilhar Vaga:\n\n${vagaDetails}`);
}
