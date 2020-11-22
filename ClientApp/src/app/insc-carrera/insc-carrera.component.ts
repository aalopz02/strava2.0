import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscCarreraServService } from './../services/insc-carrera-serv.service';
import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { inscCarrera } from './../models/insc-carrera.model';
import { Router } from '@angular/router';
import { newCarreraService, UserService } from '../services';
import { parseString } from 'xml2js';

declare var google;

/**
 * Component
 */
@Component({
  selector: 'app-insc-carrera',
  templateUrl: './insc-carrera.component.html',
  styleUrls: ['./insc-carrera.component.css']
})
//Clase para inscribirse a una carrera
export class InscCarreraComponent implements OnInit {
  // usuario, mapam recibo y path
  user: any = [];
  imagenCodificada : string | ArrayBuffer;
  insccarreraForm:FormGroup;
  map : any = [];
  userpath: any = null;
  actividad : any = [];
  /**
   * Creates an instance of insc carrera component.
   * @param formB 
   * @param createService 
   * @param router 
   * @param userService 
   * @param carreras 
   * @param http 
   */
  constructor(private formB: FormBuilder, private createService: InscCarreraServService,
    private router: Router,private userService: UserService,private carreras: newCarreraService,
    private http: HttpClient) { }
  inscCarreraToSend: inscCarrera = new inscCarrera;

  /**
   * on init
   */
  ngOnInit() {
    this.user = this.userService.userLogged;
    //Rellenar formulario
    this.insccarreraForm = this.formB.group({
      nombrecarrera: [this.carreras.carrera.nombrecarrera,Validators.required],
      nombreusuario: [this.user['nombreusuario'],Validators.required],
      recibo :['',Validators.required]
    });
    //cargar mapa
    this.loadMap(this.carreras.carrera.ruta);
  }
/**
 * Cargar mapa 
 * @param data para cargar el mapa
 */
loadMap(data: string) {
    const mapEle: HTMLElement = document.getElementById('mapa');
    const myLatLng = {lat: 9.8776180, lng: -83.9376610};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
    console.log(data);
    var filedata : any;
    this.http.get("https://localhost:8080/reporutascarreras/" + data,{ responseType: 'text' as 'json'}).subscribe(filedata => {
      console.log("read done");
      this.loadGpxFromDevice(filedata);
    });
  }

  /**
   * Cargar GPX del dispositivo
   * @param file GPX a cargar
   */
  loadGpxFromDevice(file: any) {
    parseString(file, { explicitArray: true }, (error, result) => {
          console.log(result);
          const data = result.gpx.trk[0].trkseg[0].trkpt;
          data.forEach(element => {
            const coords = {
              lat: +element.$.lat,
              lng: +element.$.lon
            }
            this.actividad.push(coords);
          });
          this.setPathInMap();
      });
  }

  /**
   * Setea el path del mapa
   */
  setPathInMap(){
    this.userpath = new google.maps.Polyline({
      path: this.actividad,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    }); 
    this.map.setCenter(new google.maps.LatLng(this.actividad[0].lat, this.actividad[0].lng));
    this.userpath.setMap(this.map);  
   
  }

  /**
   * Determines whether upload image on
   * @param event 
   */
  onUploadImage(event) {
    if (event.target.files.length > 0) {
      const fileReader = new FileReader();
      let imageToUpload = event.target.files.item(0);
      this.imageToBase64(fileReader, imageToUpload)
        .subscribe(base64image => {
          this.imagenCodificada = base64image;
        });
    }
  }
  /**
   * Convierte Imagen a base64
   * @param fileReader 
   * @param fileToRead imagen a convertir
   * @returns to base64 imagen
   */
  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }

  /**
   * Determines whether submit on
   * @param formValue de la carrera a inscribir
   * @returns  
   */
  onSubmit(formValue: any) {
    if (this.imagenCodificada == null){
      return;
    }
    this.createService.crearInscReto(formValue.nombreusuario,formValue.nombrecarrera,this.imagenCodificada);
    this.router.navigate(['/user-home']);
  }

}
