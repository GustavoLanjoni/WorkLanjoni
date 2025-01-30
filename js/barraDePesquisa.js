window.onload = function () {
    const vagasPublicadas = JSON.parse(localStorage.getItem('vagasPublicadas')) || [];
    const vagasContainer = document.getElementById('vagasContainer');
    const searchInput = document.getElementById('searchInput');
    const remoteFilter = document.getElementById('remoteFilter');
    const dateFilter = document.getElementById('dateFilter');
    const jobTypeFilter = document.getElementById('jobTypeFilter');
    const cityFilter = document.getElementById('cityFilter');

    // Função para exibir as vagas
    function exibirVagas(vagas) {
        vagasContainer.innerHTML = ''; // Limpa o conteúdo existente
        if (vagas.length > 0) {
            vagas.forEach((vaga, index) => {
                const vagaElement = document.createElement('div');
                vagaElement.classList.add('vaga');

                vagaElement.innerHTML = `
                    <div class="vaga-card">
                        <h3>${vaga.nome}</h3>
                        <p><strong>Descrição:</strong> ${vaga.descricao}</p>
                        <p><strong>Local:</strong> ${vaga.local}</p>
                        <button onclick="verDetalhes(${index})">Ver Detalhes</button>
                    </div>
                `;
                vagasContainer.appendChild(vagaElement);
            });
        } else {
            vagasContainer.innerHTML = '<p>Não há vagas disponíveis.</p>';
        }
    }

    // Função para ver detalhes da vaga
    function verDetalhes(index) {
        const vaga = vagasPublicadas[index];
        alert(`Detalhes da Vaga:\n\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nLocal: ${vaga.local}\nData de Publicação: ${vaga.dataPublicacao}`);
    }

    // Função para filtrar as vagas com base nos critérios
    function filterVagas() {
        const termoBusca = searchInput.value.toLowerCase();
        const remoto = remoteFilter.value;
        const data = dateFilter.value;
        const tipoVaga = jobTypeFilter.value;
        const cidade = cityFilter.value.toLowerCase();

        const vagasFiltradas = vagasPublicadas.filter(vaga => {
            const matchesTermoBusca = vaga.nome.toLowerCase().includes(termoBusca) ||
                                      vaga.descricao.toLowerCase().includes(termoBusca) ||
                                      vaga.local.toLowerCase().includes(termoBusca);
            
            const matchesRemoto = remoto ? vaga.remoto === remoto : true;
            const matchesData = data ? new Date(vaga.dataPublicacao) >= new Date(new Date() - (parseInt(data) * 24 * 60 * 60 * 1000)) : true;
            const matchesTipoVaga = tipoVaga ? vaga.tipoVaga === tipoVaga : true;
            const matchesCidade = cidade ? vaga.local.toLowerCase().includes(cidade) : true;

            return matchesTermoBusca && matchesRemoto && matchesData && matchesTipoVaga && matchesCidade;
        });

        exibirVagas(vagasFiltradas);
    }

    // Exibe as vagas inicialmente
    exibirVagas(vagasPublicadas);

    // Adiciona evento de filtro para o campo de busca
    searchInput.addEventListener('input', filterVagas);
    remoteFilter.addEventListener('change', filterVagas);
    dateFilter.addEventListener('change', filterVagas);
    jobTypeFilter.addEventListener('change', filterVagas);
    cityFilter.addEventListener('input', filterVagas);
};
