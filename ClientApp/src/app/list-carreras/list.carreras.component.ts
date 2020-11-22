import { Component, OnInit } from '@angular/core';
import { RetosCreateServService } from '../services/retos-create-serv.service';
import { RetosDelServService } from '../services/retos-del-serv.service';
import { Router } from '@angular/router';
import { newCarreraService } from '../services/newCarrera.service';

/**
 * Component
 */
@Component({
  selector: 'app-list-carreras',
  templateUrl: './list.carreras.component.html',
  styleUrls: ['./list.carreras.component.css']
})
// Component de la lista de carreras para admin
export class CarrerasAdminList implements OnInit {
// Carreras 
  carrerasDisponibles = [];
  /**
   * Creates an instance of carreras admin list.
   * @param service 
   * @param router 
   */
  constructor(private service: newCarreraService, private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
    this.service.getAll().subscribe(data =>{
      this.carrerasDisponibles=data;
      console.log(data);
    });
  }
/**
 * Borra carrera de admin list
 * @param carrera 
 */
delete(carrera : any){
    this.service.delete(carrera).subscribe(() => console.log("deleted"));

    this.changeLocation(this.router)
    
  }
/**
 * Cambia de ubicación
 * @param locationData 
 */
changeLocation(locationData) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
}
/**
 * Modifica carreras de la admin list
 * @param carrera 
 */
modify(carrera : any){
    this.service.setCarrera(carrera);
    this.router.navigateByUrl('/modificar-carrera');
  }

}
