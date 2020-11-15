import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
//import { AgmCoreModule } from '@agm/core';
import { actividadesService } from '../services/actividades.service';

@NgModule({
  imports:[
    /*AgmCoreModule.forRoot({
      apiKey:"AIzaSyDXS_5WlYG39gz8Ql2o9Z5ih9NskSwyym8"
    })*/
  ]
})
@Component({
  selector: 'app-user-home',
  templateUrl: './user.home.component.html',
  styleUrls: ['./user.home.component.css']

})
export class UserHomeComponent implements OnInit {
  baseUrl = "https://localhost:8080/";
  user: any = [];
  userimage = '';
  actividades = [];
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
  }

}
