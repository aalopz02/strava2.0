import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GruposCreateService } from './../services/grupos-create.service';

@Component({
  selector: 'app-grupos-create',
  templateUrl: './grupos-create.component.html',
  styleUrls: ['./grupos-create.component.css']
})
export class GruposCreateComponent implements OnInit {

  grupoForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: GruposCreateService) { }

  ngOnInit() {
    this.grupoForm = this.formB.group({
      nombregrupo: [''],
      nombreusuario: ['']

  });
  }

  onSubmit(formValue: any) {
    this.createService.crearGrupo(this.grupoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
    
  }

}
