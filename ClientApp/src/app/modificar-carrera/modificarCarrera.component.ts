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
import { Router } from '@angular/router';

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
  carrera : any;
  file:any;
  rutastring : string | ArrayBuffer;
  
  constructor( private formBuilder: FormBuilder,private service: newCarreraService,
    private serviceTipoAct: tipoActividadService,
    private servicePat : patrocinadorService,
    private serviceCat : categoriaService,
    private router: Router
    ){}

  ngOnInit() {
    this.carrera = this.service.carrera;
    console.log(this.carrera);
    this.registerForm = this.formBuilder.group({
      costo: [this.carrera.costo],
      cuentapago: [this.carrera.cuentapago],
      privacidad : [this.carrera.privacidad],
      fecha : [this.carrera.costo],
      ruta : [''],
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

  fileChanged(e) {
    this.file = e.target.files[0];
    this.filetostring(this.file);
}

filetostring(file) {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.rutastring = fileReader.result;
    console.log(this.rutastring);
  }
  fileReader.readAsText(this.file);;
}

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.service.modificarCarrera(this.carrera, this.registerForm.value,this.rutastring)
    .subscribe(
      data => {  
      },
      error => {
          this.error = error;
      });
    this.router.navigateByUrl('');
  }
}
