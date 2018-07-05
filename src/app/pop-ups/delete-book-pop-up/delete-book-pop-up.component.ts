import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LibaryService } from '../../services/libary.service';

@Component({
  selector: 'app-delete-book-pop-up',
  templateUrl: './delete-book-pop-up.component.html',
  styleUrls: ['./delete-book-pop-up.component.css']
})
export class DeleteBookPopUpComponent implements OnInit {
    
    constructor(
      private dialogRef: MatDialogRef<DeleteBookPopUpComponent>,
      private _LibaryService: LibaryService,
      @Inject(MAT_DIALOG_DATA) public data: any){ }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
   }

   onSubmit() {
      this._LibaryService.DeleteBook(this.data);
      this.dialogRef.close();
   }
}
