class Sanduiche {
  custo() {
    return 0;
  }
}


class FrangoAssado extends Sanduiche {
  custo() {
    return 4.50;
  }
}


class Pepperoni extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  custo() {
    return this.sanduiche.custo() + 0.99;
  }
}


class QueijoMussarelaRalado extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  custo() {
    return this.sanduiche.custo() + 2.00;
  }
}


let sanduiche = new FrangoAssado();  
sanduiche = new Pepperoni(sanduiche);  
sanduiche = new QueijoMussarelaRalado(sanduiche);  


console.log(`Sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado custa $${sanduiche.custo().toFixed(2)}`);