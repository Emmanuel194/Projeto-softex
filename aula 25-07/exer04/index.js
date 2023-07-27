const prompt = require("prompt-sync")();

function exercercio04 () {
  let recebernum = prompt ('Digite sua Idade:')
  if (recebernum < 18) {
    console.log("você é menor de idade.");
  } else {
    (recebernum > 18),
    console.log("você é maior de idade, parabens.")
  }
}


exercercio04();