import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GruposModifService } from './../services/grupos-modif.service';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-grupos-modify',
  templateUrl: './grupos-modify.component.html',
  styleUrls: ['./grupos-modify.component.css']
})
//Clase para modificar un grupo
export class GruposModifyComponent implements OnInit {
//Form
  grupoForm:FormGroup;
  nameu ="";
  nameg ="";
  key = '';
  /**
   * Creates an instance of grupos modify component.
   * @param formB 
   * @param modifyService 
   * @param router 
   */
  constructor(private formB: FormBuilder, private modifyService: GruposModifService,private router: Router) { 
    this.nameg =this.router.getCurrentNavigation().extras.state.example; // should log out 'bar'
    this.nameu =this.router.getCurrentNavigation().extras.state.example1; // should log out 'bar'
    this.key = this.nameg + this.nameu;
  }
/**
 * on init
 */
ngOnInit(): void {
    console.log("gg");
    console.log(this.nameu);
    console.log(this.nameg);
    console.log(this.key);
    console.log("gg");
   
    //Inicializar form
      this.grupoForm = this.formB.group({
        
          nombregrupo: this.nameg,
          nombreusuario : this.nameu
         
       })
     
  }
/**
 * Determines whether submit on
 * @param formValue del grupo a modificar
 */
onSubmit(formValue: any) {
    
    this.modifyService.modificarGrupo(this.grupoForm.value,this.key)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
  }
}
