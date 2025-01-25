const vagas = [
    { id: 1, titulo: "Desenvolvedor Frontend", empresa: "Tech Corp", descricao: "Responsável pelo desenvolvimento da interface...", requisitos: "Conhecimento em HTML, CSS, JavaScript", beneficios: "Plano de saúde, Vale alimentação" },
    { id: 2, titulo: "Desenvolvedor Backend", empresa: "CodeX", descricao: "Trabalhar com API, banco de dados e lógica de negócio", requisitos: "Java, Spring Boot, SQL", beneficios: "Seguro de vida, Home office" },
    { id: 3, titulo: "Designer UI/UX", empresa: "DesignPro", descricao: "Criar interfaces intuitivas e experiências", requisitos: "Figma, Adobe XD, Design Thinking", beneficios: "Vale refeição, Gym pass" }
];

const vagasList = document.getElementById("vagasList");
const vagaDetalhesContainer = document.getElementById("vagaDetalhesContainer");
const vagaDetalhesContent = document.getElementById("vagaDetalhesContent");

// Exibir a lista de vagas
function renderVagas() {
    vagasList.innerHTML = '';
    vagas.forEach(vaga => {
        const vagaCard = document.createElement("div");
        vagaCard.classList.add("vaga-card");
        vagaCard.innerHTML = `
            <h3>${vaga.titulo}</h3>
            <p>${vaga.empresa}</p>
            <button onclick="mostrarDetalhes(${vaga.id})">Ver</button>
        `;
        vagasList.appendChild(vagaCard);
    });
}

// Exibir os detalhes da vaga selecionada
function mostrarDetalhes(id) {
    const vaga = vagas.find(vaga => vaga.id === id);
    vagaDetalhesContent.innerHTML = `
        <h3>${vaga.titulo}</h3>
        <p><strong>Empresa:</strong> ${vaga.empresa}</p>
        <p><strong>Descrição:</strong> ${vaga.descricao}</p>
        <p><strong>Requisitos:</strong> ${vaga.requisitos}</p>
        <p><strong>Benefícios:</strong> ${vaga.beneficios}</p>
    `;
    vagaDetalhesContainer.style.display = 'block';
}

// Fechar os detalhes da vaga
function closeDetalhes() {
    vagaDetalhesContainer.style.display = 'none';
}

// Função para filtrar vagas
function filterVagas() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredVagas = vagas.filter(vaga => 
        vaga.titulo.toLowerCase().includes(searchInput) || 
        vaga.empresa.toLowerCase().includes(searchInput)
    );
    
    // Re-renderizar a lista de vagas com o filtro aplicado
    vagasList.innerHTML = '';
    filteredVagas.forEach(vaga => {
        const vagaCard = document.createElement("div");
        vagaCard.classList.add("vaga-card");
        vagaCard.innerHTML = `
            <h3>${vaga.titulo}</h3>
            <p>${vaga.empresa}</p>
            <button onclick="mostrarDetalhes(${vaga.id})">Ver</button>
        `;
        vagasList.appendChild(vagaCard);
    });
}

// Chama a função para renderizar as vagas ao carregar a página
renderVagas();
