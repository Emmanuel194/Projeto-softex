const prompt = require ('prompt-sync')();

function exercercio09 () {
  let numPrimo = prompt ("Digite um número: ");
  if (numPrimo !== 1) {
  console.log("este numéro é primo: ");
} else {
  (numPrimo % 2 === 0)
  console.log("este número não é primo: ")
}
}

exercercio09();