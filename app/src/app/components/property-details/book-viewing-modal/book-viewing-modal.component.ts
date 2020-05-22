import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PropertyService } from '../../../services/property.service';
import * as moment from 'moment';

export interface DialogData {
  listingId: string;
}

@Component({
  selector: 'app-book-viewing-modal',
  templateUrl: './book-viewing-modal.component.html',
  styleUrls: ['./book-viewing-modal.component.css']
})
export class BookViewingModalComponent {
  firstName = new FormControl('', [ Validators.required ]);
  lastName = new FormControl('', [ Validators.required ]);
  email = new FormControl('', [ Validators.required, Validators.email ]);
  phoneNumber = new FormControl('', []);
  possibleDate1 = new FormControl('', [ Validators.required ]);
  possibleDate2 = new FormControl('', []);
  message = new FormControl('', [ Validators.required ]);

  constructor(
    public dialogRef: MatDialogRef<BookViewingModalComponent>,
    private propertyService: PropertyService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
  }

  onCloseClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    const viewingFormData = {
      "listingId": this.data.listingId,
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "emailAddress": this.email.value,
      "phoneDaytime": this.phoneNumber.value,
      "possibleDate1": moment(this.possibleDate1.value).format(),
      "possibleDate2": moment(this.possibleDate1.value).format(),
      "comment": this.message.value,
    }

    this.propertyService.sendViewingFormData(viewingFormData).subscribe(
      res => {
        if (res) {
          this.snackBar.open('Your viewing request was successfully sent', 'Close');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
