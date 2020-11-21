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

@Component({
  selector: 'app-insc-carrera',
  templateUrl: './insc-carrera.component.html',
  styleUrls: ['./insc-carrera.component.css']
})
export class InscCarreraComponent implements OnInit {
  user: any = [];
  imagenCodificada : string | ArrayBuffer;
  insccarreraForm:FormGroup;
  map : any = [];
  userpath: any = null;
  actividad : any = [];
  constructor(private formB: FormBuilder, private createService: InscCarreraServService,
    private router: Router,private userService: UserService,private carreras: newCarreraService,
    private http: HttpClient) { }
  inscCarreraToSend: inscCarrera = new inscCarrera;

  ngOnInit() {
    this.user = this.userService.userLogged;
    this.insccarreraForm = this.formB.group({
      nombrecarrera: [this.carreras.carrera.nombrecarrera,Validators.required],
      nombreusuario: [this.user['nombreusuario'],Validators.required],
      recibo :['',Validators.required]
    });
    this.loadMap(this.carreras.carrera.ruta);
  }

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
  
  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }

  onSubmit(formValue: any) {
    if (this.imagenCodificada == null){
      return;
    }
    this.createService.crearInscReto(formValue.nombreusuario,formValue.nombrecarrera,this.imagenCodificada);
    this.router.navigate(['/user-home']);
  }

}
