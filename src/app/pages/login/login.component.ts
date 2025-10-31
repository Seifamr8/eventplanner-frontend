import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  serverError = '';
  isSubmitting = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.isSubmitting = true;
    this.serverError = '';

    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (res) => {
        alert(res.message || 'Logged in successfully!');
        this.isSubmitting = false;
      },
      error: (err) => {
        this.serverError = err.error?.error || 'Login failed!';
        this.isSubmitting = false;
      }
    });
  }
}
