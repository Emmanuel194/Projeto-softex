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

  if(this.ValidateIdbook(listBook_Ids, id_book) && this.ValidateIdUser(listUser_ids, id_user)){
  const book_finded = this.searchBook(listBook_ids, id_book);
  const user_finded = this.searchUser(listuser_ids, id_user);
  const new_loan = new loan(Id_Loan, book_finded, user_finded, loan_Date, return_Date);
  this.listLoan.push(new_loan);
  console.log(`Empréstimo realizado com sucesso!${Id_loan}`);
  }
}