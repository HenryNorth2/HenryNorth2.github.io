import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) { }

  // Get Properties List
  getProperties(): Observable<Property[]> {
    const url = `${environment.apiUrl}/api/v1/website/team-listings`;

    return this.http.get<Property[]>(url);
  }

  // Send email from user on contact us page
  sendEmail(formData: any) {
    const url = 'https://us-central1-estate-agency-62c1a.cloudfunctions.net/sendMail';

    return this.http.post(url, formData);
  }
}
