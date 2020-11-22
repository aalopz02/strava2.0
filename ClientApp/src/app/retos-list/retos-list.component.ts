import { Component, OnInit } from '@angular/core';
import { RetosCreateServService } from './../services/retos-create-serv.service';
import { RetosDelServService } from './../services/retos-del-serv.service';
import { Router } from '@angular/router';
/**
 * Component
 */
@Component({
  selector: 'app-retos-list',
  templateUrl: './retos-list.component.html',
  styleUrls: ['./retos-list.component.css']
})
// Component de la lista de retos
export class RetosListComponent implements OnInit {
// Retos
  retosdisponibles = [];
  /**
   * Creates an instance of retos list component.
   * @param createService 
   * @param delService 
   * @param router 
   */
  constructor(private createService: RetosCreateServService,private delService: RetosDelServService, private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
    this.createService.getAll().subscribe(data =>{
      this.retosdisponibles=data;
      console.log(data);
    });
  }
/**
 * Cambio de ubicacion
 * @param locationData 
 */
changeLocation(locationData) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
}
/**
 * Borrar retos  de lista
 * @param nombreReto a eliminar
 */
delete(nombreReto:string){
    this.delService.delete(nombreReto);
    this.changeLocation(this.router);
  }

  /**
   * Modifica retos de la lista 
   * @param nombreReto a modificar 
   */
  modify(nombreReto:string){
    this.router.navigateByUrl('/modificar-retos',{ state: { example: nombreReto } });
  }

}
