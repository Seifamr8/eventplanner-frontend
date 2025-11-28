// src/app/pages/events/events.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  organized: any[] = [];
  invited: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.eventService.getOrganizedEvents().subscribe((res: any) => {
      this.organized = res || [];
    }, () => this.organized = []);

    this.eventService.getInvitedEvents().subscribe((res: any) => {
      this.invited = res || [];
    }, () => this.invited = []);
  }
}
