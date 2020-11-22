import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { actividad } from '../models/actividad.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class tipoActividadService {

  constructor(private http: HttpClient) { }
  
  getAll() : Observable<any> {
    return this.http.get(`https://localhost:44379/api/TipoAct?`);
  }

}