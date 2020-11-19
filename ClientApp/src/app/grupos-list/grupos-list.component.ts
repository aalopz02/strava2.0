import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GruposDelService } from './../services/grupos-del.service';
import { GruposCreateService } from './../services/grupos-create.service';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {

  gruposdisponibles = [];
  constructor(private createService: GruposCreateService,private delService: GruposDelService, private router: Router) { }

  ngOnInit(): void {
    this.createService.getAll().subscribe(data =>{
      this.gruposdisponibles=data;
      console.log(data);
    });
  }

  delete(nombreGrupo:string,nombreusuario:string){
    console.log("dsad");
    console.log(nombreGrupo);
    this.delService.delete(nombreGrupo,nombreusuario);
  }

  modify(nombreGrupo:string,nombreusuario:string){
    console.log("fes");
    this.router.navigateByUrl('/grupos-modify',{ state: { example: nombreGrupo , example1:nombreusuario} });
  }


}
