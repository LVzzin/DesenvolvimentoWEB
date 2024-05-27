let Valor1 = document.querySelector("#Valor1");
let h3Resultado = document.querySelector("#h3Resultado");
let BotaoCalcular = document.querySelector("#BotaoCalcular");

function Ingredientes(){
    let ovos = Number(Valor1.value) * 2;
    let queijo = Number(Valor1.value) * 50;

    h3Resultado.innerHTML = "<br>Ovos:" + (ovos) + "<br>Gramas de Queijo:" + (queijo);
}
BotaoCalcular.onclick = function(){
    Ingredientes();
}