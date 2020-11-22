import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Servicio de categoria
export class categoriaService {
  constructor(private http: HttpClient) { }
  /**
   * Gets all categorias
   * @returns  categorias
   */
  getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Cat?`);
  }

}