import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibaryService } from '../../services/libary.service';
import { Book } from '../../app_Model/Book';

const EDIT_ACTION: string = "EDIT";

@Component({
  selector: 'app-edit-book-pop-up',
  templateUrl: './edit-book-pop-up.component.html',
  styleUrls: ['./edit-book-pop-up.component.css']
})
export class EditBookPopUpComponent implements OnInit {

  public _bookForm: FormGroup;
  public errormsg: string;
  
  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditBookPopUpComponent>,
    private _LibaryService: LibaryService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this._bookForm = this._formBuilder.group({
      BookID: [this.data.BookID],
      AuthorName: [this.data.AuthorName],
      PublishedDate: [this.data.PublishedDate],
      BookTitle: [ this.data.BookTitle]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
   }

  onSubmit() {
    if(this.validateData(this._bookForm.value) > 0){
      // Data is valid:
      this._LibaryService.EditBook(this._bookForm.value);
      this.dialogRef.close();
    }
   }

   validateData(book: Book): number{
    this.errormsg = this._LibaryService.ValidateBookData(book,EDIT_ACTION);
    if (this.errormsg !== ""){
      //Data is not valid
      return -1;
    }
    else{
      return 1;
    }
  }

}
