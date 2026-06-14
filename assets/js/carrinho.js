function adicionarCarrinho(idProduto) {

    console.log("Adicionando produto:", idProduto);

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    const produto =
        produtos.find(p => p.id === idProduto);

    if (!produto) {

        console.error("Produto não encontrado!");

        return;
    }

    carrinho.push(produto);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContador();

    alert(
        `${produto.nome} adicionado ao carrinho!`
    );
}

function atualizarContador() {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    const contador =
        document.getElementById("contadorCarrinho");

    if (contador) {

        contador.textContent =
            carrinho.length;
    }
}

function carregarCarrinho() {

    const tbody =
        document.getElementById("itensCarrinho");

    if (!tbody) {

        return;
    }

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    tbody.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto, indice) => {

        total += produto.preco;

        tbody.innerHTML += `

            <tr>

                <td>${produto.nome}</td>

                <td>

                    R$ ${produto.preco.toFixed(2)}

                </td>

                <td>1</td>

                <td>

                    R$ ${produto.preco.toFixed(2)}

                </td>

                <td>

                    <button
                        class="btn btn-danger btn-sm"

                        onclick="removerItem(${indice})">

                        Remover

                    </button>

                </td>

            </tr>

        `;
    });

    const quantidade =
        document.getElementById("quantidadeItens");

    const valorTotal =
        document.getElementById("valorTotal");

    if (quantidade) {

        quantidade.textContent =
            carrinho.length;
    }

    if (valorTotal) {

        valorTotal.textContent =
            `R$ ${total.toFixed(2)}`;
    }

    const vazio =
        document.getElementById("carrinhoVazio");

    const conteudo =
        document.getElementById("conteudoCarrinho");

    if (vazio && conteudo) {

        if (carrinho.length === 0) {

            vazio.classList.remove("d-none");

            conteudo.classList.add("d-none");

        } else {

            vazio.classList.add("d-none");

            conteudo.classList.remove("d-none");
        }
    }
}

function removerItem(indice) {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.splice(indice, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarContador();

    carregarCarrinho();
}

function limparCarrinho() {

    if (
        !confirm(
            "Deseja realmente limpar o carrinho?"
        )
    ) {

        return;
    }

    localStorage.removeItem("carrinho");

    atualizarContador();

    carregarCarrinho();
}

function solicitarOrcamento() {

    let carrinho =
        JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;
    }

    let mensagem =
        "Olá! Gostaria de solicitar orçamento para:%0A%0A";

    carrinho.forEach(produto => {

        mensagem +=
            `• ${produto.nome} - R$ ${produto.preco.toFixed(2)}%0A`;
    });

    window.open(

        `https://wa.me/5544999999999?text=${mensagem}`,

        "_blank"
    );
}

document.addEventListener(

    "DOMContentLoaded",

    () => {

        atualizarContador();

        carregarCarrinho();
    }
);