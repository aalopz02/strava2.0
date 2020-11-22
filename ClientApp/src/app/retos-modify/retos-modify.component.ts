import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetosModifServService } from './../services/retos-modif-serv.service';
import { tipoActividadService } from './../services/tipoActividad.service';
import { patrocinadorService } from './../services/patrocinadores.service';
import { sanitizeIdentifier } from '@angular/compiler';
import { Router } from '@angular/router';
/**
 * Component
 */
@Component({
  selector: 'app-retos-modify',
  templateUrl: './retos-modify.component.html',
  styleUrls: ['./retos-modify.component.css']
})
// Componet para modificar retos
export class RetosModifyComponent implements OnInit {
// Form y componentes
  retoForm:FormGroup;
  patrocinadores = [];
  tipoactividad  = [];
  patrocinadorId = 0;
  name ="";
  /**
   * Creates an instance of retos modify component.
   * @param formB 
   * @param modifyService 
   * @param serviceTipoAct 
   * @param servicePat 
   * @param router 
   */
  constructor(private formB: FormBuilder, private modifyService: RetosModifServService,   private serviceTipoAct: tipoActividadService ,private servicePat : patrocinadorService,private router: Router)  { 
    this.name =this.router.getCurrentNavigation().extras.state.example; // should log out 'bar'
  }
/**
 * on init
 */
ngOnInit(): void {
    console.log(this.name);
   // Traer info del reto
    this.modifyService.bringReto(this.name).subscribe(data =>{
      console.log(data);
      console.log(data.nombrereto);
      var inputDate = new Date(data.periodo_inicio);
      var formattedDate1 = inputDate.getFullYear()+'-'+('0' + inputDate.getMonth()).slice(-2)+'-'+ ('0' + inputDate.getDate()).slice(-2);
      var inputDate2 = new Date(data.periodo_final);
      var formattedDate2 = inputDate2.getFullYear()+'-'+ ('0' + inputDate2.getMonth()).slice(-2)+'-'+ ('0' + inputDate2.getDate()).slice(-2);
      // Cargar form
      this.retoForm = this.formB.group({
          d1 : [formattedDate1],
          d2 : [formattedDate2],
          tipoactividad : [''],
          tipo : [data.tipo],
          privacidad : [data.privacidad],
          patrocinadores : [''],
          patrocinadorId : ['']
         
       })
      
    });
// Traer tipo de actividad de reto
  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  // Traer patrocinadores de reto
  this.servicePat.getAll().subscribe(data =>{
    this.patrocinadores=data;
    console.log(this.patrocinadores[0]);
  });
  }
/**
 * Determines whether submit on
 * Enviar form de reto
 */
onSubmit(formValue: any) {
    
    this.modifyService.modificarReto(this.retoForm.value,this.name)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
      this.router.navigateByUrl('');
  }

}
