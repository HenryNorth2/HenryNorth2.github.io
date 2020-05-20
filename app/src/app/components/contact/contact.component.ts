import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = new FormControl('', [ Validators.required ]);
  email = new FormControl('', [ Validators.required, Validators.email ]);
  message = new FormControl('', [ Validators.required ]);

  constructor(
    private propertyService: PropertyService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formData = {
      'name': this.name.value,
      'email': this.email.value,
      'message': this.message.value
    }

    this.propertyService.sendEmail(formData).subscribe(
      res => {
        if (res === 'Sent') {
          this.snackBar.open('Enquiry/Message was successfully sent', 'Close');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
