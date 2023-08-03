// criação de classes em orientada a objetivo.


class cont {
  constructor() {
    this.numero = 2;
    this.saldo = 0;
  }
}

const cont1 = new cont();
console.log(cont1);



class veiculo {
  constructor (rodas, marca, cor, valor) {
    this.rodas = rodas;
    this.marca = marca;
    this.cor = cor;
    this.vaor = valor;

  }
}
const Uno = new veiculo (4, fiat, vermelho, 60000);
console.log(Uno);