import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-make-enquiry-modal',
  templateUrl: './make-enquiry-modal.component.html',
  styleUrls: ['./make-enquiry-modal.component.css']
})
export class MakeEnquiryModalComponent {

  constructor(public dialogRef: MatDialogRef<MakeEnquiryModalComponent>) {}

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
