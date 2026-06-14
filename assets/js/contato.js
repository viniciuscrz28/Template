function gerarOrcamento() {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho"))
        || [];

    let mensagem =
        "Olá! Gostaria de solicitar orçamento para:\n\n";

    carrinho.forEach(item => {

        mensagem +=
            `• ${item.nome}\n`;

    });

    window.open(

        `https://wa.me/5544999999999?text=${
            encodeURIComponent(mensagem)
        }`

    );
}