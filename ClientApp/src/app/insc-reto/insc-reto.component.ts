import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InscRetoServService } from './../services/insc-reto-serv.service';
import { RetosCreateServService } from './../services/retos-create-serv.service';
@Component({
  selector: 'app-insc-reto',
  templateUrl: './insc-reto.component.html',
  styleUrls: ['./insc-reto.component.css']
})
export class InscRetoComponent implements OnInit {
  nombrereto=[];
  inscretoForm:FormGroup;
  constructor(private formB: FormBuilder, private createService: InscRetoServService,private retoservice: RetosCreateServService) { }

  ngOnInit() {

    this.inscretoForm = this.formB.group({
      nombrereto: [''],
      nombreusuario: ['']
  });

  this.retoservice.getAll().subscribe(data =>{
    this.nombrereto=data;
    console.log(this.nombrereto[0]);
  });

  }

  onSubmit(formValue: any) {
    this.createService.crearInscReto(this.inscretoForm.value)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
    
  }

}
