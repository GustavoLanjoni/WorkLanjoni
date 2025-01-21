// Seleciona o formulário e a lista de vagas
const form = document.querySelector('.busca form');
const jobList = document.querySelector('.vagas ul');

// Função para renderizar as vagas na tela
function renderJobs(filteredJobs) {
    jobList.innerHTML = ''; // Limpa a lista de vagas
    if (filteredJobs.length === 0) {
        jobList.innerHTML = '<li>Nenhuma vaga encontrada.</li>';
        return;
    }
    filteredJobs.forEach((job) => {
        const jobItem = document.createElement('li');
        jobItem.innerHTML = `
            <h4>${job.title}</h4>
            <p><strong>Local:</strong> ${job.location}</p>
            <p><strong>Empresa:</strong> ${job.company}</p>
            <p><strong>Postado:</strong> ${timeSince(job.postedAt)}</p>
            <a href="#" class="btn-secondary">Ver Detalhes</a>
        `;
        jobList.appendChild(jobItem);
    });
}

// Evento de submit do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const titleInput = form.querySelector('input[placeholder="Título, empresa ou palavra-chave"]').value.toLowerCase();
    const locationInput = form.querySelector('input[placeholder="Localização"]').value.toLowerCase();

    const filteredJobs = jobs.filter((job) => {
        const matchesTitle = job.title.toLowerCase().includes(titleInput);
        const matchesLocation = job.location.toLowerCase().includes(locationInput);
        return matchesTitle && matchesLocation;
    });

    renderJobs(filteredJobs);
});

// Renderiza todas as vagas inicialmente
renderJobs(jobs);
