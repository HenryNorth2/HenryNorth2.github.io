import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = new FormControl('', Validators.required);
  email = new FormControl('', [ Validators.required, Validators.email ]);
  message = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Send was clicked')
  }
}
