import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // match backend fields
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  birthDate = '';

  message = '';
  loading = false;

  constructor(private http: HttpClient) {}

  onSignup() {
    this.loading = true;
    const payload = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      birthDate: this.birthDate
    };

    this.http.post(`${environment.apiUrl}/register`, payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.message = res?.message || 'Signed up successfully!';
        // optionally navigate to login or clear form
      },
      error: (err) => {
        this.loading = false;
        this.message = err?.error?.error || err?.error?.message || 'Signup failed';
      }
    });
  }
}
