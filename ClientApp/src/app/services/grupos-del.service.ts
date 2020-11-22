import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GruposDelService {

  constructor(private http: HttpClient) { }

  delete(nombregrupo:string,usuarioadmin:string) {
    var value=nombregrupo + usuarioadmin;
    console.log(nombregrupo,usuarioadmin);
    console.log(`https://localhost:44379/api/Grupos/`+ value);
    return this.http.delete(`https://localhost:44379/api/Grupos/`+ value).subscribe(data => {
      console.log(data);
     
      
    });
    
  }
}
