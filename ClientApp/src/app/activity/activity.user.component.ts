import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../services';
import { tipoActividadService } from '../services';
import { actividadesService } from '../services/actividades.service';

@NgModule({
  imports: [
  FormGroup
  ]
})

@Component({
  selector: 'app-activity-user-component',
  templateUrl: './activity.user.component.html'
})
export class ActivityUSer implements OnInit {
  registerForm: FormGroup;
  error: string;
  tipoactividad  = [];
  user: any = [];
  file:any;
  rutastring : string | ArrayBuffer;
  constructor( private formBuilder: FormBuilder,private service: actividadesService,
    private serviceTipoAct: tipoActividadService,private userService: UserService){}
  

  fileChanged(e) {
      this.file = e.target.files[0];
      this.filetostring(this.file);
  }

  filetostring(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.rutastring = fileReader.result;
      console.log(this.rutastring);
    }
    fileReader.readAsText(this.file);;
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      fecha : ['', Validators.required],
      duracion: ['', Validators.required],
      distancia: ['', Validators.required],
      idact : ['', Validators.required],
      ruta : ['', Validators.required],
      tipo : ['']
      
  });
  this.user = this.userService.userLogged;
  console.log("Usuario:");
  console.log(this.user);

  this.serviceTipoAct.getAll().subscribe(data =>{
    this.tipoactividad=data;
    console.log(this.tipoactividad[0]);
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.service.crearActividad(this.registerForm.value,this.user,this.rutastring);
  }
}
