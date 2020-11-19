import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetosCreateServService } from './../services/retos-create-serv.service';
import { patrocinadorService } from './../services/patrocinadores.service';
import { tipoActividadService } from './../services/tipoActividad.service';

@Component({
  selector: 'app-retos-create',
  templateUrl: './retos-create.component.html',
  styleUrls: ['./retos-create.component.css']
})
export class RetosCreateComponent implements OnInit {

  retoForm:FormGroup;
  patrocinadores = [];
  tipoactividad  = [];
  patrocinadorId = 0;
  constructor(private formB: FormBuilder, private createService: RetosCreateServService,   private serviceTipoAct: tipoActividadService ,private servicePat : patrocinadorService) { }

  ngOnInit(): void {

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

  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  this.servicePat.getAll().subscribe(data =>{
    this.patrocinadores=data;
    console.log(this.patrocinadores[0]);
  });

  }

  onSubmit(formValue: any) {
    
    this.createService.crearReto(this.retoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
  }
    
}


