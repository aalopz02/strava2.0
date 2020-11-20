import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { inscReto } from './../models/insc-reto.model';
@Injectable({
  providedIn: 'root'
})
export class InscRetoServService {

  retos: any;

  constructor(private http: HttpClient) { }


  setReto(retoin : any){
    this.retos = retoin;
  }

  crearInscReto(inscReto : inscReto) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
   
    const params = new HttpParams()
    .set('nombreReto', inscReto.nombrereto)
    .set('nombreUsuario', inscReto.nombreusuario)    
    console.log(inscReto); 
    return this.http.post(`https://localhost:44379/api/InscripcionesReto?` + params, inscReto);
  }

  getAllForUser(username: any) {
    const params = new HttpParams()
    .set('username', username);
    return this.http.get<any[]>(`https://localhost:44379/api/InscripcionesReto?` + params.toString());
  }
}
