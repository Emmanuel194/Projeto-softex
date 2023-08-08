export class Veiculo {
  private modelo: string;
  private ano: number;
  private preco: number;
  private disponivel: boolean;

  constructor(modelo:string,ano: number,
    preco: number,
    disponivel: boolean,) {
    this.modelo = modelo;
    this.ano = ano;
    this.preco = preco;
    this.disponivel = disponivel;
    {
    
  }
}

getmodelo(): string {
  return this.modelo;
};

