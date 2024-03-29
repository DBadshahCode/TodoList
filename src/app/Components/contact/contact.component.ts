import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm  = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  });

  constructor() { }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
