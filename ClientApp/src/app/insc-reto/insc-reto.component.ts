import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InscRetoServService } from './../services/insc-reto-serv.service';
import { RetosCreateServService } from './../services/retos-create-serv.service';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insc-reto',
  templateUrl: './insc-reto.component.html',
  styleUrls: ['./insc-reto.component.css']
})

export class InscRetoComponent implements OnInit {
  user: any = [];
  nombrereto=[];
  inscretoForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: InscRetoServService,private retoservice: RetosCreateServService,private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.user = this.userService.userLogged;
    this.inscretoForm = this.formB.group({
      nombrereto:  this.retoservice.retos['nombrereto'],
      nombreusuario: this.user['nombreusuario']
  });

  this.retoservice.getAll().subscribe(data =>{
    this.nombrereto=data;
    console.log(this.nombrereto[0]);
  });

  }

  onSubmit(formValue: any) {
    this.createService.crearInscReto(this.inscretoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });

      this.router.navigate(['/user-home']);
    
  }

}
