const PromptSync = require("prompt-sync");

const valor1 = parseFloat(PromptSync("digite o primeiro valor:"));
const operar = PromptSync("digite o operador: (+, -, *. /");
const valor2 = parseFloat(PromptSync("digite o segundo valor:"));

function calcular(valor1, operador, valor2) {
  switch (operador) {
    case "+":
      return valor1 + valor2;
      break;
    case "-":
      return valor1 - valor2;
      break;
    case "*":
      return valor1 * valor2;
      break;
    case "/":
      return valor1 / valor2;
      break;
      if (valor === 0) {
        return "não é possivel dividir por zero";
      } else {
        return valor1 / valor2;
      }
      default:
        return "operador invalido";
        }
 }






 const resultado = calcular(valor1,operar1,valor2);
 console.log("resultado:",resultado);