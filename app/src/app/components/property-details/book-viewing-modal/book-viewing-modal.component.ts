import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-viewing-modal',
  templateUrl: './book-viewing-modal.component.html',
  styleUrls: ['./book-viewing-modal.component.css']
})
export class BookViewingModalComponent {

  constructor(public dialogRef: MatDialogRef<BookViewingModalComponent>) {}

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
