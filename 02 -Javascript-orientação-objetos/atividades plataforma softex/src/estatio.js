class MinhaClasse {
  constructor(nome) {
    this.nome = nome;
  }

 
  saudacao() {
    console.log(`Olá, ${this.nome}!`);
  }


  static metodoEstatico() {
    console.log("Este é um método estático.");
  }
}


const minhaInstancia = new MinhaClasse("João");


minhaInstancia.saudacao();


MinhaClasse.metodoEstatico();