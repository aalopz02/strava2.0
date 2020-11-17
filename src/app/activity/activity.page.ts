import { Component, OnInit } from '@angular/core';
import { Chronometer } from 'ngx-chronometer';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import * as xml2js from 'xml2js';
import { parseString } from 'xml2js';
import { utf8Encode } from '@angular/compiler/src/util';

enum StatusChonometer {
  desactived = 0,
  pause = 1,
  start = 2,
  finish = 3,
  restart = 4,
  stop = 5,
  refresh = 6
}


declare var google;


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})


export class ActivityPage implements OnInit {

  chronometer: Chronometer = new Chronometer();
  startChr: boolean = false;
  pauseChr: boolean = false;
  map: any = null;
  file: File;
  ActivityCoordinates: any = [];
  userpath: any = null;



  constructor(private geolocation: Geolocation) { }

  ngOnInit() {

    this.geolocation.getCurrentPosition().then((data) => {
      this.loadMap(data);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  loadMap(data) {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: data.coords.latitude, lng: data.coords.longitude};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

  run(chronometer: Chronometer, status: StatusChonometer) {

    if((status != StatusChonometer.pause) && (!this.pauseChr)){
      this.startChr = !this.startChr;
    }
    if(status === StatusChonometer.pause){
      this.pauseChr = !this.pauseChr;
    }
    if((status === StatusChonometer.start) && (this.pauseChr)){
      this.pauseChr = !this.pauseChr;
    }
    chronometer.status = status;
    switch (chronometer.status) {
    case StatusChonometer.pause:
        chronometer.pause();
        break;
    case StatusChonometer.restart:
        chronometer.restart();
        break;
    case StatusChonometer.start:
        chronometer.start();
        break;
    case StatusChonometer.finish:
        chronometer.stop();
        break;
    default:
        break;
    }
  } 

  onChronoEvent(chronometer: Chronometer) {
    console.log(chronometer);
  }

  loadGpxFromDevice(event) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    this.ActivityCoordinates = [];
    fileReader.onload = (e) => {
      parseString(fileReader.result, { explicitArray: true }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {
          const data = result.gpx.trk[0].trkseg[0].trkpt;
          
          
          data.forEach(element => {
            const coords = {
              lat: +element.$.lat,
              lng: +element.$.lon
            }

            this.ActivityCoordinates.push(coords);
          });
          
          
          this.setPathInMap();
        }
      });
    }
    fileReader.readAsText(this.file);
  }


  setPathInMap(){
    this.userpath = new google.maps.Polyline({
      path: this.ActivityCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    }); 
    
    this.map.setCenter(new google.maps.LatLng(this.ActivityCoordinates[0].lat, this.ActivityCoordinates[0].lng));
    
    this.userpath.setMap(this.map);  
  }


  deletePathInMap(){
    if(this.userpath === null){
      console.log("No se ha cargado un archivo pgx")
    }else{
      this.userpath.setMap(null);
    }
  }

}
