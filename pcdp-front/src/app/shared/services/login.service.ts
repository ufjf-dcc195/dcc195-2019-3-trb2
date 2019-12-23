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
    'Access-Control-Allow-Methods': 'GET, OPTIONS, HEAD, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  });

  private readonly baseUrl = `${environment.baseUrl}session/`;

  constructor(private http: HttpClient) { }


  async login(model: any) {
    return this.http.post(`${this.baseUrl}login`, model, {headers: this.headers, observe: 'response'});
  }
}
