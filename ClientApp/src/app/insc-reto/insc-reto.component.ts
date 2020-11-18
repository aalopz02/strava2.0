import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InscRetoServService } from './../services/insc-reto-serv.service';
@Component({
  selector: 'app-insc-reto',
  templateUrl: './insc-reto.component.html',
  styleUrls: ['./insc-reto.component.css']
})
export class InscRetoComponent implements OnInit {

  inscretoForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: InscRetoServService) { }

  ngOnInit() {
  }

  onSubmit(formValue: any) {

    
  }

}
