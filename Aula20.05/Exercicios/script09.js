let inpAlunos = document.querySelector("#inpAlunos");
let inpTurmas = document.querySelector("#inpTurmas");
let BotaoVerificar = document.querySelector("#BotaoVerificar");
let h3Resultado = document.querySelector("#h3Resultado");
let h3Resultado2 = document.querySelector("#h3Resultado2");

function Verificar(){
    let Alunos = Number(inpAlunos.value);
    let Turmas = Number(inpTurmas.value);
    let alunosParaTurmas = Math.floor(Alunos / Turmas);
    let alunosSemTurmas = Math.round(Alunos % Turmas);

    h3Resultado.innerHTML = "Alunos para cada turma:" + alunosParaTurmas;
    h3Resultado2.innerHTML = "Alunos sem turmas:" + alunosSemTurmas;
}
BotaoVerificar.onclick = function(){
    Verificar()
}