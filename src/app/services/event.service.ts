import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // -------------------------
  // EVENTS
  // -------------------------
  createEvent(data: Event) {
    return this.http.post<Event>(`${this.API}/events`, data);
  }

  getOrganizedEvents() {
    return this.http.get<Event[]>(`${this.API}/events/organized`);
  }

  getInvitedEvents() {
    return this.http.get<Event[]>(`${this.API}/events/invited`);
  }

  deleteEvent(id: number) {
    return this.http.delete(`${this.API}/events/${id}`);
  }

  // -------------------------
  // INVITATIONS
  // -------------------------
  inviteUser(body: any) {
    return this.http.post(`${this.API}/events/invite`, body);
  }

  // -------------------------
  // ATTENDANCE
  // -------------------------
  setAttendance(body: any) {
    return this.http.post(`${this.API}/events/attendance`, body);
  }

  getAttendees(eventId: number) {
    return this.http.get<any[]>(`${this.API}/events/${eventId}/attendees`);
  }

  // -------------------------
  // TASKS
  // -------------------------
  createTask(body: any) {
    return this.http.post(`${this.API}/tasks`, body);
  }

  getTasksByEvent(eventId: number) {
    return this.http.get<any[]>(`${this.API}/events/${eventId}/tasks`);
  }

  // -------------------------
  // SEARCH
  // Supports GET query:
  // keyword, start_date, end_date, role, type
  // -------------------------
  search(params: any) {
    let httpParams = new HttpParams();

    Object.keys(params || {}).forEach(key => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });

    return this.http.get<Event[]>(`${this.API}/search`, { params: httpParams });
  }
}
