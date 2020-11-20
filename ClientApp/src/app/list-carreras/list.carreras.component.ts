import { Component, OnInit } from '@angular/core';
import { RetosCreateServService } from '../services/retos-create-serv.service';
import { RetosDelServService } from '../services/retos-del-serv.service';
import { Router } from '@angular/router';
import { newCarreraService } from '../services/newCarrera.service';

@Component({
  selector: 'app-list-carreras',
  templateUrl: './list.carreras.component.html',
  styleUrls: ['./list.carreras.component.css']
})
export class CarrerasAdminList implements OnInit {

  carrerasDisponibles = [];
  constructor(private service: newCarreraService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data =>{
      this.carrerasDisponibles=data;
      console.log(data);
    });
  }

  delete(carrera : any){
    console.log(carrera)
    this.service.delete(carrera);
  }

  modify(carrera : any){
    this.service.setCarrera(carrera);
    this.router.navigateByUrl('/modificar-carrera');
  }

}
