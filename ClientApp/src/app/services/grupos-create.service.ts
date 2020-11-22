import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { grupo } from './../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
// Servicio para crear un grupo
export class GruposCreateService {

  constructor(private http: HttpClient) { }

/**
 * Gets all grupos
 * @returns grupos  
 */
getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Grupos?`);
  }
  /**
   * Crear grupo
   * @param grupo a crear
   * @returns  
   */
  crearGrupo(grupo: grupo) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    const params = new HttpParams()
    .set('nombreGrupo', grupo.nombregrupo)
    .set('UsuarioAdmin', grupo.nombreusuario)
  
    console.log(grupo); 
    return this.http.post(`https://localhost:44379/api/Grupos?` + params, grupo);
  }
}
