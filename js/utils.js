// Função para calcular o tempo decorrido
function timeSince(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} dia(s) atrás`;
    } else if (hours > 0) {
        return `${hours} hora(s) atrás`;
    } else if (minutes > 0) {
        return `${minutes} minuto(s) atrás`;
    } else {
        return "Agora mesmo";
    }
}
