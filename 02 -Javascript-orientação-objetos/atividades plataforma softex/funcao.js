// funcao sem paramentro

function abrir () {

}


// funcao com parametro e um retorno de valor

const resultadoDasoma = soma(3,5);

function soma (a, b) {
  const resultado = a + b;


  return resultado;
}

// arrowfunction

const multiplicacao = (a, b) => {
  const resultado = a * b;

  return resultado;
}

const resultadoDaMultiplicacao = multiplicacao(3,5);