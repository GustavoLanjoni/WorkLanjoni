const express = require("express");
const mercadopago = require("mercadopago");

const app = express();
app.use(express.json());

// Configurar Mercado Pago
mercadopago.configure({
    access_token: "APP_USR-5993932174646917-013111-e4cd72e3d0f7698ae162a2c84a2bfdef-393981790"
});

// Rota para criar link de pagamento
app.post("/create_preference", async (req, res) => {
    try {
        let preference = {
            items: [
                {
                    title: req.body.title,
                    unit_price: Number(req.body.price),
                    quantity: 1,
                },
            ],
            back_urls: {
                success: "https://seusite.com/sucesso",
                failure: "https://seusite.com/falha",
                pending: "https://seusite.com/pendente",
            },
            auto_return: "approved",
        };

        const response = await mercadopago.preferences.create(preference);
        res.json({ init_point: response.body.init_point });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
