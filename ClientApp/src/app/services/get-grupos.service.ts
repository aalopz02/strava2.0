import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class getgrupos {
  constructor(private http: HttpClient) { }
  
  getAll(username : string) {
    const params = new HttpParams()
    .set('username', username); 
    return this.http.get<any[]>(`https://localhost:44379/api/GruposUser?` + params.toString());
  }

  postUnion(username : string, keygrupo : string){
    const params = new HttpParams()
    .set('username', username)
    .set('namegrupo', keygrupo); 
    console.log(`https://localhost:44379/api/UnirseGrupo?` + params.toString());
    return this.http.post(`https://localhost:44379/api/UnirseGrupo?` + params.toString(),"");
  }

  delete(username : string, keygrupo : string){
    const params = new HttpParams()
    .set('username', username)
    .set('namegrupo', keygrupo); 
    console.log(`https://localhost:44379/api/UnirseGrupo?` + params.toString());
    return this.http.delete(`https://localhost:44379/api/UnirseGrupo?` + params.toString());
  }

}