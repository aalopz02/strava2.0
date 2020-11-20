import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class getgrupos {
  constructor(private http: HttpClient) { }
  
  getAll(username : string) {
    const params = new HttpParams()
    .set('nombreGrupo', username); 
    return this.http.get<any[]>(`https://localhost:44379/api/GruposUser?` + params.toString());
  }

}