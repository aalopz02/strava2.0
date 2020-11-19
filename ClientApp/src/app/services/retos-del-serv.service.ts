import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetosDelServService {

  constructor(private http: HttpClient) { }

 /*  delete(nombrereto) {
    const Base_url = 'https://localhost:44379/api/Retos?';

    const params = new HttpParams()
      .set('nombreReto', nombrereto);

    
    console.log(Base_url + params.toString());
    
    this.http.delete(Base_url + params.toString()).subscribe(data => {
      console.log(data);
     
      
    });

  } */
  delete(nombrereto) {
    console.log(nombrereto);
    console.log(`https://localhost:44379/api/Retos/`+ nombrereto);
    return this.http.delete(`https://localhost:44379/api/Retos/`+ nombrereto).subscribe(data => {
      console.log(data);
    
    });
  }
}
