import { Component } from '@angular/core';

@Component({
  selector: 'app-skoda-login',
  templateUrl: './skoda-login.component.html',
  styleUrls: ['./skoda-login.component.css'],
})
export class SkodaLoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
