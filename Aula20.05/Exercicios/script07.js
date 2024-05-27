let Valor1 = document.querySelector("#Valor1");
let Valor2 = document.querySelector("#Valor2");
let BotaoVerificar = document.querySelector("#BotaoVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function verificarValores() {
    let ValoresA = Number(Valor1.value);
    let ValoresB = Number(Valor2.value);
    let Resultado = (h3Resultado.value);

    if (ValoresA > ValoresB) {
        Resultado = "Valor 1 Maior!"

    } else if (ValoresA === ValoresB) {
        Resultado = "Valores Iguais!"
    } else {
        Resultado = "Valor 1 Menor!"
    }
    h3Resultado.innerText = Resultado
}
BotaoVerificar.onclick = function () {
    verificarValores()
}