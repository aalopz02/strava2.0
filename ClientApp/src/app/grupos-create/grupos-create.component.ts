import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GruposCreateService } from './../services/grupos-create.service';

@Component({
  selector: 'app-grupos-create',
  templateUrl: './grupos-create.component.html',
  styleUrls: ['./grupos-create.component.css']
})
export class GruposCreateComponent implements OnInit {

  grupoForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: GruposCreateService,
    private router: Router) { }

  ngOnInit() {
    this.grupoForm = this.formB.group({
      nombregrupo: [''],
      nombreusuario: ['']

  });
  }

  changeLocation(locationData) {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
    }); 
}

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
