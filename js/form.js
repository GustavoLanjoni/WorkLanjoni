document.getElementById("form-satisfacao").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Captura os dados do formulário
    const dadosFormulario = {
        nomePessoa: document.getElementById("nome-pessoa").value,
        nomeEmpresa: document.getElementById("nome-empresa").value,
        idEmpresa: document.getElementById("id-empresa").value,  // Captura o ID da empresa
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

    // Verifica se os campos obrigatórios (nome e empresa) estão preenchidos
    if (!dadosFormulario.nomePessoa || !dadosFormulario.nomeEmpresa) {
        alert("Por favor, preencha seu nome e o nome da empresa.");
        return;
    }

    // Recupera os dados armazenados no localStorage (se houver)
    let formulariosSalvos = JSON.parse(localStorage.getItem('dadosSatisfacao')) || [];

    // Adiciona os novos dados à lista de formulários salvos
    formulariosSalvos.push(dadosFormulario);

    // Salva novamente os dados no localStorage
    localStorage.setItem('dadosSatisfacao', JSON.stringify(formulariosSalvos));

    // Exibe a mensagem de sucesso
    document.getElementById("mensagem-sucesso").style.display = "block";

    // Oculta o formulário
    document.getElementById("form-satisfacao").style.display = "none";
});
