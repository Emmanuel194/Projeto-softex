import { user } from "./user";

export class student {
  private Turma: string;
  private Num: number;
  private Registration: number;

  constructor(turma:string, num:number,registration:number) {
    this.Turma = turma;
    this.Num = num;
    this.Registration = registration;
  }

  getTurma(){
    return this.Turma;
  }

  setTurma(Turma:string){
    this.Turma = Turma;
  }

  getNumber(){
    return this.Num;
  }

  setNum(Num:number){
    this.Num = Num;
  }

  getRegistration(){
    return this.Registration;
  }

  setRegistration(Registration:number){
    this.Registration = Registration;
  }

}