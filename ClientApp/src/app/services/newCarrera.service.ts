import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carrera } from '../models/carrera.model';
import { patrocinador } from '../models/patrocinador.model';
import { categoria } from '../models/categoria.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class newCarreraService {
  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Carreras?`);
  }

  getAllForUser(username : string) {
    const params = new HttpParams()
      .set('username', username)
    return this.http.get<any[]>(`https://localhost:44379/api/Carreras?` + params.toString());
  }

  crearCarrera(carrera : carrera) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    console.log(categoria); 
    console.log(patrocinador); 
    const params = new HttpParams()
      .set('nombreCarrera', carrera.nombrecarrera)
      .set('Costo', carrera.costo.toString())
      .set('Cuenta', carrera.cuentapago.toString())
      .set('Fecha', carrera.fecha)
      .set('privacidad', carrera.privacidad)
      .set('idtipo', carrera.tipoactividad.toString())
      .set('ruta', 'safsdfsdfedf')
      .set('patrocinadores', carrera.patrocinadorId.toString())
      .set('categorias', carrera.categoriaId.toString())

    console.log(carrera); 
    return this.http.post(`https://localhost:44379/api/Carreras?` + params, carrera);
  }

  modificarCarrera(carrera : carrera) {
    const Base_url = 'https://localhost:44379/api/Cliente?';

    const params = new HttpParams()
      .set('nombreCarrera', carrera.nombrecarrera)
      .set('Costo', carrera.costo.toString())
      .set('Cuenta', carrera.cuentapago.toString())
      .set('Fecha', carrera.fecha)
      .set('privacidad', carrera.privacidad)
      .set('idtipo', carrera.tipoactividad.toString())
      .set('ruta', 'safsdfsdfedf')
      .set('patrocinadores', carrera.patrocinadorId.toString())
      .set('categorias', carrera.categoriaId.toString())

    console.log(carrera); 
    return this.http.put(`https://localhost:44379/api/Carreras?` + params, carrera);
  }

  delete(nombrecarrera) {
    console.log(nombrecarrera);
    return this.http.delete(`https://localhost:44379/api/Carreras/`+ nombrecarrera);
  }

}