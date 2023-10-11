
class Pato {
  grasnar() {
    console.log('Pato está grasnando.');
  }

  voar() {
    console.log('Pato está voando.');
  }
}


class Galinha {
  cacarejar() {}
  bicar() {}
}


class AdaptadorPato {
  constructor(pato) {
    this.pato = pato;
  }

  cacarejar() {
    this.pato.grasnar();
  }

  bicar() {
    console.log('Pato não bica, mas pode adaptar o grasno.');
  }
}


class AdaptadorPatoDemo {
  static usarGalinha(galinha) {
    console.log('Ação da Galinha:');
    galinha.cacarejar();
    galinha.bicar();
  }
}


const pato = new Pato();  
const adaptador = new AdaptadorPato(pato);  

console.log('Usando um objeto Pato como se fosse uma Galinha:');
AdaptadorPatoDemo.usarGalinha(adaptador);