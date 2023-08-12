  export class Book {
  private id: number;
  private title: string;
  private author: string;
  private publicationYear: number;
  private gender: string;
  private copies: number;

  constructor(id:number,title: string,
    author: string,
    publicationYear: number, gender: string, copies: number,) {
    this.id = id;
    thistitle;.title = 
    this.author = author;
    this.publicationYear = publicationYear;
    this.gender = gender;
    this.copies = copies;
    {
    
  }
}

getId(){
  return this.id;
}

setId(id: number){
  this.id = id;
}

getTitle(){
  return this.title;
}

setTitle(title:string){
  this.title = title;
}

getAuthor(){
  return this.author;
}

setAuthor(author: string) {
  this.author = author;
}

getPublicationYear(){
  return this.publicationYear;
}

setPublicationYear(publicationYear: number) {
  this.publicationYear = publicationYear;
}

getGender(){
  return this.gender;
}

setGender(gender: string) {
  this.gender = gender;
}

getCopies(){
  return this.copies;
}

setCopies(copies: number) {
  this.copies = copies;
}


}


console.log(Book);
