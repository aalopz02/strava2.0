import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private userService: UserService,private carreras: newCarreraService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.carreras.getAllForUser(this.user['nombreusuario']).subscribe(data =>{
      this.carrerasdisponibles=data;
      console.log(data);
    });
  }

  incribirse(carrera : any){
    this.userService.setUserLogged(this.user);
    this.carreras.setCarrera(carrera);
    console.log(carrera);
    this.router.navigate(['/insc-carrera']);
  }

}
