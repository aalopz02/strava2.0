import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) {
    
   }

  ngOnInit() {
  }

  checkLogin(nombreusuario: string, password: string){

    this.usuarioService.LogIn(nombreusuario, password).subscribe(res => {
      if(res == true){
        this.usuarioService.SetUsername(nombreusuario);
        this.goToHome(nombreusuario);
      }else{
        console.log('Error de ingreso. Verifique su nombre de usuario o contraseña')
      }
    })
  }

  goToHome(nombreusuario: string){
    this.router.navigate(['/index', nombreusuario]);
  }

}
