function filterVagas() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cityFilter = document.getElementById("cityFilter").value.toLowerCase();
    const remoteFilter = document.getElementById("remoteFilter").value;
    const dateFilter = document.getElementById("dateFilter").value;
    const jobTypeFilter = document.getElementById("jobTypeFilter").value;

    const vagasList = document.querySelectorAll(".vaga");

    vagasList.forEach((vaga) => {
        const vagaTitle = vaga.querySelector(".vaga-title").textContent.toLowerCase();
        const vagaCity = vaga.querySelector(".vaga-city").textContent.toLowerCase();
        const vagaType = vaga.querySelector(".vaga-type").textContent.toLowerCase();
        const vagaDate = vaga.querySelector(".vaga-date").textContent.toLowerCase();

        let matchesSearch = vagaTitle.includes(searchInput);
        let matchesCity = vagaCity.includes(cityFilter);
        let matchesRemote = remoteFilter ? vagaType.includes(remoteFilter) : true;
        let matchesDate = dateFilter ? vagaDate.includes(dateFilter) : true;
        let matchesJobType = jobTypeFilter ? vagaType.includes(jobTypeFilter) : true;

        if (matchesSearch && matchesCity && matchesRemote && matchesDate && matchesJobType) {
            vaga.style.display = "block";
        } else {
            vaga.style.display = "none";
        }
    });
}
