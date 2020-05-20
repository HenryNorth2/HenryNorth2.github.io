import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';

export interface EnquiryFormData {
  listingId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneDaytime: string;
  comment: string;
  sendBrochure: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) { }

  // Get Properties List
  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>('/api/v1/website/team-listings');
  }

  // Send enquiry form data from property details page
  sendEnquiryFormData(formData: EnquiryFormData): Observable<EnquiryFormData> {
    return this.http.post<EnquiryFormData>('/api/v1/website/request-information', formData);
  }

  // Send email from user on contact us page
  sendEmail(formData: any) {
    const url = 'https://us-central1-estate-agency-62c1a.cloudfunctions.net/sendMail';

    return this.http.post(url, formData);
  }
}
