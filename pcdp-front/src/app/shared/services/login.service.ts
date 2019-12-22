import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'Authorization'
  });
  private readonly baseUrl = `${environment.baseUrl}session/`;

  constructor(private http: HttpClient) { }


  login(email, password) {
    return this.http.post(`${environment.baseUrl}/login`, {email, password}, { headers: this.headers });
  }
}
