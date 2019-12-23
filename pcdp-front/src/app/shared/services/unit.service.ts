import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Expose-Headers': 'Authorization'
  });
  private readonly baseUrl = `${environment.baseUrl}units/`;

  constructor(private http: HttpClient) { }


  salvar(unit: Unit) {
    return this.http.post<Unit>(`${this.baseUrl}new`, unit, { headers: this.headers });
  }

  buscarTodos() {
    return this.http.get<Unit[]>(this.baseUrl, { headers: this.headers });
  }
}
