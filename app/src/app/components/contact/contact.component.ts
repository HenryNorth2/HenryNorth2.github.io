import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit was clicked');

    const formData = {
      'name': this.name.value,
      'email': this.email.value,
      'message': this.message.value
    }

    console.log(formData);

    this.propertyService.sendEmail(formData);
  }
}
