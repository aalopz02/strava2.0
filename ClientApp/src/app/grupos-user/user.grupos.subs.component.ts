import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { getgrupos } from '../services/get-grupos.service';

/**
 * Ng module
 */
@NgModule({
  imports:[
  ]
})
/**
 * Component
 */
@Component({
  selector: 'app-grupos-user',
  templateUrl: './user.grupos.subs.component.html',
  styleUrls: ['./user.grupos.subs.component.css']
})
//Comoponet de grupos para el usuario
export class GruposUser implements OnInit {
  // usuario y grupos disponibles
  user: any = [];
  gruposdisponibles = [];
  /**
   * Creates an instance of grupos user.
   * @param gruposservice 
   * @param userService 
   * @param router 
   */
  constructor(private gruposservice: getgrupos,private userService: UserService,
    private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    //Obtener grupos
    this.gruposservice.getAll(this.user.nombreusuario).subscribe(data =>{
      this.gruposdisponibles=data;
      console.log(data);
    });
  }
/**
 * Unirse grupos user
 * @param grupo a unirse
 */
unirse(grupo : any){
    this.gruposservice.postUnion(this.user.nombreusuario,grupo.key).subscribe();
    this.gruposservice.getAll(this.user.nombreusuario).subscribe(data =>{
      this.gruposdisponibles=data;
      console.log(data);
    });
    this.router.navigate(['/user-home']);
  }
/**
 * Salirse grupos user
 * @param grupo a salirse
 */
salirse(grupo : any){
    if (this.user.nombreusuario == grupo.admin){
      console.log("no"); 
      return;
    }
    this.gruposservice.delete(this.user.nombreusuario,grupo.key).subscribe();
    this.gruposservice.getAll(this.user.nombreusuario).subscribe(data =>{
      this.gruposdisponibles=data;
      console.log(data);
    });
    this.router.navigate(['/user-home']);
  }

}
