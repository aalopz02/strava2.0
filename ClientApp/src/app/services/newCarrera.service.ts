import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { carrera } from '../models/carrera.model';
import { patrocinador } from '../models/patrocinador.model';
import { categoria } from '../models/categoria.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Servicio de carrera
export class newCarreraService {
  constructor(private http: HttpClient) { }
  carrera: any = [];
/**
 * Sets carrera
 * @param carrerain 
 */
setCarrera(carrerain : any){
    this.carrera = carrerain;
  }
/**
 * Gets all carreras
 * @returns  carreras
 */
getAll() {
    return this.http.get<any[]>(`https://localhost:44379/api/Carreras?`);
  }
/**
 * Gets all carreras para user
 * @param username al que se busca carreras
 * @returns  Carreras para user
 */
getAllForUser(username : string) {
    const params = new HttpParams()
      .set('username', username)
    return this.http.get<any[]>(`https://localhost:44379/api/Carreras?` + params.toString());
  }
/**
 * Crear carrera
 * @param carrera a crear
 * @param ruta de carrera
 */
crearCarrera(carrera : carrera, ruta : string | ArrayBuffer) {
    const Base_url = 'https://localhost:44379/api/Cliente?';
    const params = new HttpParams()
      .set('nombreCarrera', carrera.nombrecarrera)
      .set('Costo', carrera.costo.toString())
      .set('Cuenta', carrera.cuentapago.toString())
      .set('Fecha', carrera.fecha)
      .set('privacidad', carrera.privacidad)
      .set('idtipo', carrera.tipoactividad.toString())
      .set('ruta', 'x')
      .set('patrocinadores', carrera.patrocinadorId.toString())
      .set('categorias', carrera.categoriaId.toString())
    return this.http.post(`https://localhost:44379/api/Carreras?` + params, {'file': ruta});
  }
/**
 * Modificar carrera
 * @param carrera vieja
 * @param newCarrera a modificar
 * @param ruta de carrera
 * @returns  
 */
modificarCarrera(carrera : carrera, newCarrera : carrera, ruta : string | ArrayBuffer) {
    const Base_url = 'https://localhost:44379/api/Cliente?';

    const params = new HttpParams()
      .set('nombreCarrera', carrera.nombrecarrera)
      .set('Costo', newCarrera.costo.toString())
      .set('Cuenta', newCarrera.cuentapago.toString())
      .set('Fecha',newCarrera.fecha)
      .set('privacidad',newCarrera.privacidad)
      .set('idtipo', newCarrera.tipoactividad.toString())
      .set('ruta', 'safsdfsdfedf')
      .set('patrocinadores', newCarrera.patrocinadorId.toString())
      .set('categorias', newCarrera.categoriaId.toString())

    console.log(carrera); 
    console.log(newCarrera); 
    return this.http.put(`https://localhost:44379/api/Carreras?` + params, {'file': ruta});
  }
/**
 * Borra una carrera 
 * @param carrera a eliminar
 * @returns  
 */
delete(carrera : any) {
    const params = new HttpParams()
      .set('nombreCarrera', carrera.nombrecarrera);
    return this.http.delete(`https://localhost:44379/api/Carreras?` + params);
  }

}