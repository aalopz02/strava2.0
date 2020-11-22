import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { actividadesService } from '../services/actividades.service';
import { parseString } from 'xml2js';
import { HttpClient } from '@angular/common/http';


declare var google;
/**
 * Component
 */
@Component({
  selector: 'app-user-home',
  templateUrl: './user.home.component.html',
  styleUrls: ['./user.home.component.css']

})
//estos es la vista del home del usuario luego de loggearse
export class UserHomeComponent implements OnInit {
  baseUrl = "https://localhost:8080/imgrepo/";
  user: any = [];
  userimage = '';
  actividades = [];
  maps = [];
  userpath: any = null;
  constructor(private userService: UserService,private actservice: actividadesService,
              private http: HttpClient) { }
/**
 * on init
 */
ngOnInit(): void {
    this.user = this.userService.userLogged;
    this.userimage = this.baseUrl + this.user.imagenperfil;
    
    console.log("Usuario:");
    console.log(this.user);
// Obtener actividades
    this.actservice.getAll(this.user).subscribe(data =>{
      this.actividades=data;
      console.log(data);
      
    });

    for (let i = 0; i < this.actividades.length; i++) {
      this.maps.concat();
      console.log(i)
    }
  }
/**
 * Cargar mapa
 * @param data para cargar mapa
 */
loadMap(data: number) {
    var map: any = null;
    const mapEle: HTMLElement = document.getElementById(data.toString());
    const myLatLng = {lat: 9.8776180, lng: -83.9376610};
    map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
    var actividad = this.actividades[data];
    console.log(actividad);
    var ruta = actividad["rutagpx"];
    console.log(ruta);
    var filedata : any;
    this.http.get("https://localhost:8080/reporutas/" + ruta,{ responseType: 'text' as 'json'}).subscribe(filedata => {
      console.log("read done");
      this.loadGpxFromDevice(filedata,map);
    });
  }
/**
 * Cargar gpx del disp
 * @param file archivo
 * @param map a cargar
 */
loadGpxFromDevice(file, map : any) {
    var actividad : any = [];
    parseString(file, { explicitArray: true }, (error, result) => {
          console.log(result);
          const data = result.gpx.trk[0].trkseg[0].trkpt;
          data.forEach(element => {
            const coords = {
              lat: +element.$.lat,
              lng: +element.$.lon
            }
            actividad.push(coords);
          });
          this.setPathInMap(actividad,map);
      });
  }
/**
 * Setea path en el mapa
 * @param actividad para obtener path
 * @param map a setear
 */
setPathInMap(actividad : any, map : any){
    this.userpath = new google.maps.Polyline({
      path: actividad,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    }); 
    map.setCenter(new google.maps.LatLng(actividad[0].lat, actividad[0].lng));
    this.userpath.setMap(map);  
   
  }
  
}
