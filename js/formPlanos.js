document.getElementById("planoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let vagas = document.getElementById("vagas").value;
    let destaque = document.querySelector('input[name="destaque"]:checked')?.value;
    let duracao = document.getElementById("duracao").value;
    let estatisticas = document.querySelector('input[name="estatisticas"]:checked')?.value;
    let compartilhamento = document.querySelector('input[name="compartilhamento"]:checked')?.value;
    let suporte = document.querySelector('input[name="suporte"]:checked')?.value;
    let bancoTalentos = document.querySelector('input[name="bancoTalentos"]:checked')?.value;

    // Redirecionamento baseado nas escolhas
    if (vagas === "2" && destaque === "nao" && suporte === "nao") {
        // Redireciona para a página do plano básico
        window.location.href = "planoBasico.html"; // Substitua pela URL real
    } else if (vagas === "10" || destaque === "sim" || estatisticas === "sim") {
        // Redireciona para a página do plano profissional
        window.location.href = "planoProfissional.html"; // Substitua pela URL real
    } else {
        // Redireciona para a página do plano premium
        window.location.href = "planoPremium.html"; // Substitua pela URL real
    }
});
