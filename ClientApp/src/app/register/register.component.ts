import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imagenCodificada : string | ArrayBuffer;
  registerUserForm: FormGroup;
  userToSend: User = new User;

  constructor(private formB: FormBuilder, private userService: UserService) {
    this.registerUserForm = this.formB.group({
      fname: '',
      mname: '',
      lname: '',
      birthday: '',
      nationality: '',
      username: '',
      password: '',
      imagenperfil :''
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
    console.log(formValue.birthday.toString());
    this.userService.POSTUser(this.userToSend,this.imagenCodificada);
   }

  ngOnInit(): void {

  }

}
