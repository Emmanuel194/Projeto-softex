// Declaração de variáveis do tipo boolean, int, string e symbol com valor undefined
let booleanVar;
let intVar;
let stringVar;
let symbolVar;

// Exibindo os valores iniciais (undefined)
console.log("Valores iniciais:");
console.log("booleanVar:", booleanVar);
console.log("intVar:", intVar);
console.log("stringVar:", stringVar);
console.log("symbolVar:", symbolVar);

// Atribuindo valores nulos às variáveis
booleanVar = null;
intVar = null;
stringVar = null;
symbolVar = null;

// Exibindo os valores após atribuição de nulos
console.log("\nValores após atribuição de nulos:");
console.log("booleanVar:", booleanVar);
console.log("intVar:", intVar);
console.log("stringVar:", stringVar);
console.log("symbolVar:", symbolVar);

// Atribuindo valores de diferentes tipos às variáveis
booleanVar = true;
intVar = 42;
stringVar = "Olá, mundo!";
symbolVar = Symbol("meuSymbol");

// Exibindo os valores após atribuição de tipos diferentes
console.log("\nValores após atribuição de tipos diferentes:");
console.log("booleanVar:", booleanVar);
console.log("intVar:", intVar);
console.log("stringVar:", stringVar);
console.log("symbolVar:", symbolVar);