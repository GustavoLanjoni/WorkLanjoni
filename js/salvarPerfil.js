function salvarPerfil() {
    if (!validarFormulario()) return;

    const nome = document.getElementById('nome-empresa').value.trim();
    const localidade = document.getElementById('localidade-empresa').value.trim();
    const descricao = document.getElementById('descricao-empresa').value.trim();
    const contato = document.getElementById('contato-empresa').value.trim();

    localStorage.setItem('nomeEmpresa', nome);
    localStorage.setItem('localidadeEmpresa', localidade);
    localStorage.setItem('descricaoEmpresa', descricao);
    localStorage.setItem('contatoEmpresa', contato);

    const foto = document.getElementById('foto-perfil').files[0];
    if (foto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('fotoPerfil', e.target.result);
            carregarPerfil();
            alert('Perfil salvo com sucesso!');
        };
        reader.readAsDataURL(foto);
    } else {
        carregarPerfil();
        alert('Perfil salvo com sucesso!');
    }
}
