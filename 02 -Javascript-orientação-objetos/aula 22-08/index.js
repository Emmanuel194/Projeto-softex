const button = document.getElementById("botao1");
const input = document.getElementById("nome");
const inputSenha = document.getElementById("senha");


console.log(button,nome,senha);

button.addEventListener("click", lidarComCliker);


function lidarComCliker(evento){
 const valorDoCampo = input.value;
 alert(valorDoCampo);
}