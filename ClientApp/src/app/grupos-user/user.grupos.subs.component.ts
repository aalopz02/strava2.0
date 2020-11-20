import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { getgrupos } from '../services/get-grupos.service';

@NgModule({
  imports:[
  ]
})
@Component({
  selector: 'app-grupos-user',
  templateUrl: './user.grupos.subs.component.html',
  styleUrls: ['./user.grupos.subs.component.css']

})
export class GruposUser implements OnInit {
  user: any = [];
  gruposdisponibles = [];
  
  constructor(private gruposservice: getgrupos,private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.gruposservice.getAll(this.user['nombreusuario']).subscribe(data =>{
      this.gruposdisponibles=data;
      console.log(data);
    });
  }

}
