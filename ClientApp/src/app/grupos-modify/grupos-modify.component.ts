import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GruposModifService } from './../services/grupos-modif.service';


@Component({
  selector: 'app-grupos-modify',
  templateUrl: './grupos-modify.component.html',
  styleUrls: ['./grupos-modify.component.css']
})
export class GruposModifyComponent implements OnInit {

  grupoForm:FormGroup;
  constructor(private formB: FormBuilder, private modifyService: GruposModifService) { }

  ngOnInit() {
  }

  onSubmit(formValue: any) {

    
  }

}
