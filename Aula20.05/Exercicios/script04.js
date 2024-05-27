let Sabor1 = document.querySelector("#Sabor1");
let Sabor2 = document.querySelector("#Sabor2");
let Sabor3 = document.querySelector("#Sabor3");
let Sabor4 = document.querySelector("#Sabor4");
let Refri = document.querySelector("#Refri");
let BotaoValor = document.querySelector("#BotaoValor");
let h3Resultado = document.querySelector("#h3Resultado");

function Pedido() {
    let sabores = (Sabor1.value + " " + Sabor2.value + " " + Sabor3.value + " " + Sabor4.value);

    let Bebida = Number(Refri.value) * 7 + 48;

    h3Resultado.textContent = sabores + "=" + Bebida;
}
BotaoValor.onclick = function () {
    Pedido()
}