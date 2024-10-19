const generateCorrelationID = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9); 
};

const createCharge = async (valor) => {
    
    try {
    
        const correlationID = generateCorrelationID(); // chamar o correlationID randomico
        const chargeStatus = document.getElementById('chargeStatus'); // Elemento para exibir o status da cobrança
        
        console.log("Valor do produto: ", valor); // valor do produto

        const response = await fetch('https://api.openpix.com.br/api/v1/charge', {
        method: 'POST',
        headers: {
            'Authorization': `AppId`, //appID
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            value: valor, // VALOR EM CENTAVOS
            correlationID: correlationID, 
            comment: 'Cobrança Teste', // COMENTÁRIO
            expiresIn: 3600, // DURAÇÃO DA COBRANÇA (1 HORA)
            customer: {        //INFO CLIENTE
                name: "Lucas Aprigio",
                taxID: "31324227036",
                email: "LUCASAPRIGIO@GMAIL.com",
                phone: "5521999684378"
            },
        })
        });

        console.log("Resposta recebida, status: ", response.status); // Verifica a resposta

        const data = await response.json();
        if (response.ok) {
            chargeStatus.textContent = `Cobrança criada com sucesso! ID: ${data.charge.id}`;
        } else {
            chargeStatus.textContent = `Erro ao criar cobrança: ${data.message}`;
        }

    } catch (error) {
        chargeStatus.textContent = `Erro: ${error.message}`;
    }

  };
  document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', (event) => {
        const produto = event.target.closest('.card-content'); // Pega o produto correspondente ao botão
        const valor = produto.getAttribute('data-valor'); // Pega o valor do produto
        createCharge(valor); // Chama a função para criar a cobrança com o valor do produto
    });
});