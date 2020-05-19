import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) { }

  // Get Properties List
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>('/api/v1/website/team-listings');
  }

  // Send email from user on contact us page
  sendEmail(formData: any) {
    const url = 'https://us-central1-estate-agency-62c1a.cloudfunctions.net/sendMail';

    return this.http.post(url, formData);
  }
}
