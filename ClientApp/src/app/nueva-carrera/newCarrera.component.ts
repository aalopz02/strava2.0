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

@NgModule({
  imports: [
  FormGroup
  ]
})
//https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service

@Component({
  selector: 'app-nueva-carrera-component',
  templateUrl: './newCarrera.component.html'
})
export class CarreraComponent implements OnInit {
  registerForm: FormGroup;
  error: string;
  tipoactividad  = [];
  constructor( private formBuilder: FormBuilder,private service: newCarreraService,
    private serviceTipoAct: tipoActividadService){}

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombrecarrera: ['', Validators.required],
      costo: ['', Validators.required],
      cuentapago: ['', Validators.required],
      privacidad : ['', Validators.required],
      fecha : ['', Validators.required],
      ruta : ['', Validators.required],
      tipoactividad : ['']

  });//https://www.facebook.com/110540520597129/videos/608726899719588
  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.service.crearCarrera(this.registerForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          this.error = error;
      });
  }
}
