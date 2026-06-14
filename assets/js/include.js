async function carregarComponentes() {

    const header =
        await fetch("include/header.html");

    document
        .getElementById("header")
        .innerHTML =
        await header.text();

    const sidebar =
        await fetch("include/sidebar.html");

    document
        .getElementById("sidebar")
        .innerHTML =
        await sidebar.text();

    const footer =
        await fetch("include/footer.html");

    document
        .getElementById("footer")
        .innerHTML =
        await footer.text();

    atualizarContador();
}

document.addEventListener(
    "DOMContentLoaded",
    carregarComponentes
);