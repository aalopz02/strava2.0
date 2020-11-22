import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patrocinador } from './../models/patrocinador.model';
import { reto } from './../models/reto.model';
import { HttpParams } from '@angular/common/http';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio para crear retos
export class RetosCreateServService {
  // Retos
  retos:  any = [];
  /**
   * Creates an instance of retos create serv service.
   * @param http 
   */
  constructor(private http: HttpClient) { 
  }

  /**
   * Sets reto
   * @param retoin 
   */
  setReto(retoin : any){
    this.retos = retoin;
  }
 
/**
 * Gets all retos
 * @returns  retos
 */
getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Retos?`);
  }
  /**
   * Crear reto
   * @param reto a crear
   * @returns  
   */
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
/**
 * Gets all retos para usuario
 * @param username a buscar retos
 * @returns  Retos para usuario
 */
getAllForUser(username : string) {
   console.log(`https://localhost:44379/api/Retos/` + 'busqueda/'+ username)
    return this.http.get<any[]>(`https://localhost:44379/api/Retos/` + 'busqueda/'+ username);
  }
  
}
