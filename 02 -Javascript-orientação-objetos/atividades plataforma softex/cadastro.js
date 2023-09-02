// descrição das variáveis

const nome = "joao"; //dado tipo string
const salario = 3000.50; // tipo number
const idade = 28; // tipo number (inteiro)
const possuiDiploma = true; // tipo boolean


// Exibição dos dados cadastrados
console.log("Nome: " + nome);
console.log("Salário: R$" + salario.toFixed(2)); // Formata o salário com duas casas decimais
console.log("Idade: " + idade + " anos");
console.log("Possui Diploma: " + (possuiDiploma ? "Sim" : "Não"));