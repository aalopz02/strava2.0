import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { actividad } from '../models/actividad.model';
import { Observable } from 'rxjs';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servico de tipo de actividades
export class tipoActividadService {
/**
 * Creates an instance of tipo actividad service.
 * @param http 
 */
constructor(private http: HttpClient) { }
  /**
   * Gets all tipos de actividades
   * @returns tipos de actividades
   */
  getAll() : Observable<any> {
    return this.http.get(`https://localhost:44379/api/TipoAct?`);
  }

}