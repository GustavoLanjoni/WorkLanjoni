document.getElementById("planoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura das respostas dos campos
    let vagas = document.getElementById("vagas").value;
    let destaque = document.querySelector('input[name="destaque"]:checked')?.value;
    let duracao = document.getElementById("duracao").value;
    let estatisticas = document.querySelector('input[name="estatisticas"]:checked')?.value;
    let compartilhamento = document.querySelector('input[name="compartilhamento"]:checked')?.value;
    let suporte = document.querySelector('input[name="suporte"]:checked')?.value;
    let bancoTalentos = document.querySelector('input[name="bancoTalentos"]:checked')?.value;
    
    // Captura do ID da empresa (do campo oculto)
    let empresaId = document.getElementById("empresaId").value;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!destaque || !estatisticas || !compartilhamento || !suporte || !bancoTalentos) {
        alert("Por favor, preencha todas as perguntas.");
        return;
    }

    // Aplique a lógica para redirecionar com base nas respostas
    if (vagas === "2" && destaque === "nao" && suporte === "nao" && bancoTalentos === "nao") {
        // Redireciona para a página do plano básico com o ID da empresa
        window.location.href = `planoBasico.html?id=${empresaId}`; // Passa o ID da empresa na URL
    } else if (vagas === "10" || destaque === "sim" || estatisticas === "sim" || bancoTalentos === "sim") {
        // Redireciona para a página do plano profissional com o ID da empresa
        window.location.href = `planoProfissional.html?id=${empresaId}`; // Passa o ID da empresa na URL
    } else {
        // Redireciona para a página do plano premium com o ID da empresa
        window.location.href = `planoPremium.html?id=${empresaId}`; // Passa o ID da empresa na URL
    }
});
