import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InscRetoServService } from './../services/insc-reto-serv.service';
import { RetosCreateServService } from './../services/retos-create-serv.service';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-insc-reto',
  templateUrl: './insc-reto.component.html',
  styleUrls: ['./insc-reto.component.css']
})

//Component para inscribir un reto
export class InscRetoComponent implements OnInit {
  // Usuario, reto y form
  user: any = [];
  nombrereto=[];
  inscretoForm:FormGroup;
  /**
   * Creates an instance of insc reto component.
   * @param formB 
   * @param createService 
   * @param retoservice 
   * @param userService 
   * @param router 
   */
  constructor(private formB: FormBuilder, private createService: InscRetoServService,private retoservice: RetosCreateServService,private userService: UserService, private router:Router) { }
/**
 * on init
 */
ngOnInit() {
    this.user = this.userService.userLogged;
    // Cargar el form de datos
    this.inscretoForm = this.formB.group({
      nombrereto:  this.retoservice.retos['nombrereto'],
      nombreusuario: this.user['nombreusuario']
  });
//Obtener retos
  this.retoservice.getAll().subscribe(data =>{
    this.nombrereto=data;
    console.log(this.nombrereto[0]);
  });

  }
/**
 * Determines whether submit on
 * @param formValue de inscribir reto
 */
onSubmit(formValue: any) {
    this.createService.crearInscReto(this.inscretoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });

      this.router.navigate(['/user-home']);
    
  }

}
