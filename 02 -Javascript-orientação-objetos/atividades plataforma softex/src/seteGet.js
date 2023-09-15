class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome() {
    return this.nome;
  }


  getIdade() {
    return this.idade;
  }


  setNome(novoNome) {
    this.nome = novoNome;
  }


  setIdade(novaIdade) {
    if (novaIdade >= 0) {
      this.idade = novaIdade;
    } else {
      console.log("Idade inválida. A idade deve ser um número positivo.");
    }
  }
}


const pessoa1 = new Pessoa("João", 30);
console.log(`Nome: ${pessoa1.getNome()}, Idade: ${pessoa1.getIdade()}`);


pessoa1.setNome("Maria");
pessoa1.setIdade(25);

console.log(`Nome: ${pessoa1.getNome()}, Idade: ${pessoa1.getIdade()}`);