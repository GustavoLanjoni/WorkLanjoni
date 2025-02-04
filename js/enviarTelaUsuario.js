document.addEventListener("DOMContentLoaded", function () {
    carregarVagas();

    document.getElementById("vagaForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const hoje = new Date();
        const mesAtual = hoje.getMonth();
        const anoAtual = hoje.getFullYear();

        let vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

        const vagasNoMes = vagasPublicadas.filter(vaga => {
            const dataPublicacao = new Date(vaga.dataPublicacao);
            return dataPublicacao.getMonth() === mesAtual && dataPublicacao.getFullYear() === anoAtual;
        });

        if (vagasNoMes.length >= 15) {
            alert("Você já publicou 15 vagas neste mês. Tente novamente no próximo mês.");
            return;
        }

        const vaga = {
            id: Date.now(),
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

        vagasPublicadas.push(vaga);
        localStorage.setItem("vagasPublicadas", JSON.stringify(vagasPublicadas));

        alert("Vaga publicada com sucesso!");
        document.getElementById("vagaForm").reset();

        carregarVagas();
    });
});

function carregarVagas() {
    const listaVagas = document.getElementById("vagalists");
    if (!listaVagas) {
        console.error("Elemento vagalists não encontrado!");
        return;
    }

    listaVagas.innerHTML = "";
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];

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
                <button class="btn-detalhes" data-id="${vaga.id}">Ver Detalhes</button>
            </div>
        `;

        listaVagas.appendChild(vagaElement);
    });

    document.querySelectorAll(".btn-detalhes").forEach((botao) => {
        botao.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            exibirDetalhesVaga(id);
        });
    });
}

function exibirDetalhesVaga(id) {
    const vagasPublicadas = JSON.parse(localStorage.getItem("vagasPublicadas")) || [];
    const vaga = vagasPublicadas.find(v => v.id == id);

    if (!vaga) {
        alert("Vaga não encontrada!");
        return;
    }

    document.getElementById("modalNome").innerText = vaga.nome;
    document.getElementById("modalDescricao").innerText = vaga.descricao;
    document.getElementById("modalContato").innerText = vaga.contato;
    document.getElementById("modalBeneficio").innerText = vaga.beneficio;
    document.getElementById("modalSalario").innerText = vaga.salario;
    document.getElementById("modalRequisitos").innerText = vaga.requisitos;
    document.getElementById("modalLocal").innerText = vaga.local;
    document.getElementById("modalCargaHoraria").innerText = vaga.cargaHoraria;
    document.getElementById("modalTipoContratacao").innerText = vaga.tipoContratacao;
    document.getElementById("modalTipoVaga").innerText = vaga.tipoVaga;

    const modal = document.getElementById("modalDetalhes");
    modal.style.display = "flex";

    document.querySelector(".fechar").addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
