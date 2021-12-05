import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/agenda'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{ //Paciente[]
    return this.http.get(baseUrl)
  } 

  get(id: any): Observable<any>{ //Paciente
    return this.http.get(`${baseUrl}/${id}`) // `
  }



  getByPacienteFecha(idpaciente: any, cdate: any): Observable<any>{ //Paciente agendaPacienteFecha
    return this.http.get(`${baseUrl}PacienteFecha/${idpaciente}/${cdate}`) // `
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data)
  }

  update(id: any,data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data)
  }
// inserte este para consulta doctores
  getByDoctorFecha(iddoctor: any, cdate: any): Observable<any>{ //Doctor
    return this.http.get(`${baseUrl}DoctorFecha/${iddoctor}/${cdate}`) // `
  }


 delete(id: any): Observable<any>{ //
    return this.http.delete(`${baseUrl}/${id}`) // `
  }


}