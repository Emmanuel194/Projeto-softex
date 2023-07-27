const prompt = require ("prompt-sync") ();

function exercercio05 () {
  let invitenumber = prompt ("Digite um número: ");

  if (invitenumber % 2 === 0) {
    console.log("este número é par");
  } else {
    (invitenumber % 2 !== 0),
    console.log ("este numero é impar");
  
  }
}


exercercio05();