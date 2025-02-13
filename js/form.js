document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-satisfacao");
    const mensagem = document.getElementById("mensagem-sucesso");  // Renomeado para 'mensagem'

    // Verifica se há dados salvos no localStorage e preenche o formulário
    carregarDados();

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        const dadosFormulario = {};
        new FormData(form).forEach((value, key) => {
            dadosFormulario[key] = value;
        });

        // Salva os dados no localStorage
        localStorage.setItem("respostasSatisfacao", JSON.stringify(dadosFormulario));

        // Exibir mensagem de sucesso
        mensagem.style.display = "block"; // Atualizado para 'mensagem'
        form.style.display = "none";
    });

    function carregarDados() {
        const dadosSalvos = localStorage.getItem("respostasSatisfacao");
        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            Object.keys(dados).forEach((key) => {
                const campo = form.elements[key];
                if (campo) {
                    if (campo.type === "checkbox" || campo.type === "radio") {
                        campo.checked = dados[key] === "on";
                    } else {
                        campo.value = dados[key];
                    }
                }
            });
        }
    }
});
