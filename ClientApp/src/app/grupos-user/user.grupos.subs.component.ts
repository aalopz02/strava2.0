import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
//import { AgmCoreModule } from '@agm/core';
import { newCarreraService } from '../services/newCarrera.service';

@NgModule({
  imports:[
    /*AgmCoreModule.forRoot({
      apiKey:"AIzaSyDXS_5WlYG39gz8Ql2o9Z5ih9NskSwyym8"
    })*/
  ]
})
@Component({
  selector: 'app-user-carreras-subs',
  templateUrl: './user.carreras.subs.component.html',
  styleUrls: ['./user.carreras.subs.component.css']

})
export class UserCarrerasSub implements OnInit {
  user: any = [];
  carrerasdisponibles = [];
  
  constructor(private userService: UserService,private carreras: newCarreraService) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.carreras.getAllForUser(this.user['nombreusuario']).subscribe(data =>{
      this.carrerasdisponibles=data;
      console.log(data);
    });
  }

}
