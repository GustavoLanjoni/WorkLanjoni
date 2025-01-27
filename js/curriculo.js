function mostrarCurriculo(event) {
    const arquivoInput = event.target;
    const arquivo = arquivoInput.files[0];
    const previewArea = document.getElementById('curriculo-preview');
    const erroArea = document.querySelector('.feedback-erro');
    const nomeArquivo = arquivo.name;
    const tipoArquivo = arquivo.type;
    const quadradoUpload = document.getElementById('quadrado-upload');
    const textoUpload = quadradoUpload.querySelector('span');

    // Limpar a área de pré-visualização e erro anterior
    previewArea.innerHTML = '';
    erroArea.style.display = 'none';

    // Esconder o texto de instrução
    textoUpload.style.display = 'none';

    // Exibir a área de pré-visualização
    previewArea.style.display = 'flex';

    // Exibir o nome do arquivo
    const nomeElemento = document.createElement('div');
    nomeElemento.classList.add('arquivo-nome');
    nomeElemento.textContent = nomeArquivo;
    previewArea.appendChild(nomeElemento);

    // Se o arquivo for uma imagem, exibe a imagem
    if (tipoArquivo.startsWith('image/')) {
        const img = document.createElement('img');
        const reader = new FileReader();

        reader.onload = function(e) {
            img.src = e.target.result;
            previewArea.insertBefore(img, nomeElemento); // Insere a imagem antes do nome
        };

        reader.readAsDataURL(arquivo);
    } else if (tipoArquivo.startsWith('application/') || tipoArquivo.startsWith('text/')) {
        // Caso o arquivo seja PDF, DOC, DOCX, etc, apenas o nome será exibido
        previewArea.appendChild(nomeElemento);
    } else {
        // Caso o arquivo seja de outro tipo, exibe uma mensagem de erro
        erroArea.textContent = 'Formato de arquivo não suportado. Por favor, selecione um arquivo de imagem, PDF ou documento.';
        erroArea.style.display = 'block';
        previewArea.style.display = 'none'; // Esconde a pré-visualização
        textoUpload.style.display = 'block'; // Reexibe o texto de instrução
    }
}
