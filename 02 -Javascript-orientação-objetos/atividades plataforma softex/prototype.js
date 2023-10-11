
function Veiculo(modelo, marca, cor, numeroRodas) {
  this.modelo = modelo;
  this.marca = marca;
  this.cor = cor;
  this.numeroRodas = numeroRodas;
}

Veiculo.prototype.clone = function () {

  return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
};

Veiculo.prototype.represent = function () {
  return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
};


function Carro(modelo, marca, cor, numeroRodas, numeroPortas) {
  Veiculo.call(this, modelo, marca, cor, numeroRodas);
  this.numeroPortas = numeroPortas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.represent = function () {
  return `${Veiculo.prototype.represent.call(this)}, Número de Portas: ${this.numeroPortas}`;
};


function Moto(modelo, marca, cor, numeroRodas, cilindradas) {
  Veiculo.call(this, modelo, marca, cor, numeroRodas);
  this.cilindradas = cilindradas;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.represent = function () {
  return `${Veiculo.prototype.represent.call(this)}, Cilindradas: ${this.cilindradas}`;
};


function Aplicacao() {
  this.veiculos = [];
}

Aplicacao.prototype.criarVeiculos = function () {
 
  const carro1 = new Carro('Sedan', 'Toyota', 'Azul', 4, 4);
  const carro2 = new Carro('SUV', 'Ford', 'Preto', 4, 5);
  const carro3 = new Carro('Compacto', 'Honda', 'Vermelho', 4, 2);

  const moto1 = new Moto('Esportiva', 'Yamaha', 'Prata', 2, 600);
  const moto2 = new Moto('Custom', 'Harley-Davidson', 'Preto', 2, 1200);
  const moto3 = new Moto('Naked', 'Kawasaki', 'Verde', 2, 800);

  this.veiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);
};

Aplicacao.prototype.clonarVeiculos = function () {
  // Clona os veículos
  const veiculosClonados = this.veiculos.map((veiculo) => veiculo.clone());
  return veiculosClonados;
};

Aplicacao.prototype.imprimirVeiculos = function (veiculos) {
  veiculos.forEach((veiculo) => {
    console.log(veiculo.represent());
  });
};

// Execução
const app = new Aplicacao();
app.criarVeiculos();
const veiculosClonados = app.clonarVeiculos();
app.imprimirVeiculos(veiculosClonados);
