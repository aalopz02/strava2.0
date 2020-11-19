import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GruposModifService } from './../services/grupos-modif.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grupos-modify',
  templateUrl: './grupos-modify.component.html',
  styleUrls: ['./grupos-modify.component.css']
})
export class GruposModifyComponent implements OnInit {

  grupoForm:FormGroup;
  nameu ="";
  nameg ="";
  key = '';
  constructor(private formB: FormBuilder, private modifyService: GruposModifService,private router: Router) { 
    this.nameg =this.router.getCurrentNavigation().extras.state.example; // should log out 'bar'
    this.nameu =this.router.getCurrentNavigation().extras.state.example1; // should log out 'bar'
    this.key = this.nameg + this.nameu;
  }

  ngOnInit(): void {
    console.log("gg");
    console.log(this.nameu);
    console.log(this.nameg);
    console.log(this.key);
    console.log("gg");
   
    
      this.grupoForm = this.formB.group({
        
          nombregrupo: this.nameg,
          nombreusuario : this.nameu
         
       })
     
  }

  onSubmit(formValue: any) {
    
    this.modifyService.modificarGrupo(this.grupoForm.value,this.key)
    .subscribe(
      data => {
          
      },
      error => {
          
      });
  }
}
