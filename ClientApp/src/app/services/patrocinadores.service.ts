import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class patrocinadorService {
  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Pat?`);
  }

}