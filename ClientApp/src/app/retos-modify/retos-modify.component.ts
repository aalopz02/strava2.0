import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetosModifServService } from './../services/retos-modif-serv.service';

@Component({
  selector: 'app-retos-modify',
  templateUrl: './retos-modify.component.html',
  styleUrls: ['./retos-modify.component.css']
})
export class RetosModifyComponent implements OnInit {

  retoForm:FormGroup;
  constructor(private formB: FormBuilder, private modifyService: RetosModifServService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any) {

    
  }

}
