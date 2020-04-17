import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/Property';

const httpOptions = {
  headers: new HttpHeaders({
    "x-api-key": "3B990EFF-921D-49B0-86BA-C497F82AF05F"
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

  // Delete Todo
  // deleteTodo(todo:Todo):Observable<Todo> {
  //   const url = `${this.todosUrl}/${todo.id}`;
  //   return this.http.delete<Todo>(url, httpOptions);
  // }

  // Add Todo
  // addTodo(todo:Todo):Observable<Todo> {
  //   return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  // }

  // Toggle Completed
  // toggleCompleted(todo:Todo):Observable<any> {
  //   const url = `${this.todosUrl}/${todo.id}`;
  //   return this.http.put(url, todo, httpOptions);
  // }
}
