//Media Aritmetica(somar e dividir por 3)
let Nota1 = document.querySelector("#Nota1");
let Nota2 = document.querySelector("#Nota2");
let Nota3 = document.querySelector("#Nota3");

function SomarMediaAritmetica() {
    let Aritmetica = (Number(Nota1.value) + Number(Nota2.value) + Number(Nota3.value)) / 3;
    if (Aritmetica >= 6.0) {
        alert("Aluno APROVADO1!" + Aritmetica);
    } else {
        alert("Aluno REPROVADO1!" + Aritmetica);
    }
    return Aritmetica
}
BotaoCalcular.onclick = function () {
    SomarMediaAritmetica();
}

//Media Ponderada
let NotaA = document.querySelector("#NotaA");
let NotaB = document.querySelector("#NotaB");
let NotaC = document.querySelector("#NotaC");

function SomarPonderada() {
    let Ponderada = (((3 * Number(NotaA.value)) + (2 * Number(NotaB.value)) + (5 * Number(NotaC.value))) / 10);
    if (Ponderada >= 6.0) {
        alert("Aluno APROVADO2!" + Ponderada);
    } else {
        alert("Aluno REPROVADO2!" + Ponderada);
    }
    return Ponderada;
}
BotaoCalcular2.onclick = function () {
    SomarPonderada();
}

//Soma das duas Medias
let Aritmetica = document.querySelector("#Aritmetica");
let Ponderada = document.querySelector("#Ponderada");

function SomarMedias() {
    let SomarM = SomarMediaAritmetica() + SomarPonderada();
    if (SomarM >= 6.0) {
        alert("Aluno APROVADO3!" + SomarM);
    } else {
        alert("Aluno REPROVADO3!" + SomarM);
    }
    return SomarM;
}
BotaoCalcular3.onclick = function () {
    SomarMedias();
}

//Media das Medias
function MediasdasMedias() {
    let MM = Number(SomarMedias.value) / 2;
    if (MM >= 6.0) {
        alert("Aluno APROVADO3!" + MM);
    } else {
        alert("Aluno REPROVADO3!" + MM);
}
}
BotaoCalcular4.onclick = function () {
    MediasdasMedias();
}