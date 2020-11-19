import { Injectable } from '@angular/core';
import { patrocinador } from './../models/patrocinador.model';
import { reto } from './../models/reto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetosModifServService {

  constructor(private http: HttpClient) { }

  modificarReto(reto : reto) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    console.log(patrocinador); 
    const params = new HttpParams()
    .set('nombreReto', reto.nombrereto)
    .set('d1', reto.d1)
    .set('d2', reto.d2)
    .set('Tipoact', reto.tipoactividad)
    .set('tipo', reto.tipo.toString())
    .set('Privacidad', reto.privacidad.toString())
    .set('patrocinadores', reto.patrocinadorId.toString())
    

    
    console.log(reto); 
    console.log(`https://localhost:44379/api/Retos?` + params, reto); 
    
    return this.http.put(`https://localhost:44379/api/Retos?` + params, reto);
  }

  bringReto(nombreReto:string): Observable<any>{
    var json;
    console.log("fdsfs");
    const Base_url = 'https://localhost:44379/api/Retos/';

   

    return this.http.get(Base_url + nombreReto);
}


}
