import { Component, OnInit } from '@angular/core';
import { RetosCreateServService } from './../services/retos-create-serv.service';

@Component({
  selector: 'app-user-retos-subs',
  templateUrl: './user-retos-subs.component.html',
  styleUrls: ['./user-retos-subs.component.css']
})
export class UserRetosSubsComponent implements OnInit {

  user: any = [];
  retosdisponibles = [];
  constructor() { }

  ngOnInit(): void {
 /*    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.carreras.getAllForUser(this.user).subscribe(data =>{
      this.carrerasdisponibles=data;
      console.log(data); */
    //});

}
}
