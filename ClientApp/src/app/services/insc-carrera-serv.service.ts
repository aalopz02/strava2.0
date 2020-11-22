import { Injectable } from '@angular/core';

import { HttpParams, HttpClient } from '@angular/common/http';

import { inscCarrera } from './../models/insc-carrera.model';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class InscCarreraServService {

  constructor(private http: HttpClient) { }

  crearInscReto(nombreusuario : string,nombrecarrera : string, img : string | ArrayBuffer) {
    const Base_url = 'https://localhost:44379/api/InscripcionesCarrera?';
   
    const params = new HttpParams()
    .set('nombreCarrera', nombrecarrera)
    .set('nombreUsuario', nombreusuario)    
    console.log(nombrecarrera);
    console.log(nombreusuario);
    console.log({'file': img});
    this.http.post(Base_url + params.toString(),{'file': img.toString()}).subscribe(data => {
      console.log(data);
    })
  
  }

  
}
