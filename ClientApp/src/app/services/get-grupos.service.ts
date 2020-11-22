import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Servicio para obtener grupos
export class getgrupos {
  constructor(private http: HttpClient) { }
  /**
   * Gets all grupos
   * @param username para obtener grupos
   * @returns  Grupos para usuario
   */
  getAll(username : string) {
    const params = new HttpParams()
    .set('username', username); 
    return this.http.get<any[]>(`https://localhost:44379/api/GruposUser?` + params.toString());
  }

  /**
   * Posts union a grupo
   * @param username de la persona que se quiere unir
   * @param keygrupo del grupo
   * @returns Union a grupo
   */
  postUnion(username : string, keygrupo : string){
    const params = new HttpParams()
    .set('username', username)
    .set('namegrupo', keygrupo); 
    console.log(`https://localhost:44379/api/UnirseGrupo?` + params.toString());
    return this.http.post(`https://localhost:44379/api/UnirseGrupo?` + params.toString(),"");
  }
/**
 * Elimina usuario de grupo
 * @param username a eliminar de grupo
 * @param keygrupo del grupo
 */
delete(username : string, keygrupo : string){
    const params = new HttpParams()
    .set('username', username)
    .set('namegrupo', keygrupo); 
    console.log(`https://localhost:44379/api/UnirseGrupo?` + params.toString());
    return this.http.delete(`https://localhost:44379/api/UnirseGrupo?` + params.toString());
  }

}