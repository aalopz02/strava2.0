import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InscCarreraServService } from './../services/insc-carrera-serv.service';
import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { inscCarrera } from './../models/insc-carrera.model';
import { Router } from '@angular/router';
import { newCarreraService, UserService } from '../services';

@Component({
  selector: 'app-insc-carrera',
  templateUrl: './insc-carrera.component.html',
  styleUrls: ['./insc-carrera.component.css']
})
export class InscCarreraComponent implements OnInit {

  user: any = [];
  imagenCodificada : string | ArrayBuffer;
  insccarreraForm:FormGroup;

  constructor(private formB: FormBuilder, private createService: InscCarreraServService,
    private router: Router,private userService: UserService,private carreras: newCarreraService) { }
  inscCarreraToSend: inscCarrera = new inscCarrera;

  ngOnInit() {
    this.user = this.userService.userLogged;
    this.insccarreraForm = this.formB.group({
      nombrecarrera: this.carreras.carrera.nombrecarrera,
      nombreusuario: this.user['nombreusuario'],
      recibo :''
    });
  }

  onUploadImage(event) {
    if (event.target.files.length > 0) {
      const fileReader = new FileReader();
      let imageToUpload = event.target.files.item(0);
      this.imageToBase64(fileReader, imageToUpload)
        .subscribe(base64image => {
          this.imagenCodificada = base64image;
        });
    }
  }
  imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }

  onSubmit(formValue: any) {
    this.createService.crearInscReto(formValue.nombreusuario,formValue.nombrecarrera,this.imagenCodificada);
    this.router.navigate(['/user-home']);
  }

}
