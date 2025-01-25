function carregarPerfil() {
    const nome = localStorage.getItem('nomeEmpresa') || '';
    const localidade = localStorage.getItem('localidadeEmpresa') || '';
    const descricao = localStorage.getItem('descricaoEmpresa') || '';
    const contato = localStorage.getItem('contatoEmpresa') || '';
    const foto = localStorage.getItem('fotoPerfil');

    document.getElementById('nome-empresa').value = nome;
    document.getElementById('localidade-empresa').value = localidade;
    document.getElementById('descricao-empresa').value = descricao;
    document.getElementById('contato-empresa').value = contato;

    const preview = document.getElementById('preview-foto');
    if (foto) {
        preview.src = foto;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}
