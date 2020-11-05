import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetosCreateServService } from './../services/retos-create-serv.service';


@Component({
  selector: 'app-retos-create',
  templateUrl: './retos-create.component.html',
  styleUrls: ['./retos-create.component.css']
})
export class RetosCreateComponent implements OnInit {

  retoForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: RetosCreateServService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any) {

    
  }

}
