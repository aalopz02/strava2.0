import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, newCarreraService } from '../services';
import { InscRetoServService } from '../services/insc-reto-serv.service';
import { RetosCreateServService } from './../services/retos-create-serv.service';

@Component({
  selector: 'app-user-retos-subs',
  templateUrl: './user-retos-subs.component.html',
  styleUrls: ['./user-retos-subs.component.css']
})
export class UserRetosSubsComponent implements OnInit {

  user: any = [];
  retosdisponibles = [];
  constructor(private userService: UserService,private retoservice: InscRetoServService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.retoservice.getAllForUser(this.user['nombreusuario']).subscribe(data =>{
      this.retosdisponibles=data;
      console.log(data);
    });
  }

  incribirse(reto : any){
    this.userService.setUserLogged(this.user);
    this.retoservice.setReto(reto);
    console.log(reto);
    this.router.navigate(['/insc-reto']);
  }
}
