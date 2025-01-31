// Substitua pelo seu Public Key do Mercado Pago
const publicKey = "APP_USR-24391161-62dc-4596-9fa2-c538ee4b5304";
const mercadopago = new MercadoPago(publicKey, {
    locale: "pt-BR",
});

// Criar um checkout ao clicar no botão
document.getElementById("checkout-btn").addEventListener("click", async () => {
    try {
        const response = await fetch("https://YOUR_NETLIFY_FUNCTION.netlify.app/.netlify/functions/create_preference", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Plano Profissional",
                price: 100.00
            }),
        });

        const data = await response.json();

        if (data.init_point) {
            window.location.href = data.init_point; // Redireciona para o pagamento
        } else {
            console.error("Erro ao gerar pagamento:", data);
        }
    } catch (error) {
        console.error("Erro na API:", error);
    }
});
