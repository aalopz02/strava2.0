import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { inscReto } from './../models/insc-reto.model';
@Injectable({
  providedIn: 'root'
})
// Servicio para inscribirse a reto
export class InscRetoServService {
  reto : any;
/**
 * Sets reto
 * @param reto 
 */
setReto(reto: any) {
    this.reto = reto;
  }


/**
 * Creates an instance of insc reto serv service.
 * @param http 
 */
constructor(private http: HttpClient) { }

/**
 * Crear insc a reto
 * @param inscReto a crear
 * @returns  
 */
crearInscReto(inscReto : inscReto) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
   
    const params = new HttpParams()
    .set('nombreReto', inscReto.nombrereto)
    .set('nombreUsuario', inscReto.nombreusuario)    
    console.log(inscReto); 
    return this.http.post(`https://localhost:44379/api/InscripcionesReto?` + params, inscReto);
  }
/**
 * Gets all insc a retos para usuario
 * @param username para obtener insc a retos
 * @returns  
 */
getAllForUser(username: any) {
    const params = new HttpParams()
    .set('username', username);
    return this.http.get<any[]>(`https://localhost:44379/api/InscripcionesReto?` + params.toString());
  }
}
