import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'x-api-key': '3B990EFF-921D-49B0-86BA-C497F82AF05F'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  mainUrl:string = 'https://live-loop-publicapi.azurewebsites.net';

  constructor(private http:HttpClient) { }

  // Get Properties List
  getProperties():Observable<Property[]> {
    //const url = this.mainUrl + '/api/v1/website/team-listings';
    const url  = '/assets/temp-data/properties.json'; // TEMP

    return this.http.get<Property[]>(url, httpOptions);
  }

  // Send email from user on contact us page
  sendEmail(formData: any) {
    const url = 'https://us-central1-estate-agency-62c1a.cloudfunctions.net/sendMail';

    console.log('Working here');
    return this.http.post(url, formData, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured:");
        console.log(err);
      }
    );
  }
}
