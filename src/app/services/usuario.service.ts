import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../interfaces/usuario-login';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BaseUrl: string = 'https://localhost:4300/api/Usuario';
  username: string;

  constructor(private http: HttpClient) {
    
  }

  SetUsername(username: string){
    this.username = username;
  }

  LogIn(nombreusuario: string, password: string)
  {
    const route = '/CheckUsuario';
    const data = {
      nombreusuario: nombreusuario,
      contraseña: password
    }
    console.log(data);
    return this.http.post(this.BaseUrl + route, data)

  }

  getUsuario(){

    return this.http.get<Usuario>(this.BaseUrl + '/' + this.username)

  }

}
