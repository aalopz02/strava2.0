import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RetosModifServService } from './../services/retos-modif-serv.service';
import { tipoActividadService } from './../services/tipoActividad.service';
import { patrocinadorService } from './../services/patrocinadores.service';
import { sanitizeIdentifier } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retos-modify',
  templateUrl: './retos-modify.component.html',
  styleUrls: ['./retos-modify.component.css']
})
export class RetosModifyComponent implements OnInit {

  retoForm:FormGroup;
  patrocinadores = [];
  tipoactividad  = [];
  patrocinadorId = 0;
  name ="";
  constructor(private formB: FormBuilder, private modifyService: RetosModifServService,   private serviceTipoAct: tipoActividadService ,private servicePat : patrocinadorService,private router: Router)  { 
    this.name =this.router.getCurrentNavigation().extras.state.example; // should log out 'bar'
  }

  ngOnInit(): void {
    console.log(this.name);
   
    this.modifyService.bringReto(this.name).subscribe(data =>{
      console.log(data);
      console.log(data.nombrereto);
      var inputDate = new Date(data.periodo_inicio);
      var formattedDate1 = inputDate.getFullYear()+'-'+('0' + inputDate.getMonth()).slice(-2)+'-'+ ('0' + inputDate.getDate()).slice(-2);
      var inputDate2 = new Date(data.periodo_final);
      var formattedDate2 = inputDate2.getFullYear()+'-'+ ('0' + inputDate2.getMonth()).slice(-2)+'-'+ ('0' + inputDate2.getDate()).slice(-2);
      this.retoForm = this.formB.group({
          d1 : [formattedDate1],
          d2 : [formattedDate2],
          tipoactividad : [''],
          tipo : [data.tipo],
          privacidad : [data.privacidad],
          patrocinadores : [''],
          patrocinadorId : ['']
         
       })
      
    });

  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  this.servicePat.getAll().subscribe(data =>{
    this.patrocinadores=data;
    console.log(this.patrocinadores[0]);
  });
  }

  onSubmit(formValue: any) {
    
    this.modifyService.modificarReto(this.retoForm.value,this.name)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
      this.router.navigateByUrl('');
  }

}
