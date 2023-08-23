  import { Book } from "./book";
  import { loan } from "./loan";
  import { user } from "./user";
  
  export class library {
  private listBook: Book[] = [];
  private listUser: user[] = [];
  private listLoan: loan[] = [];

  addbook(new_book:Book){
    this.listBook.push(new_book);
  }

  adduser(new_user:user){
    this.listUser.push(new_user);
  }

  addloan(new_loan:loan){
    this.listLoan.push(new_loan);
  }


  listBook_ids = this.listBook.map(book=> book.getId());
  listUser_ids = this.listUser.map(user=> user.getId());

  
}