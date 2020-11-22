import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserSearchModel } from '../models/usuario.search.model';
import { Router } from '@angular/router';
/**
 * Ng module
 */
@NgModule({
  imports: [
  FormGroup
  ]
})

@Component({
  selector: 'app-search-user-component',
  templateUrl: './user.search.component.html',
  styleUrls: ['./user.search.component.css']
})
// Component para buscar usuarios
export class UserSearch implements OnInit {
  // Form y valores de busqueda
  registerForm: FormGroup;
  busqueda: string;
  error: string;
  resultados = [];
  user: any = [];
  /**
   * Creates an instance of user search.
   * @param formBuilder 
   * @param service 
   * @param router 
   */
  constructor( private formBuilder: FormBuilder,private service: UserService,private router: Router){  }
/**
 * on init
 */
ngOnInit() {
  // Inicializa form
    this.registerForm = this.formBuilder.group({
      busqueda: ['all']
  });
  
  this.user = this.service.userLogged;
  console.log("Usuario:");
  console.log(this.user);
  // Get de usuarios
  this.service.getAll(this.registerForm.value,this.user).subscribe(data =>{
    this.resultados=data;
    console.log(this.resultados[0]);
  });
  
  }

  get f() { return this.registerForm.controls; }
/**
 * Determines whether submit on
 * Envia form de registro
 */
onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.service.getAll(this.registerForm.value,this.user)
    .subscribe(
      data => {
        this.resultados=data;
        console.log(this.resultados[0]);
      },
      error => {
          this.error = error;
      });
  }
/**
 * Seguir usuario 
 * @param event 
 * @param item del usuario a seguir
 */
seguir(event, item){
    this.service.seguirUsuario(item["nombreusuario"],this.user["nombreusuario"]);
    
    this.user = this.service.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.service.getAll(this.registerForm.value,this.user).subscribe(data =>{
      this.resultados=data;
      console.log(this.resultados);
    });
    this.changeLocation(this.router);
  }
  
/**
 * No seguir usuario
 * @param event 
 * @param item del usuario a dejar de seguir
 */
noseguir(event, item){
    this.service.deleteseguir(item["nombreusuario"],this.user["nombreusuario"]);
    this.user = this.service.userLogged;
    console.log("Usuario:");
    console.log(this.user);

    this.service.getAll(this.registerForm.value,this.user).subscribe(data =>{
      this.resultados=data;
      console.log(this.resultados);
    });
    this.changeLocation(this.router);
  }

/**
 * Cambiar de ubicacion
 * @param locationData 
 */
changeLocation(locationData) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
}
/**
 * Ver si se esta siguiendo
 * @param result 
 * @returns  true or false dependiendo de si se sigue
 */
siguiendo(result : boolean){
    if (result){ 
      return true;
    } 
    return false;
  }
}
