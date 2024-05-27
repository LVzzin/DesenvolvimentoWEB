let Valor1 = document.querySelector("#Valor1");
let BotaoReajustar = document.querySelector("#BotaoReajustar");
let h3Resultado = document.querySelector("#h3Resultado");

function Cotacao(){
    let Dolar = Number(Valor1.value)

    let Resultado = (Dolar / 100) * 101;
    let Resultado2 = (Dolar / 100) * 102;
    let Resultado3 = (Dolar / 100) * 105;
    let Resultado4 = (Dolar / 100) * 110;

    h3Resultado.innerHTML = "<br>1%:" + (Resultado) + "<br>2%:" + (Resultado2) + "<br>5%:" + (Resultado3) + "<br>10%:" + (Resultado4);
}
BotaoReajustar.onclick = function(){
    Cotacao();
}