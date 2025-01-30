document.addEventListener("DOMContentLoaded", function () {
    carregarDados(); // Carrega os dados ao abrir a página
});

// Salva os dados no localStorage
function salvarDados(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeCompleto").value;
    const idade = document.getElementById("idade").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sobreMim = document.getElementById("sobreMim").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    
    // Salvar imagem como Base64
    const fotoInput = document.getElementById("foto");
    const foto = fotoInput.files.length > 0 ? URL.createObjectURL(fotoInput.files[0]) : localStorage.getItem("foto");

    // Criar objeto com os dados
    const dadosUsuario = {
        nome,
        idade,
        dataNascimento,
        sobreMim,
        email,
        telefone,
        foto
    };

    // Salvar no localStorage
    localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
    alert("Dados salvos com sucesso!");

    carregarDados(); // Atualiza a exibição dos dados
}

// Carrega os dados do localStorage
function carregarDados() {
    const dadosSalvos = localStorage.getItem("dadosUsuario");

    if (dadosSalvos) {
        const usuario = JSON.parse(dadosSalvos);

        document.getElementById("nomeCompleto").value = usuario.nome || "";
        document.getElementById("idade").value = usuario.idade || "";
        document.getElementById("dataNascimento").value = usuario.dataNascimento || "";
        document.getElementById("sobreMim").value = usuario.sobreMim || "";
        document.getElementById("email").value = usuario.email || "";
        document.getElementById("telefone").value = usuario.telefone || "";

        // Mostrar foto de perfil
        if (usuario.foto) {
            const fotoPreview = document.getElementById("fotoPerfilPreview");
            fotoPreview.src = usuario.foto;
            fotoPreview.style.display = "block";

            // Atualiza a foto no menu principal
            const menuFoto = document.getElementById("menuFoto");
            if (menuFoto) {
                menuFoto.src = usuario.foto;
            }
        }
    }
}

// Exibe a foto de perfil ao selecionar um arquivo
function mostrarFoto(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fotoPreview = document.getElementById("fotoPerfilPreview");
            fotoPreview.src = e.target.result;
            fotoPreview.style.display = "block";

            // Atualiza a foto do menu principal
            const menuFoto = document.getElementById("menuFoto");
            if (menuFoto) {
                menuFoto.src = e.target.result;
            }
        };

        reader.readAsDataURL(file);
    }
}
