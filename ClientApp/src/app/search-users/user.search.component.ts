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
  templateUrl: './user.search.component.html'
})
export class UserSearch implements OnInit {
  registerForm: FormGroup;
  busqueda: string;
  error: string;
  constructor( private formBuilder: FormBuilder,private service: UserService){}

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      busqueda: ['all']

  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.service.getAll(this.registerForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          this.error = error;
      });
  }
}
