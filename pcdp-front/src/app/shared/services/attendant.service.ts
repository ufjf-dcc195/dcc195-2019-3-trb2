import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Attendant } from '../models/attendant';

@Injectable({
  providedIn: 'root'
})
export class AttendantService {

  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, HEAD, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  });

  private readonly baseUrl = `${environment.baseUrl}attendants/`;

  constructor(private http: HttpClient) { }

  salvar(attendant: Attendant) {
    return this.http.post<Attendant>(`${this.baseUrl}new`, attendant, { headers: this.headers });
  }

  editar(attendant: Attendant) {
    return this.http.put<Attendant>(`${this.baseUrl}new`, attendant, { headers: this.headers });
  }
}
