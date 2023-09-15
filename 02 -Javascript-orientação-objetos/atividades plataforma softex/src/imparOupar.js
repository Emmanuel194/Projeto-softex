function eParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}


console.log(eParOuImpar(4)); // Deverá imprimir "Par"
console.log(eParOuImpar(7)); // Deverá imprimir "Ímpar"