import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  birthDate = '';

  get passwordMismatch(): boolean {
    return this.password !== this.confirmPassword && this.confirmPassword !== '';
  }

  onSignup() {
    if (this.passwordMismatch) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    alert(
      `Signed up successfully!\n\nName: ${this.firstName} ${this.lastName}\nEmail: ${this.email}\nBirth Date: ${this.birthDate}`
    );
  }
}
