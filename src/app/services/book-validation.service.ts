import { Injectable } from '@angular/core';
import { Book } from '../app_Model/Book';

const IDError: string = " ERROR - Book ID must be a number, try again";
const IDMissingError: string = " ERROR - Book ID is missing, try again";
const AuthorNameError: string = " ERROR - Author name is empty, try again";
const BookTitleError: string = " ERROR - Book title is empty, try again";
const BookTitleExistError: string = " ERROR - Book title is already exist in libary, try again";
const PublishedDateError: string = " ERROR - Published date is not valid, try again";



@Injectable()
export class BookValidationService {
  retrunMsg: string;
  constructor() { }

  ValidateBookData(book: Book, libary: Book[], action: string): string {
    this.retrunMsg = "";
    let _action = 0;
    if(action === "ADD"){
      _action = 1;
    }
    else{
      // Action is Edit, check if book title changed:
      let oldBookTitle = libary.find(bookFromLibary => bookFromLibary.BookID === book.BookID).BookTitle;
      if(oldBookTitle !== book.BookTitle){
        _action = 1;
      }
    }

    if(book.BookID === null){
      // Book ID is missing:
      this.retrunMsg = IDMissingError;
    }
    else if(book.AuthorName === null || book.AuthorName === ""){
      // Author name is missing:
      this.retrunMsg = AuthorNameError;
    }
    else if(this.isBookExistInLibary(book, libary,_action) < 0){
      // Book title is already in libary:
      this.retrunMsg = BookTitleExistError;
    }
    else if(book.BookTitle === null || book.BookTitle === ""){
      // Book title is missing:
      this.retrunMsg = BookTitleError;
    }
    else if(book.PublishedDate === null){
      // Published date is not valid::
      this.retrunMsg = PublishedDateError;
    }
    return this.retrunMsg;
  }
  
  isBookExistInLibary(book: Book, libary: Book[], action: number): number{
    for (let index = 0; index < libary.length; index++) {
      if(libary[index].BookTitle === book.BookTitle){
        action++;
        if( action > 1){
          return -1;
        }
      }
    }
    return 1;
  }
}
