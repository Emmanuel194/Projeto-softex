export class user {
 private Nome: string;
 private Id: number;


 constructor(nome:string, id:number,) {
  this.Nome = nome;
  this.Id = id;
 }

 getNome(){
  return this.Nome;
 }

 setNome(Nome: string){
  this.Nome = Nome;
 }

getId(){
  return this.Id;
}

setID(id: number){
  this.Id = id;
}



 
}