import { Injectable } from '@angular/core';
import { patrocinador } from './../models/patrocinador.model';
import { reto } from './../models/reto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio de reto a modificar
export class RetosModifServService {
/**
 * Creates an instance of retos modif serv service.
 * @param http 
 */
constructor(private http: HttpClient) { }
/**
 * Modificar reto
 * @param reto modificado
 * @param nombrereto a modificar
 * @returns  
 */
modificarReto(reto : reto,nombrereto: string) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    const params = new HttpParams()
    .set('nombreReto', nombrereto)
    .set('d1', reto.d1)
    .set('d2', reto.d2)
    .set('Tipoact', reto.tipoactividad)
    .set('tipo', reto.tipo.toString())
    .set('Privacidad', reto.privacidad.toString())
    .set('patrocinadores', reto.patrocinadorId.toString())
    
    return this.http.put(`https://localhost:44379/api/Retos?` + params, reto);
  }
/**
 * Buscar reto
 * @param nombreReto a buscar
 * @returns reto 
 */
bringReto(nombreReto:string): Observable<any>{
    const Base_url = 'https://localhost:44379/api/Retos/';
    return this.http.get(Base_url + nombreReto);
}


}
