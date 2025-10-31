import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  loading = false;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.loading = true;
    const payload = { email: this.email, password: this.password };

    this.http.post(`${environment.apiUrl}/login`, payload).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.message = res?.message || 'Login successful';
        // store token or user if provided, then navigate
        // e.g. localStorage.setItem('user', JSON.stringify(res.user));
        // this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.message = err?.error?.error || err?.error?.message || 'Login failed';
      }
    });
  }
}
