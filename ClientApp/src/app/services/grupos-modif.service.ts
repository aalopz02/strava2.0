import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { grupo } from './../models/grupo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GruposModifService {

  constructor(private http: HttpClient) { }

  modificarGrupo(grupo: grupo,key:string) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    const params = new HttpParams()
    .set('nombreGrupo', grupo.nombregrupo)
    .set('UsuarioAdmin', grupo.nombreusuario)
    .set('key',key)
  
    console.log(grupo); 
    console.log(`https://localhost:44379/api/Grupos?` + params, grupo);
    return this.http.put(`https://localhost:44379/api/Grupos?` + params, grupo);
  }

  bringGrupo(nombregrupo:string): Observable<any>{

    const Base_url = 'https://localhost:44379/api/Grupos/';

  
    return this.http.get(Base_url + nombregrupo);
}
}
