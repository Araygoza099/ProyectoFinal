import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // URL de tu backend
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}