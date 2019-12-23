import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'Authorization'
  });
  private readonly baseUrl = `${environment.baseUrl}users/`;

  constructor(private http: HttpClient) { }

  salvar(user: User) {
    return this.http.post<User>(`${this.baseUrl}new`, user, { headers: this.headers });
  }

  editar(user: User) {
    return this.http.put<User>(`${this.baseUrl}`, user, { headers: this.headers });
  }
}
