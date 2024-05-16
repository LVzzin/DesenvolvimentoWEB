let Codigo = document.querySelector("#Codigo");
let BotaoPesquisar = document.querySelector("#BotaoPesquisar");

function CodigosMateriais() {
    let CodigoA = Codigo.value;

    if (CodigoA === '001') {
        alert("Parafuso");
    }
    else if (CodigoA === '002') {
        alert("Porca");
    }
    else if (CodigoA === '003') {
        alert("Prego");
    } else {
        alert("Diversos!")
    }
}
BotaoPesquisar.onclick = function () {
    CodigosMateriais()
}