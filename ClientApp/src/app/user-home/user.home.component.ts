import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
//import { AgmCoreModule } from '@agm/core';
import { actividadesService } from '../services/actividades.service';
import { parseString } from 'xml2js';

/*
@NgModule({
  imports:[
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDXS_5WlYG39gz8Ql2o9Z5ih9NskSwyym8"
    })
  ]
})
*/

declare var google;

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
  ActivityCoordinates: any = [];
  userpath: any = null;
  constructor(private userService: UserService,private actservice: actividadesService) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged;
    this.userimage = this.baseUrl + this.user.imagenperfil;
    console.log("Usuario:");
    console.log(this.user);
    this.actservice.getAll(this.user).subscribe(data =>{
      this.actividades=data;
      console.log(data);
      
    });
    for (let i = 0; i < this.actividades.length; i++) {
      this.maps.concat();
      this.loadMap(i);
    }
  }

  loadMap(data: number) {
    // create a new map by passing HTMLElement
    var map: any = null;
    const mapEle: HTMLElement = document.getElementById("2");
    // create LatLng objectlat="9.8776180" lon="-83.9376610"
    const myLatLng = {lat: 9.8776180, lng: -83.9376610};
    // create map
    map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }
/*
  loadGpxFromDevice(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      parseString(fileReader.result, { explicitArray: true }, (result) => {
          const data = result.gpx.trk[0].trkseg[0].trkpt;
          data.forEach(element => {
            const coords = {
              lat: +element.$.lat,
              lng: +element.$.lon
            }
            this.ActivityCoordinates.push(coords);
          });
          this.setPathInMap();
      });
    }
    fileReader.readAsText(file);
  }
  */
/*
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
    //this.distancia = Math.round(google.maps.geometry.spherical.computeLength(this.userpath.getPath()));
  }
  */
}
