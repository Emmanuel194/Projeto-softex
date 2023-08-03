const prompt = require ('prompt-sync')();

function exercercio03 () {
  let num1 = parseInt (prompt ("digite um valor:"));
  let num2 = parseInt (prompt ("digite um segundo valor:"));
  console.log("a soma dos dois valores é:", num1 + num2);
}

exercercio03();