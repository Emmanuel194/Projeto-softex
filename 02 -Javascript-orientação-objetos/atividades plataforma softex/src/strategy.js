
class Operation {
  execute(num1, num2) {}
}


class Addition extends Operation {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class Subtraction extends Operation {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class Multiplication extends Operation {
  execute(num1, num2) {
    return num1 * num2;
  }
}


function calculator() {
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));
  const operation = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");

  let strategy;

  
  if (operation === "+") {
    strategy = new Addition();
  } else if (operation === "-") {
    strategy = new Subtraction();
  } else if (operation === "*") {
    strategy = new Multiplication();
  } else {
    console.log("Operação inválida");
    return;
  }

  const result = strategy.execute(num1, num2);
  console.log(`Resultado da operação: ${result}`);
}


calculator();