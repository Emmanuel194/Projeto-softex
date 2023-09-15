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

class Funcionario extends Pessoa {
  constructor(nome, idade, cargo, salario) {
    super(nome, idade);
    this.cargo = cargo;
    this.salario = salario;
  }

  getCargo() {
    return this.cargo;
  }

  getSalario() {
    return this.salario;
  }

  setCargo(novoCargo) {
    this.cargo = novoCargo;
  }

  setSalario(novoSalario) {
    if (novoSalario >= 0) {
      this.salario = novoSalario;
    } else {
      console.log("Salário inválido. O salário deve ser um número positivo.");
    }
  }
}


const pessoa1 = new Pessoa("João", 30);
console.log(`Nome: ${pessoa1.getNome()}, Idade: ${pessoa1.getIdade()}`);

const funcionario1 = new Funcionario("Maria", 25, "Desenvolvedor", 5000);
console.log(`Nome: ${funcionario1.getNome()}, Idade: ${funcionario1.getIdade()}, Cargo: ${funcionario1.getCargo()}, Salário: ${funcionario1.getSalario()}`);


pessoa1.setNome("José");
funcionario1.setSalario(6000);

console.log(`Nome: ${pessoa1.getNome()}, Idade: ${pessoa1.getIdade()}`);
console.log(`Nome: ${funcionario1.getNome()}, Idade: ${funcionario1.getIdade()}, Cargo: ${funcionario1.getCargo()}, Salário: ${funcionario1.getSalario()}`);