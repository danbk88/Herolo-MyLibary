import { Component, OnInit } from '@angular/core';
import { Book } from '../../app_Model/Book';
import { LibaryService } from '../../services/libary.service';
import { MatDialog } from '@angular/material';
import { AddBookPopUpComponent } from '../../pop-ups/add-book-pop-up/add-book-pop-up.component';
import { EditBookPopUpComponent } from '../../pop-ups/edit-book-pop-up/edit-book-pop-up.component';
import { DeleteBookPopUpComponent } from '../../pop-ups/delete-book-pop-up/delete-book-pop-up.component';

@Component({
  selector: 'app-books-libary',
  templateUrl: './books-libary.component.html',
  styleUrls: ['./books-libary.component.css']
})
export class BooksLibaryComponent implements OnInit {
  booksList: Book[];
  currItemIndex: number;
  isPopupOpened = true;
  
  constructor(private libaryService: LibaryService, private dialog?: MatDialog) { }

  ngOnInit() {
    this.currItemIndex = 0;
    this.setItemChosen(0);
    this.importBooks();
  }

  importBooks(){
    console.log("Importing Persons from server...");
    this.libaryService.importBooks().subscribe(importedPersons => this.setBooksList(importedPersons));
  }

  setItemChosen(index: number) {
    this.currItemIndex = index;
  }

  getBooksList() {
    this.booksList = this.libaryService.GetAllBooks();
  }

  setBooksList(books: Book[]) {
    console.log(books);
    this.libaryService.setLibary(books);
    this.getBooksList();
  }

  EditBook_Clicked(index:number) {
    this.isPopupOpened = true;
    this.currItemIndex = index;
    const dialogRef = this.dialog.open(EditBookPopUpComponent,{
      data: this.libaryService.GetBook(this.currItemIndex)
    })
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
  DeleteBook_Clicked(index:number) {
    this.isPopupOpened = true;
    this.currItemIndex = index;
    const dialogRef = this.dialog.open(DeleteBookPopUpComponent,{
      data: this.currItemIndex
    })
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
  
  AddBook_Clicked() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddBookPopUpComponent,{
      data:{}
    })
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }
}
