import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../models/carrera.model';

@Injectable({
  providedIn: 'root'
})
export class newCarreraService {
  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get<any[]>(`https://localhost:44379/Carreras?`);
  }

  crearCarrera(carrera : Carrera) {
    console.log(carrera); 
    return this.http.post(`https://localhost:44379/Carreras?`, carrera);
  }

  delete(nombreCarrera) {
    console.log(nombreCarrera);
    return this.http.delete(`ttps://localhost:44379/Carreras?`,nombreCarrera);
  }

}