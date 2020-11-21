import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user.modify.component.html',
  styleUrls: ['./user.modify.component.css']
})
export class Usermodify implements OnInit {
  imagenCodificada : string | ArrayBuffer;
  registerUserForm: FormGroup;
  userToSend: User = new User;
  user: any = [];

  constructor(private formB: FormBuilder, private userService: UserService,private router: Router) {   }
   ngOnInit() {
    this.user = this.userService.userLogged;
    console.log("Usuario:");
    console.log(this.user);
    this.registerUserForm = this.formB.group({
      fname: this.user.fname,
      mname: this.user.mname,
      lname: this.user.lname,
      nationality: this.user.nacionalidad,
      password: this.user.password,
      imagenperfil : ''
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

   registerSendForm(formValue: any){
    this.userToSend = Object.assign(this.userToSend, formValue);
    console.log(this.userToSend);
    this.userService.modifyUser(this.userToSend,this.user,this.imagenCodificada);
    this.router.navigate(['/login']);
   }

}
