let Valor = document.querySelector("#Valor");
let BotaoVerif = document.querySelector("#BotaoVerif");

function VerificarImpar(){
    ValorA = Number(Valor.value);

    if(ValorA % 2 != 0){
        alert("Impar")
    } else{
        alert("Numero Par")
    }
}
BotaoVerif.onclick = function(){
    VerificarImpar();
}