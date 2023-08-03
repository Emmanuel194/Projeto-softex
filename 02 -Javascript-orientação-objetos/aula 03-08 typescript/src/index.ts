class pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`'Olá', ${this.nome}. sua idade é: ${this.idade}`);
  }
}

class aluno extends pessoa {
  matricular: number;

  constructor(nome:string, idade:number, matricular:number) {
    super(nome, idade);
    this.matricular = matricular;
  }
} 


// COMANDOS.
const pessoa1 = new pessoa ("joao", 30);
const pessoa2 = new pessoa("lucas", 20);
const aluno1 = new pessoa ("josefa", 30,);
aluno1.apresentar();
pessoa2.apresentar();





pessoa1.apresentar();


