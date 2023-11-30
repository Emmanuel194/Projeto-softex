class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senha-secreta"; 

  private constructor() {
    
  }

  static obterInstancia(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta.");
    } else {
      console.log("Acesso negado. Senha incorreta.");
    }
  }
}


const agenteSecreto = SistemaSeguranca.obterInstancia();
agenteSecreto.acessarBaseSecreta("senha-incorreta"); 
agenteSecreto.acessarBaseSecreta("senha-secreta");   
