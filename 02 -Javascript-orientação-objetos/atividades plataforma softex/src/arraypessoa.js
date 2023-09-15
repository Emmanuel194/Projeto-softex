const pessoas = [
  {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira",
    cidade: "São Paulo"
  },
  {
    nome: "Bob",
    idade: 25,
    profissao: "Designer",
    cidade: "Rio de Janeiro"
  },
  {
    nome: "Carol",
    idade: 35,
    profissao: "Professor",
    cidade: "Belo Horizonte"
  },
  {
    nome: "David",
    idade: 28,
    profissao: "Médico",
    cidade: "Salvador"
  }
];

for (const pessoa of pessoas) {
  console.log("Dados da pessoa:");


  for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
  }
  console.log("\n");
}