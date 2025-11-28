// src/app/pages/event-details/event-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  eventId!: number;
  event: any = null;
  attendees: any[] = [];
  inviteUserId = '';

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventId = +id;
      this.loadEvent();
    }
  }

  loadEvent() {
    // If you have endpoint for single event (not implemented earlier),
    // you can fetch it; otherwise get organized/invited lists or tasks.
    // For attendees:
    this.eventService.getAttendees(this.eventId).subscribe((res: any) => {
      this.attendees = res || [];
    }, () => this.attendees = []);
  }

  invite() {
    if (!this.inviteUserId) return;
    this.eventService.inviteUser({ user_id: +this.inviteUserId }).subscribe(() => {
      this.loadEvent();
      this.inviteUserId = '';
    }, (err) => {
      console.error('invite failed', err);
    });
  }
}
