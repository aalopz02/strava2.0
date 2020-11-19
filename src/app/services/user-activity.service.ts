import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  isRace: boolean;
  activityType: string = '';

  constructor(private http: HttpClient) { }

  POSTActivity(activity: Actividad, path: string | ArrayBuffer){

    const BaseUrl = 'https://localhost:4300/api/Actividad?'

    const params = new HttpParams()
    .set('nombreusuario', activity.nombreusuario)
    .set('date', activity.date)
    .set('duracion', activity.duracion)
    .set('idact', activity.idact)
    .set('distancia', activity.distancia)
    .set('tipo', activity.tipo);
    
    //console.log(path);
    return this.http.post(BaseUrl + params.toString(),{'file': path})
  }

  setActivity(activity: string){
    this.activityType = activity;
  }
}
