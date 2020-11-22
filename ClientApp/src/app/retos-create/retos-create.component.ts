import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetosCreateServService } from './../services/retos-create-serv.service';
import { patrocinadorService } from './../services/patrocinadores.service';
import { tipoActividadService } from './../services/tipoActividad.service';
import { Router } from '@angular/router';
/**
 * Component
 */
@Component({
  selector: 'app-retos-create',
  templateUrl: './retos-create.component.html',
  styleUrls: ['./retos-create.component.css']
})
// Component de retos a crear
export class RetosCreateComponent implements OnInit {
// Form y componentes
  retoForm:FormGroup;
  patrocinadores = [];
  tipoactividad  = [];
  patrocinadorId = 0;
  /**
   * Creates an instance of retos create component.
   * @param formB 
   * @param createService 
   * @param serviceTipoAct 
   * @param servicePat 
   * @param router 
   */
  constructor(private formB: FormBuilder, private createService: RetosCreateServService,  
     private serviceTipoAct: tipoActividadService ,private servicePat : patrocinadorService,
     private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
// Cargar valores en form de retos
    this.retoForm = this.formB.group({
      nombrereto: [''],
      d1 : [''],
      d2 : [''],
      tipoactividad : [''],
      tipo : [''],
      privacidad : [''],
      patrocinadores : [''],
      patrocinadorId : ['']

  });
// Obtener actividades
  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  // Obtener patrocinadores
  this.servicePat.getAll().subscribe(data =>{
    this.patrocinadores=data;
    console.log(this.patrocinadores[0]);
  });

  }
/**
 * Determines whether submit on
 * Form de reto a subir
 */
onSubmit(formValue: any) {
    
    this.createService.crearReto(this.retoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
      this.router.navigateByUrl('/list-reto');
  }
    
}


