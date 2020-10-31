import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { newCarreraService } from '../services';

@NgModule({
  imports: [
  FormGroup
  ]
})//https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service

@Component({
  selector: 'app-nueva-carrera-component',
  templateUrl: './newCarrera.component.html'
})
export class CarreraComponent implements OnInit {
  registerForm: FormGroup;
  error: string;
  constructor( private formBuilder: FormBuilder,private service: newCarreraService){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombreCarrera: ['', Validators.required],
      costo: ['', Validators.required],
      cuentaPago: ['', Validators.required]
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
