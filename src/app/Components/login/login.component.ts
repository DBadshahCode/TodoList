import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor() {}

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.loginForm.get('email')?.value === 'support@admin.com' && this.loginForm.get('password')?.value === '123') {
      alert('login successful');
    }
  }
}
