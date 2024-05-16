let Val1 = document.querySelector("#Val1");
let Val2 = document.querySelector("#Val2");
let Val3 = document.querySelector("#Val3");
let Val4 = document.querySelector("#Val4");
let BotaoVerif = document.querySelector("#BotaoVerif");
let h2Resultado = document.querySelector("#h2Resultado");

function EncontrarMenor() {
    let ValA = Number(Val1.value);
    let ValB = Number(Val2.value);
    let ValC = Number(Val3.value);
    let ValD = Number(Val4.value);

    let Menor = ValA;

    if (ValB < Menor) {
        Menor = ValB;
    }
    if (ValC < Menor) {
        Menor = ValC;
    }
    if (ValD < Menor) {
        Menor = ValD;
    } else {
        h2Resultado.textContent = Menor
    }
}
BotaoVerif.onclick = function () {
    EncontrarMenor()
}
