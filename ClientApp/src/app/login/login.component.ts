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

  checkuserForm: FormGroup;
  usertoCheck: any = [];

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
        console.log('Usuario no registrado')

      }else if (this.usertoCheck.contraseña == userdata.password){
        
        console.log('Ingresando')

        this.userService.setUserLogged(this.usertoCheck);
        this.router.navigate(['/home', this.usertoCheck.nombreusuario]);

      }else{
        console.log('Contraseña incorrecta')
      }
    })
    
  }

}
