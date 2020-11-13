import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class actividadesService {
  constructor(private http: HttpClient) { }

  getAll(usuario : string) {
    return this.http.get<any[]>(`https://localhost:44379/api/Actividad/` + usuario);
  }

}