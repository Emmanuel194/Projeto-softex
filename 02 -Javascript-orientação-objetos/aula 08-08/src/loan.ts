 import { Book } from "./book";
 import { user } from "./user";
 
  export class loan {
  private Id: number;
  private book: string;
  private user: string;
  private loanDate: number;
  private returnDate: number;

  constructor(Id:number, book:string, user:string, loanDate:number, returnDate:number,){
    this.Id = Id;
    this.book = book;
    this.user = user;
    this.loanDate = loanDate;
    this.returnDate = returnDate;

  }

  getId(){
    return this.Id;
  }

  setId(Id:number){
    this.Id = Id;
  }

  getbook(){
    return this.book;
  }

  setbook(book:string){
    this.book = book;
  }

  getuser(){
    return this.user;
  }

  setuser(user:string){
    this.user = user;
  }

  getloanDate(){
    return this.loanDate;
  }

  setloanDate(loanDate:number){
    this.loanDate = loanDate;
  }
  getreturnDate(){
    return this.returnDate;
  }

  setreturnDate(returnDate:number){
    this.returnDate = returnDate;
  }

}