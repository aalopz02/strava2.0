import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, newCarreraService } from '../services';
import { InscRetoServService } from '../services/insc-reto-serv.service';
import { RetosCreateServService } from './../services/retos-create-serv.service';
/**
 * Component
 */
@Component({
  selector: 'app-user-retos-subs',
  templateUrl: './user-retos-subs.component.html',
  styleUrls: ['./user-retos-subs.component.css']
})
// Component user de retos
export class UserRetosSubsComponent implements OnInit {
// usuario y retos
  user: any = [];
  retosdisponibles = [];
  /**
   * Creates an instance of user retos subs component.
   * @param userService 
   * @param retoservice 
   * @param router 
   */
  constructor(private userService: UserService,private retoservice: InscRetoServService,
     private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    // Obtener retos para usuario
    this.retoservice.getAllForUser(this.user['nombreusuario']).subscribe(data =>{
      this.retosdisponibles=data;
      console.log(data);
    });
  }
/**
 * Incribirse a retos 
 * @param reto a inscribirse
 */
incribirse(reto : any){
    this.userService.setUserLogged(this.user);
    this.retoservice.setReto(reto);
    console.log(reto);
    this.router.navigate(['/insc-reto']);
  }
}
