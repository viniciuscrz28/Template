const produtos = [
    {
        id: 1,
        nome: "CLP Industrial",
        descricao: "Controle avançado de processos industriais.",
        preco: 3490
    },

    {
        id: 2,
        nome: "Sistema IoT Industrial",
        descricao: "Monitoramento remoto e análise em tempo real.",
        preco: 2190
    },

    {
        id: 3,
        nome: "Painel Automatizado",
        descricao: "Soluções completas para automação de máquinas.",
        preco: 4890
    },

    {
        id: 4,
        nome: "Inversor de Frequência",
        descricao: "Controle preciso da velocidade e torque de motores elétricos.",
        preco: 1890
    },

    {
        id: 5,
        nome: "Interface Homem-Máquina (IHM)",
        descricao: "Tela de operação para supervisão e controle de processos.",
        preco: 1590
    },

    {
        id: 6,
        nome: "Soft Starter",
        descricao: "Partida suave para motores, reduzindo impactos elétricos e mecânicos.",
        preco: 1290
    },

    {
        id: 7,
        nome: "Sensor Indutivo",
        descricao: "Detecção de objetos metálicos em linhas automatizadas.",
        preco: 180
    },

    {
        id: 8,
        nome: "Sensor Fotoelétrico",
        descricao: "Identificação de presença e posicionamento de objetos.",
        preco: 290
    },

    {
        id: 9,
        nome: "Fonte de Alimentação 24V",
        descricao: "Fornecimento de energia estável para dispositivos industriais.",
        preco: 220
    },

];


const listaProdutos = document.getElementById("lista-produtos");

produtos.forEach(produto => {

    listaProdutos.innerHTML += `
    
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">

    <div class="card h-100 shadow-sm">

        <img src="assets/img/produto${produto.id}.jpg"
            class="card-img-top"
            alt="${produto.nome}"
            style="height: 180px; object-fit: cover;">

        <div class="card-body d-flex flex-column">

            <h5 class="card-title">
                ${produto.nome}
            </h5>

            <p class="card-text">
                ${produto.descricao}
            </p>

            <h4 class="text-primary mt-auto">
                ${produto.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </h4>

            <button class="btn btn-primary w-100"
                onclick="adicionarCarrinho(${produto.id})">

                Adicionar ao Carrinho

            </button>

        </div>

    </div>

</div>

    `;
});