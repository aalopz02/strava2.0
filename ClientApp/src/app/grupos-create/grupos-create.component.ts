import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GruposCreateService } from './../services/grupos-create.service';
/**
 * Component
/**
 * Component
 */
@Component({
  selector: 'app-grupos-create',
  templateUrl: './grupos-create.component.html',
  styleUrls: ['./grupos-create.component.css']
})

//Component para crear grupos
export class GruposCreateComponent implements OnInit {
//Fprm
  grupoForm:FormGroup;
  /**
   * Creates an instance of grupos create component.
   * @param formB 
   * @param createService 
   * @param router 
   */
  constructor(private formB: FormBuilder, private createService: GruposCreateService,
    private router: Router) { }

  /**
   * on init
   */
  ngOnInit() {
    this.grupoForm = this.formB.group({
      nombregrupo: [''],
      nombreusuario: ['']

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
 * Determines whether submit on
 * @param formValue del grupo a crear
 */
onSubmit(formValue: any) {
    this.createService.crearGrupo(this.grupoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
      this.changeLocation(this.router);
  }

}
