class pessoa {
  constructor (nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
};

const character = new pessoa ('aline', 24); // Pessoa 1
console.log(character);
const character1 = new pessoa ('ewerton', 26); // PESSOA 2
console.log(character1)


  class aluno extends pessoa {
    constructor(nome, idade, matricular) {
      super(nome, idade);
      this.matricular = matricular;
    }
  }  // CLASS PARA HEDAR OS ATRIBUTOS DE PESSOA NA CLASS PAI DE CIMA. --
  //A TAG SUPER É USSADA PARA ACESSAR UM OBJETO NA CLASSE PAI.

  const aluno1 = new aluno ('liandra', 30, 12356);
  console.log(aluno1)  // class aluno com atributo de matricular.


  class animal {
    falar() {
      // aqui nao colocarei nenhum atributo pós cada animal tera o seu proprio som.
    }
  }

  class cachorro extends animal {
    falar() {
      console.log ('AU AU')
    }
  };


  class gato extends animal {
    falar() {
      console.log('mial, mial')
    }
  };

  class cabra extends animal {
    falar() {
      console.log("bee!! beeeeeee")
    }
  };

  console.log(cachorro,gato,cabra);