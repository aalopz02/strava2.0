import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { newCarreraService } from '../services';
import { tipoActividadService } from '../services';
import { carrera } from '../models/carrera.model';
import { Observable } from 'rxjs';
import { actividad } from '../models/actividad.model';
import { patrocinadorService } from '../services/patrocinadores.service';
import { categoriaService } from '../services/categoria.service';
import { categoria } from '../models/categoria.model';

@NgModule({
  imports: [
  FormGroup
  ]
})

@Component({
  selector: 'app-modificar-carrera-component',
  templateUrl: './modificarCarrera.component.html'
})

export class modificarCarreraComponent implements OnInit {
  registerForm: FormGroup;
  error: string;
  tipoactividad  = [];
  patrocinadores = [];
  categorias = [];
  patrocinadorId = 0;
  categoriaId = 0;
  constructor( private formBuilder: FormBuilder,private service: newCarreraService,
    private serviceTipoAct: tipoActividadService,
    private servicePat : patrocinadorService,
    private serviceCat : categoriaService
    ){}

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombrecarrera: ['', Validators.required],
      costo: ['', Validators.required],
      cuentapago: ['', Validators.required],
      privacidad : ['', Validators.required],
      fecha : ['', Validators.required],
      ruta : ['', Validators.required],
      tipoactividad : [''],
      patrocinadores : [''],
      categorias : [''],
      patrocinadorId : [''],
      categoriaId : ['']

  });
  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  this.serviceCat.getAll().subscribe(data =>{
    this.categorias=data;
    console.log(this.categorias[0]);
  });
  this.servicePat.getAll().subscribe(data =>{
    this.patrocinadores=data;
    console.log(this.patrocinadores[0]);
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.service.modificarCarrera(this.registerForm.value)
    .subscribe(
      data => {  
      },
      error => {
          this.error = error;
      });
  }
}
