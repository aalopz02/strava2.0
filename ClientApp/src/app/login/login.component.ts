import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  checkuserForm: FormGroup;
  usertoCheck: any = [];
  username:'';
  constructor(private userService: UserService, private formB: FormBuilder, private router: Router) { 
    this.checkuserForm = this.formB.group({
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

  checkUser(userdata: any){
    
    this.userService.checkLogIn(userdata.username).subscribe(res => {
      
      this.usertoCheck = res;

      if(this.usertoCheck == null){
        this.error = 'Usuario no registrado';

      }else if (this.usertoCheck.contraseña == userdata.password){
        console.log('Ingresando')
        this.userService.setUserLogged(this.usertoCheck);
        this.router.navigate(['/user-home']);

      }else{
        this.error = 'Contraseña incorrecta';
      }

    })
    
  }

}
