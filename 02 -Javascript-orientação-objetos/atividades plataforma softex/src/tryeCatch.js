try {
  // Solicita que o usuário insira dois números
  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const numero2 = parseFloat(prompt("Digite o segundo número:"));


  if (numero2 === 0 || isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Divisão por zero ou entrada inválida.");
  }


  const resultado = numero1 / numero2;
  console.log(`O resultado da divisão é: ${resultado}`);
} catch (erro) {
  
  console.error(`Ocorreu um erro: ${erro.message}`);
} finally {

  console.log("Fim do programa.");
}