// Solicita os três valores ao usuário
var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));


// Calcula a soma dos três valores
var soma = valor1 + valor2 + valor3;

// Calcula a média dos três valores (dividindo por 3)
var media = soma / 3;

// Exibe o resultado no console
console.log("A média dos três valores é: " + media);