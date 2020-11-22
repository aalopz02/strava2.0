import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// Component de registrarse
export class RegisterComponent implements OnInit {
  // Imagen y form
  imagenCodificada : string | ArrayBuffer;
  registerUserForm: FormGroup;
  userToSend: User = new User;
  
  /**
   * Creates an instance of register component.
   * @param formB 
   * @param userService 
   * @param router 
   */
  constructor(private formB: FormBuilder, private userService: UserService,private router: Router) {
    // Cargar datos vacios
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
/**
 * Determines whether upload image on
 * @param event 
 */
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
/**
 * Imagen a base64
 * @param fileReader 
 * @param fileToRead imagen a leer
 * @returns imagen base64 
 */
imageToBase64(fileReader: FileReader, fileToRead: File): Observable<string> {
    fileReader.readAsDataURL(fileToRead);
    return fromEvent(fileReader, 'load').pipe(pluck('currentTarget', 'result'));
  }
/**
 * Form a enviar de registro
 * @param formValue 
 */
registerSendForm(formValue: any){
    this.userToSend = Object.assign(this.userToSend, formValue);
    console.log(this.userToSend);
    console.log(formValue.birthday.toString());
    this.userService.POSTUser(this.userToSend,this.imagenCodificada);
    this.router.navigateByUrl('');
   }

  ngOnInit(): void {

  }

}
