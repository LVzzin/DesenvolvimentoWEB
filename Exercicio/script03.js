let Valor1 = document.querySelector("#Valor1");
let BotaoReajustar = document.querySelector("#BotaoReajustar");

function ReajusteDeValor() {
    let reajuste = Valor1.value * 0.01;
    alert("Saldo com reajuste de 1%: " + reajuste);
}
BotaoReajustar.onclick = function () {
    ReajusteDeValor()
}