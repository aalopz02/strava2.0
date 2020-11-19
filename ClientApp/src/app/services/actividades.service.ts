import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { ActividadUsuario } from '../models/actividad.usuario.model';

@Injectable({
  providedIn: 'root'
})
export class actividadesService {
  constructor(private http: HttpClient) { }

  url : string = `https://localhost:44379/api/Actividad`;

  getAll(usuario : string) {
    return this.http.get<any[]>(this.url + `/` + usuario["nombreusuario"]);
  }

  crearActividad(actividad : ActividadUsuario, nombreusuario :string, ruta : string | ArrayBuffer ){
    console.log(actividad);
    const params = new HttpParams()
    .set('nombreusuario', nombreusuario["nombreusuario"])
    .set('date', actividad.fecha)
    .set('duracion', actividad.duracion.toString())
    .set('idact', actividad.idact.toString())
    .set('distancia', actividad.distancia.toString())
    .set('tipo', actividad.tipo);
    
    return this.http.post(this.url +'?' + params.toString(),{'file': ruta}).subscribe(data => {
      console.log(data);
    })
  }
  

}