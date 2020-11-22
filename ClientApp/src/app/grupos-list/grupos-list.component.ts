import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GruposDelService } from './../services/grupos-del.service';
import { GruposCreateService } from './../services/grupos-create.service';

/**
 * Component
 */
@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
//Clase para manejo de la lista de grupos
export class GruposListComponent implements OnInit {

  //Grupos
  gruposdisponibles = [];
  constructor(private createService: GruposCreateService,private delService: GruposDelService, private router: Router) { }
/**
 * on init
 */
ngOnInit(): void {
    this.createService.getAll().subscribe(data =>{
      this.gruposdisponibles=data;
      console.log(data);
    });
  }
/**
 * Cambiar de ubicación
 * @param locationData 
 */
changeLocation(locationData) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
}
/**
 * Eliminar un grupo
 * @param nombreGrupo a eliminar
 * @param nombreusuario 
 */
delete(nombreGrupo:string,nombreusuario:string){
    console.log("dsad");
    console.log(nombreGrupo);
    this.delService.delete(nombreGrupo,nombreusuario);
    
    this.changeLocation(this.router);
    
  }

  /**
   * Modifica un grupo 
   * @param nombreGrupo  a modificar
   * @param nombreusuario 
   */
  modify(nombreGrupo:string,nombreusuario:string){
    console.log("fes");
    this.router.navigateByUrl('/grupos-modify',{ state: { example: nombreGrupo , example1:nombreusuario} });
  }


}
