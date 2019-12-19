import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private readonly baseUrl = `${environment.baseUrl}users`;

  constructor(private http: HttpClient) { }

  buscarPorLogin(username, password) {
    return this.http.get<User>(this.baseUrl, { headers: this.headers });
}

salvar(user: User) {
    return this.http.post<User>(this.baseUrl, user, { headers: this.headers });
}
}
