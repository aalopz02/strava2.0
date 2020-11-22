import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Servicio para eliminar grupo
export class GruposDelService {
/**
 * Creates an instance of grupos del service.
 * @param http 
 */
constructor(private http: HttpClient) { }
/**
 * Borrar grupo 
 * @param nombregrupo a eliminar
 * @param usuarioadmin 
 * @returns  
 */
delete(nombregrupo:string,usuarioadmin:string) {
    var value=nombregrupo + usuarioadmin;
    console.log(nombregrupo,usuarioadmin);
    console.log(`https://localhost:44379/api/Grupos/`+ value);
    return this.http.delete(`https://localhost:44379/api/Grupos/`+ value).subscribe(data => {
      console.log(data);
     
      
    });
    
  }
}
