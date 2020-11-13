import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

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
export class UserSearch implements OnInit {
  registerForm: FormGroup;
  busqueda: string;
  error: string;
  resultados  = [];
  user: any = [];
  constructor( private formBuilder: FormBuilder,private service: UserService){  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      busqueda: ['all']
  });
  this.user = this.service.userLogged;
  console.log("Usuario:");
  console.log(this.user);
  this.service.getAll(this.registerForm.value,this.user).subscribe(data =>{
    this.resultados=data;
    console.log(this.resultados[0]);
  });
  
  }

  get f() { return this.registerForm.controls; }

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
  seguir(event, item){
    this.service.seguirUsuario(item["nombreusuario"],this.user["nombreusuario"]);
  }
}
