// Carro:
// Atributos:

// Marca
// Modelo
// Ano de fabricação
// Métodos:

// Ligá-lo
// Desligá-lo
// Acelerar

class Carro {
  constructor(marca, modelo, anoFabricacao) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.estaLigado = false;
    this.velocidade = 0;
  }

  ligar() {
    this.estaLigado = true;
    console.log(`${this.marca} ${this.modelo} está ligado.`);
  }

  desligar() {
    this.estaLigado = false;
    console.log(`${this.marca} ${this.modelo} está desligado.`);
  }

  acelerar(metrosPorSegundo) {
    if (this.estaLigado) {
      this.velocidade += metrosPorSegundo;
      console.log(`${this.marca} ${this.modelo} acelerou para ${this.velocidade} m/s.`);
    } else {
      console.log(`${this.marca} ${this.modelo} não pode acelerar porque está desligado.`);
    }
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.ligar();
meuCarro.acelerar(10);
meuCarro.desligar();


//----------------------------------------------------------------/

// Conta Bancária:
// Atributos:

// Número da Conta
// Saldo
// Titular da Conta
// Métodos:

// Depositar
// Sacar
// Verificar Saldo

class ContaBancaria {
  constructor(numeroConta, saldoInicial, titular) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.titular = titular;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado na conta de ${this.titular}. Saldo atual: ${this.saldo}`);
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado na conta de ${this.titular}. Saldo atual: ${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente na conta de ${this.titular}.`);
    }
  }

  verificarSaldo() {
    console.log(`Saldo na conta de ${this.titular}: ${this.saldo}`);
  }
}

const minhaConta = new ContaBancaria("12345", 1000, "João");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.verificarSaldo();

//----------------------------------------------------------------

// Rede Social:
// Atributos:

// Nome da Rede Social
// Usuário Atual
// Número de Amigos
// Métodos:

// Criar Postagem
// Adicionar Amigo
// Enviar Mensagem
// javascript

class RedeSocial {
  constructor(nome, usuarioAtual, numAmigos) {
    this.nome = nome;
    this.usuarioAtual = usuarioAtual;
    this.numAmigos = numAmigos;
  }

  criarPostagem(conteudo) {
    console.log(`${this.usuarioAtual} postou: ${conteudo}`);
  }

  adicionarAmigo(novoAmigo) {
    this.numAmigos++;
    console.log(`${novoAmigo} foi adicionado como amigo de ${this.usuarioAtual}. Número de amigos: ${this.numAmigos}`);
  }

  enviarMensagem(destinatario, mensagem) {
    console.log(`Mensagem de ${this.usuarioAtual} para ${destinatario}: ${mensagem}`);
  }
}

const minhaRedeSocial = new RedeSocial("Facebook", "Alice", 300);
minhaRedeSocial.criarPostagem("Olá, amigos!");
minhaRedeSocial.adicionarAmigo("Bob");
minhaRedeSocial.enviarMensagem("Bob", "Como vai?");