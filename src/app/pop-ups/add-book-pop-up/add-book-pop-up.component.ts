import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibaryService } from '../../services/libary.service';
import { Book } from '../../app_Model/Book';

const ADD_ACTION: string = "ADD";


@Component({
  selector: 'app-add-book-pop-up',
  templateUrl: './add-book-pop-up.component.html',
  styleUrls: ['./add-book-pop-up.component.css']
})
export class AddBookPopUpComponent implements OnInit {

  public _bookForm: FormGroup;
  public errormsg: string;
  
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddBookPopUpComponent>,
    private _LibaryService: LibaryService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this._bookForm = this._formBuilder.group({
      BookID: [this.data.BookID],
      AuthorName: [ this.data.AuthorName],
      PublishedDate: [ this.data.PublishedDate],
      BookTitle: [ this.data.BookTitle]
    });
    // Init Error msg:
    this.errormsg="";
  }

  onNoClick(): void {
    this.dialogRef.close();
   }

   onSubmit() {
    if(this.validateData(this._bookForm.value) > 0){
      // Data is valid:
        this._LibaryService.AddBook(this._bookForm.value);
        this.dialogRef.close();
    }
  }

  validateData(book: Book): number{
    this.errormsg = this._LibaryService.ValidateBookData(book, ADD_ACTION);
    if (this.errormsg !== ""){
      //Data is not valid
      return -1;
    }
    else{
      return 1;
    }
  }

}
