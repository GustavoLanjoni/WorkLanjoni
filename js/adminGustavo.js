// Função para Exibir Usuários Cadastrados
window.onload = function () {
    const listaUsuarios = document.getElementById('lista-usuarios');
    const listaPlanos = document.getElementById('lista-planos');

    // Exibir Usuários Cadastrados
    if (localStorage.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhum usuário cadastrado.';
        listaUsuarios.appendChild(li);
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const usuarioKey = localStorage.key(i);
            const usuario = JSON.parse(localStorage.getItem(usuarioKey));

            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Nome:</strong> ${usuario.usuario}<br>
                <strong>E-mail:</strong> ${usuario.email}<br>
                <strong>Tipo:</strong> ${usuario.tipoUsuario}<br>
                <strong>Plano Ativo:</strong> ${usuario.planoAtivo || 'Nenhum plano ativo'}<br>
            `;
            listaUsuarios.appendChild(li);
        }
    }

    // Exibir Planos Assinados
    const planosAtivos = [];

    for (let i = 0; i < localStorage.length; i++) {
        const usuarioKey = localStorage.key(i);
        const usuario = JSON.parse(localStorage.getItem(usuarioKey));

        if (usuario.planoAtivo) {
            planosAtivos.push(usuario.planoAtivo);
        }
    }

    if (planosAtivos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhum plano ativo registrado.';
        listaPlanos.appendChild(li);
    } else {
        const planosUnicos = [...new Set(planosAtivos)];
        planosUnicos.forEach(plano => {
            const li = document.createElement('li');
            li.textContent = plano;
            listaPlanos.appendChild(li);
        });
    }
};
