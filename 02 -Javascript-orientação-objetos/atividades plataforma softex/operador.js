const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));


const media = (nota1 + nota2 + nota3) / 3;

const resultado = media >= 7.0 ? "Aprovado" : "Reprovado";

console.log("O aluno está " + resultado); // restuldado das 3 notas.



const nota4 = parseFloat(prompt("Digite a primeira nota obtida: "));
const nota5 = parseFloat(prompt("Digite a segunda nota obtida: "));

const mediaAtual = (nota4 + nota5) / 2;


const notaMinima = (7.0 - (mediaAtual * 2));


console.log("Para passar com média 7.0, você precisa tirar pelo menos " + notaMinima.toFixed(2) + " na próxima prova.");