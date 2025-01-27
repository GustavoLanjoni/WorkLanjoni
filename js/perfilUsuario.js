// Função para exibir a foto do usuário após o upload
function mostrarFoto(event) {
    const arquivo = event.target.files[0]; // Pega o arquivo selecionado

    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function (e) {
            // Cria um elemento de imagem e define o src como o resultado do leitor
            const img = document.createElement("img");
            img.src = e.target.result; // A imagem será exibida com base no arquivo carregado
            img.alt = "Foto de Perfil";
            img.style.width = "200px"; // Ajuste do tamanho da imagem
            img.style.height = "200px";
            img.style.borderRadius = "50%"; // Torna a imagem redonda
            img.style.marginTop = "10px";

            // Exibe a imagem no local desejado
            const fotoContainer = document.getElementById("salvoFoto");
            fotoContainer.innerHTML = ""; // Limpa o conteúdo anterior
            fotoContainer.appendChild(img); // Adiciona a nova imagem
        };
        leitor.readAsDataURL(arquivo); // Lê o arquivo como um URL para a imagem
    }
}

// Função para salvar os dados do formulário
function salvarDados(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Obter os dados do formulário
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const idade = document.getElementById("idade").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Exibir os dados salvos
    document.getElementById("dadosSalvos").style.display = "block";
    document.getElementById("salvoNome").textContent = "Nome Completo: " + nomeCompleto;
    document.getElementById("salvoIdade").textContent = "Idade: " + idade;
    document.getElementById("salvoDataNascimento").textContent = "Data de Nascimento: " + dataNascimento;
    document.getElementById("salvoEmail").textContent = "Email: " + email;
    document.getElementById("salvoTelefone").textContent = "Telefone: " + telefone;
}
