import { student } from "./student";
import { user } from "./user";

export class teacher {
  private Student: string;

  constructor(student:string,){
    this.Student = student;
  }

  getStudent(){
    return this.Student;
  }

  setStudent(student:string){
    this.Student = student;
  }
}


