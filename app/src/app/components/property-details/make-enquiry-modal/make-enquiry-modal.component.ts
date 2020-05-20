import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PropertyService } from '../../../services/property.service';

export interface DialogData {
  listingId: string;
}

@Component({
  selector: 'app-make-enquiry-modal',
  templateUrl: './make-enquiry-modal.component.html',
  styleUrls: ['./make-enquiry-modal.component.css']
})
export class MakeEnquiryModalComponent {
  firstName = new FormControl('', [ Validators.required ]);
  lastName = new FormControl('', [ Validators.required ]);
  email = new FormControl('', [ Validators.required, Validators.email ]);
  phoneNumber = new FormControl('', []);
  enquiry = new FormControl('', [ Validators.required ]);
  sendBrochure = new FormControl(false, []);

  constructor(
    public dialogRef: MatDialogRef<MakeEnquiryModalComponent>,
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
    const enquiryFormData = {
      "listingId": this.data.listingId,
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "emailAddress": this.email.value,
      "phoneDaytime": this.phoneNumber.value,
      "comment": this.enquiry.value,
      "sendBrochure": this.sendBrochure.value
    }

    this.propertyService.sendEnquiryFormData(enquiryFormData).subscribe(
      res => {
        if (res) {
          this.snackBar.open('Enquiry was successfully sent', 'Close');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
