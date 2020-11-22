import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
//import { AgmCoreModule } from '@agm/core';
import { newCarreraService } from '../services/newCarrera.service';
/**
 * Ng module
 */
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
// Component de usuario carreras
export class UserCarrerasSub implements OnInit {
  // usuario y carreras
  user: any = [];
  carrerasdisponibles = [];
  /**
   * Creates an instance of user carreras sub.
   * @param userService 
   * @param carreras 
   * @param router 
   */
  constructor(private userService: UserService,private carreras: newCarreraService, private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    // Obtener carreras para usuario
    this.carreras.getAllForUser(this.user['nombreusuario']).subscribe(data =>{
      this.carrerasdisponibles=data;
      console.log(data);
    });
  }
/**
 * Incribirse a carreras 
 * @param carrera a inscribirse
 */
incribirse(carrera : any){
    this.userService.setUserLogged(this.user);
    this.carreras.setCarrera(carrera);
    console.log(carrera);
    this.router.navigate(['/insc-carrera']);
  }

}
