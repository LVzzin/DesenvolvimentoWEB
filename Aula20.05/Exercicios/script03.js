let Valor1 = document.querySelector("#Valor1");
let Valor2 = document.querySelector("#Valor2");
let h3Resultado = document.querySelector("#h3Resultado");
let BotaoCalcular = document.querySelector("#BotaoCalcular");

function Calculadora() {
    let soma = Number(Valor1.value) + Number(Valor2.value);
    let subtracao = Number(Valor1.value) - Number(Valor2.value);
    let multiplicacao = Number(Valor1.value) * Number(Valor2.value);
    let divisao = Number(Valor1.value) / Number(Valor2.value);

    h3Resultado.innerHTML = "Soma:" + (soma) + "<br>Subtracao:" + (subtracao) + "<br>Multiplicacao:" + (multiplicacao) + "<br>Divisao:" + (divisao);
}
BotaoCalcular.onclick = function () {
    Calculadora();
}