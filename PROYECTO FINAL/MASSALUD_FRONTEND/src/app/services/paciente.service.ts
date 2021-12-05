import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/pacientes'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{ //Paciente[]
    return this.http.get(baseUrl)
  } 

  get(id: any): Observable<any>{ //Paciente
    return this.http.get(`${baseUrl}/${id}`) // `
  }

  getByDoc(tdoc: any, ndoc: any): Observable<any>{ //Paciente
    return this.http.get(`${baseUrl}/${tdoc}/${ndoc}`) // `
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data)
  }

  update(id: any,data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data)
  }

}