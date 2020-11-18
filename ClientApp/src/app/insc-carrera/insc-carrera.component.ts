import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InscCarreraServService } from './../services/insc-carrera-serv.service';

@Component({
  selector: 'app-insc-carrera',
  templateUrl: './insc-carrera.component.html',
  styleUrls: ['./insc-carrera.component.css']
})
export class InscCarreraComponent implements OnInit {

  insccarreraForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: InscCarreraServService) { }

  ngOnInit() {
  }

  onSubmit(formValue: any) {

    
  }

}
