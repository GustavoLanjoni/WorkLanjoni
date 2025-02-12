// Função para enviar os dados do formulário sem redirecionar a página
document.getElementById("form-satisfacao").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Captura os dados do formulário
    const dadosFormulario = {
        vagasPublicar: document.getElementById("vagas-publicar").value,
        satisfeitoVagas: document.getElementById("satisfeito-vagas").value,
        visibilidadeBuscas: document.getElementById("visibilidade-buscas").value,
        duracaoVagas: document.getElementById("duracao-vagas").value,
        avaliacaoDashboard: document.getElementById("avaliacao-dashboard").value,
        compartilhamentoPlataformas: document.getElementById("compartilhamento-plataformas").value,
        facilidadePublicacao: document.getElementById("facilidade-publicacao").value,
        avaliacaoSuporte: document.getElementById("avaliacao-suporte").value,
        notificacoesSms: document.getElementById("notificacoes-sms").value,
        bancoCandidatos: document.getElementById("banco-candidatos").value,
        publicacaoRedesSociais: document.getElementById("publicacao-redes-sociais").value,
        relatoriosPerformance: document.getElementById("relatorios-performance").value,
        ferramentasFiltragem: document.getElementById("ferramentas-filtragem").value,
        treinamentosExclusivos: document.getElementById("treinamentos-exclusivos").value,
        caracteristicaMaisValorizada: document.getElementById("caracteristica-mais-valorizada").value,
        melhoriasPlano: document.getElementById("melhorias-plano").value
    };

    // Salva os dados no localStorage (não redireciona para a página de admin)
    localStorage.setItem('dadosSatisfacao', JSON.stringify(dadosFormulario));

    // Alerta para o usuário que os dados foram enviados com sucesso
    alert("Sua satisfação foi registrada com sucesso! Os dados serão exibidos na área administrativa.");
});
