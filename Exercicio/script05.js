let Valor1 = document.querySelector("#Valor1");
let Valor2 = document.querySelector("#Valor2");
let BotaoVerificar = document.querySelector("#BotaoVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function VerificarValores() {
    let ValorA = Number(Valor1.value);
    let ValorB = Number(Valor2.value);

    if (ValorA > ValorB) {
        h3Resultado.textContent = ValorA
    } else {
        h3Resultado.textContent = ValorB
    }
}

BotaoVerificar.onclick = function () {
    VerificarValores()
}