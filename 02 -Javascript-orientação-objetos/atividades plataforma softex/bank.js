// Definindo o objeto "banco"
const banco = {
  conta: 123456,          // Número da conta
  saldo: 1000.00,         // Saldo inicial
  tipoConta: "Corrente",  // Tipo de conta
  agencia: "Agência A",   // Agência bancária

  // Método para buscar o saldo atual
  buscarSaldo: function() {
    return this.saldo;
  },

  // Método para realizar um depósito
  deposito: function(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    } else {
      return "Valor de depósito inválido.";
    }
  },

  // Método para realizar um saque
  saque: function(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    } else {
      return "Saldo insuficiente ou valor de saque inválido.";
    }
  },

  // Método para obter o número da conta
  numeroDaConta: function() {
    return this.conta;
  }
};

// Exemplos de uso
console.log(banco.buscarSaldo());        // Exibe o saldo atual
console.log(banco.deposito(500.50));     // Realiza um depósito
console.log(banco.saque(200.25));        // Realiza um saque
console.log(banco.numeroDaConta());      // Exibe o número da conta