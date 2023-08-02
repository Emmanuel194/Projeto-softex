import { gerarEmpresas } from "./gerar-empresas.mjs";

const empresas = gerarEmpresas('10');

console.dir(empresas, {depth: null});


// achar a venda de maior valor dentro da função, e colocar um console.log passando esta venda.
//a ideia é usar um REDUCE, passando o menos valor da função gerarEmpresas.