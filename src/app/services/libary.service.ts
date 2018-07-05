import { Injectable } from '@angular/core';
import { Book } from '../app_Model/Book';
import { BookValidationService } from './book-validation.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LibaryService {

  booksList: Book[];
  booksRemoteUrl: string = "https://raw.githubusercontent.com/danbk88/books/master/books.json";

  constructor(private bookValidationService: BookValidationService,
    private http: HttpClient ) { }

  importBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksRemoteUrl);
  }

  removeAllNonAlphaFromBookTitle(book: Book){
    book.BookTitle = book.BookTitle.replace(/[^a-zA-Z ]/g, "");
  }

  toTitleCase(myStr:string): string {
    var i, j, str, lowers, uppers;
    str = myStr.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  
    // Certain minor words should be left lowercase unless 
    // they are the first or last words in the string
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 
    'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0, j = lowers.length; i < j; i++)
      str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
        function(txt) {
          return txt.toLowerCase();
        });
  
    // Certain words such as initialisms or acronyms should be left uppercase
    uppers = ['Id', 'Tv'];
    for (i = 0, j = uppers.length; i < j; i++)
      str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), 
        uppers[i].toUpperCase());
  
    return str;
  }

  GetAllBooks() {
    return this.booksList;
  }

  GetBook(bookIndex: number): Book {
    return this.booksList[bookIndex];
  }

  AddBook(book: Book) {
    this.removeAllNonAlphaFromBookTitle(book);
    this.booksList.push(book);
  }

  DeleteBook(index: number) {
    this.booksList.splice(index, 1);
  }

  setLibary(books: Book[]){
    console.log(books);
    for (let index = 0; index < books.length; index++) {
      this.removeAllNonAlphaFromBookTitle( books[index]);
    }
    // Set titlecase to all book titles:
    for (let index = 0; index < books.length; index++) {
      books[index].BookTitle = this.toTitleCase( books[index].BookTitle);
    }
    this.booksList = books;
  }

  EditBook(newbook: Book) {
    this.updateBook(this.booksList.find(bookFromLibary => bookFromLibary.BookID === newbook.BookID),newbook);
  }

  updateBook(libaryBook: Book, NewBook: Book){
    libaryBook.AuthorName = NewBook.AuthorName;
    libaryBook.BookTitle = NewBook.BookTitle;
    this.removeAllNonAlphaFromBookTitle(libaryBook);
    libaryBook.PublishedDate = NewBook.PublishedDate;
  }

  ValidateBookData(book: Book, action: string): string{
    if(book.BookTitle !== null && book.BookTitle !== ""){
      this.removeAllNonAlphaFromBookTitle(book);
      book.BookTitle = this.toTitleCase(book.BookTitle);
    }
    return this.bookValidationService.ValidateBookData(book, this.booksList, action);
  }
}
