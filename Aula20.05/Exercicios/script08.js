let Valor1 = document.querySelector("#Valor1");
let BotaoVerificar = document.querySelector("#BotaoVerificar");
let h3Resultado = document.querySelector("#h3Resultado");

function VerificarValor(){
    let Valor = Number(Valor1.value);
    let Resultado = (h3Resultado.value);

    if(Valor % 2 === 0){
        Resultado = "Numero PAR!"
    } else {
        Resultado = "Numero IMPAR!"
    }
    h3Resultado.innerHTML = Resultado
}
BotaoVerificar.onclick = function(){
    VerificarValor()
}