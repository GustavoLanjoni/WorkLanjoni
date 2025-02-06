function filterVagas() {
    // Obtém os valores dos filtros
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const cityQuery = document.getElementById('cityFilter').value.toLowerCase();
    const remoteQuery = document.getElementById('remoteFilter').value;
    const dateQuery = document.getElementById('dateFilter').value;
    const jobTypeQuery = document.getElementById('jobTypeFilter').value;

    // Filtra as vagas com base nos critérios
    const filteredVagas = vagas.filter(vaga => {
        let matchesSearch = vaga.nome.toLowerCase().includes(searchQuery);
        let matchesCity = vaga.cidade.toLowerCase().includes(cityQuery);
        let matchesRemote = remoteQuery ? vaga.tipoTrabalho === remoteQuery : true;
        let matchesDate = dateQuery ? isRecentDate(vaga.dataAnuncio, dateQuery) : true;
        let matchesJobType = jobTypeQuery ? vaga.tipoVaga === jobTypeQuery : true;

        return matchesSearch && matchesCity && matchesRemote && matchesDate && matchesJobType;
    });

    // Exibe as vagas filtradas
    exibirVagas(filteredVagas);
}

function isRecentDate(vagaData, query) {
    const today = new Date();
    const vagaDate = new Date(vagaData);
    const diffTime = today - vagaDate;

    switch(query) {
        case '24h':
            return diffTime <= 24 * 60 * 60 * 1000; // Últimas 24 horas
        case '3d':
            return diffTime <= 3 * 24 * 60 * 60 * 1000; // Últimos 3 dias
        case '7d':
            return diffTime <= 7 * 24 * 60 * 60 * 1000; // Últimos 7 dias
        case '14d':
            return diffTime <= 14 * 24 * 60 * 60 * 1000; // Últimos 14 dias
        default:
            return true;
    }
}
