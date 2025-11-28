import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  standalone: true,
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CreateEventComponent {

  title = '';
  description = '';
  date = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  createEvent() {
    const eventData = {
      title: this.title,
      description: this.description,
      date: this.date
    };

    this.http.post('http://localhost:8080/api/events', eventData)
      .subscribe({
        next: () => {
          alert('Event created successfully!');
          this.router.navigate(['/events']);
        },
        error: (err) => {
          console.error(err);
          alert('Failed to create event.');
        }
      });
  }
}
