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
    this.service.delete(carrera).subscribe(() => console.log("deleted"));

    this.changeLocation(this.router)
    
  }

  changeLocation(locationData) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
}

  modify(carrera : any){
    this.service.setCarrera(carrera);
    this.router.navigateByUrl('/modificar-carrera');
  }

}
