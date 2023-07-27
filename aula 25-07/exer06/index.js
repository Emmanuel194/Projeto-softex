const prompt = require("prompt-sync")();

function exercercio06 () {
  let receberMed1 = prompt ("digite um número: ");
  let receberMed2 = prompt ("digite um segundo número: ");
  let receberMed3 = prompt ("digite um número: ");
  let valorTotal = (receberMed1,receberMed2,receberMed3);
  console.log("a média dos 3 números são: " + valorTotal / 3);
}




exercercio06();

