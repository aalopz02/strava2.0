import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patrocinador } from './../models/patrocinador.model';
import { reto } from './../models/reto.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetosCreateServService {
  retos:  any = [];
  constructor(private http: HttpClient) { 
  }

  
  setReto(retoin : any){
    this.retos = retoin;
  }
 

  getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Retos?`);
  }
  crearReto(reto : reto) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    console.log(patrocinador); 
    const params = new HttpParams()
    .set('nombreReto', reto.nombrereto)
    .set('d1', reto.d1)
    .set('d2', reto.d2)
    .set('Tipoact', reto.tipoactividad)
    .set('tipo', reto.tipo)
    .set('Privacidad', reto.privacidad)
    .set('patrocinadores', reto.patrocinadorId.toString())
    


    console.log(reto); 
    console.log(`https://localhost:44379/api/Retos?` + params, reto); 
    return this.http.post(`https://localhost:44379/api/Retos?` + params, reto);
  }

  getAllForUser(username : string) {
   console.log(`https://localhost:44379/api/Retos/` + 'busqueda/'+ username)
    return this.http.get<any[]>(`https://localhost:44379/api/Retos/` + 'busqueda/'+ username);
  }
  
}
