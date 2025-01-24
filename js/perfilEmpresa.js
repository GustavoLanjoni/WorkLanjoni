// Função para salvar os dados do perfil
function salvarPerfil() {
    const nome = document.getElementById('nome-empresa').value;
    const descricao = document.getElementById('descricao-empresa').value;
    const contato = document.getElementById('contato-empresa').value;
    const fotoInput = document.getElementById('foto-perfil');

    // Verificar se há uma foto selecionada e salvar no localStorage
    if (fotoInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('fotoPerfil', e.target.result); // Salva imagem em base64
            atualizarPerfilLocalStorage(nome, descricao, contato);
        };
        reader.readAsDataURL(fotoInput.files[0]);
    } else {
        atualizarPerfilLocalStorage(nome, descricao, contato);
    }
}

// Atualizar os dados do perfil no localStorage
function atualizarPerfilLocalStorage(nome, descricao, contato) {
    if (nome && descricao && contato) {
        localStorage.setItem(
            'perfilEmpresa',
            JSON.stringify({ nome, descricao, contato })
        );
        exibirMensagemSucesso(); // Exibir mensagem estilizada
        exibirPerfil(); // Atualiza a exibição do perfil
    } else {
        alert('Por favor, preencha todos os campos do perfil.');
    }
}

// Exibir mensagem estilizada de sucesso
function exibirMensagemSucesso() {
    const modal = document.getElementById('modal-sucesso');
    modal.style.display = 'block';

    // Fechar automaticamente após 3 segundos
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Função para exibir o perfil salvo
function exibirPerfil() {
    const perfil = JSON.parse(localStorage.getItem('perfilEmpresa'));
    const fotoPerfil = localStorage.getItem('fotoPerfil');

    if (perfil) {
        document.getElementById('perfil-nome').textContent = perfil.nome || 'Nome não informado';
        document.getElementById('perfil-descricao').textContent = perfil.descricao || 'Descrição não informada';
        document.getElementById('perfil-contato').textContent = perfil.contato || 'Contato não informado';

        // Exibir foto de perfil, caso exista
        const perfilVisualizacao = document.getElementById('perfil-visualizacao');
        let imgExistente = perfilVisualizacao.querySelector('img');
        if (fotoPerfil) {
            if (!imgExistente) {
                imgExistente = document.createElement('img');
                imgExistente.style.width = '150px';
                imgExistente.style.height = '150px';
                imgExistente.style.borderRadius = '50%';
                perfilVisualizacao.prepend(imgExistente);
            }
            imgExistente.src = fotoPerfil;
        }

        // Alternar visibilidade entre o formulário e a visualização do perfil
        document.getElementById('form-perfil').style.display = 'none';
        document.getElementById('perfil-visualizacao').style.display = 'block';
    }
}

// Função para alternar para o modo de edição do perfil
function editarPerfil() {
    document.getElementById('form-perfil').style.display = 'block';
    document.getElementById('perfil-visualizacao').style.display = 'none';
}

// Mostrar pré-visualização da foto selecionada
document.getElementById('foto-perfil').addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const preview = document.getElementById('preview-foto');
        preview.src = event.target.result;
        preview.style.display = 'block';
    };
    reader.readAsDataURL(e.target.files[0]);
});

// Carregar dados do perfil ao abrir a página
window.onload = () => {
    exibirPerfil();
};
