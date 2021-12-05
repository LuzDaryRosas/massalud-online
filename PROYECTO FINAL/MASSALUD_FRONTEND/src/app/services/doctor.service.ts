import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/doctores'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{ //Doctor
    return this.http.get(baseUrl)
  }

  
  getByCorreo(correo_e: any) : Observable<any>{ 
    return this.http.get(`${baseUrl}/email/${correo_e}`)
  }


  /* getDoctorEspecialidad(): Observable<any>{ //Doctor
    return this.http.get(`${baseUrl}/especialidad/${especialidad}`)
    
  } */


}