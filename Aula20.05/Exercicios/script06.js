let Valor1 = document.querySelector("#Valor1");
let BotaoCalcular = document.querySelector("#BotaoCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function MediaAnual() {
    let Valor = Number(Valor1.value);
    let Resultado = (h3Resultado.value)

    if (Valor < 6 && Valor >= 4) {
        Resultado = "Precisa fazer prova SUBSTITUTIVA!"
    }
    else if (Valor > 6) {
        Resultado = "Aprovado"
    } else {
        Resultado = "Reprovado!"
    }
    h3Resultado.innerText = Resultado
}
BotaoCalcular.onclick = function () {
    MediaAnual()
}