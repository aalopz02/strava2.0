import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { inscReto } from './../models/insc-reto.model';
@Injectable({
  providedIn: 'root'
})
export class InscRetoServService {

  constructor(private http: HttpClient) { }

  crearInscReto(inscReto : inscReto) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
   
    const params = new HttpParams()
    .set('nombreReto', inscReto.nombrereto)
    .set('nombreUsuario', inscReto.nombreusuario)    


    console.log(inscReto); 
    return this.http.post(`https://localhost:44379/api/InscripcionesReto?` + params, inscReto);
  }
}