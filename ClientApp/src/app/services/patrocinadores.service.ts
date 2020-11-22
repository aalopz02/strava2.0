import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio de patrocinadores
export class patrocinadorService {
  constructor(private http: HttpClient) { }
  /**
   * Gets all patrocinadores
   * @returns  patrocinadores
   */
  getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Pat?`);
  }

}