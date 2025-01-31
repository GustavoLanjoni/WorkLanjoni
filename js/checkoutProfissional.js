document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    const submitButton = form.querySelector('button[type="submit"]');

    // Função para validar o formulário
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const cardNumber = document.getElementById('card_number').value;
        const expirationDate = document.getElementById('expiration_date').value;
        const cvv = document.getElementById('cvv').value;
        const address = document.getElementById('address').value;

        // Validar se os campos estão preenchidos
        if (name && email && cardNumber && expirationDate && cvv && address) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Adiciona um ouvinte de evento para cada campo do formulário
    form.addEventListener('input', validateForm);

    // Ao enviar o formulário, simular um processo de pagamento
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Pagamento processado com sucesso!');

        // Aqui você pode fazer a integração com a API de pagamento
        // Como exemplo: enviar os dados para um servidor ou um gateway de pagamento
        form.reset();
        submitButton.disabled = true;
    });

    // Desabilitar o botão de envio inicialmente
    submitButton.disabled = true;
});
