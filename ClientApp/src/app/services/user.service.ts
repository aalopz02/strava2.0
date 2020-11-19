import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http'
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl: string = 'https://localhost:44379/api/Usuario'
  urlSeguidores: string = 'https://localhost:44379/api/Seguidores'
  userLogged: any = [];
  url2 : string  = 'https://localhost:44379/api/Actividad';

  constructor(private http: HttpClient) { }

  setUserLogged(user: any){
    this.userLogged = user;
  }

  POSTUser(user: User, img : string | ArrayBuffer){

    const params = new HttpParams()
    .set('nombreusuario', user.username)
    .set('password', user.password)
    .set('fname', user.fname)
    .set('mname', user.mname)
    .set('lname', user.lname)
    .set('fechaNacimiento', user.birthday.toString())
    .set('nacionalidad', user.nationality);
    console.log({'file': img.toString()});
    this.http.post(this.BaseUrl +'?' + params.toString(),{'file': img.toString()}).subscribe(data => {
      console.log(data);
    })

  }

  checkLogIn(username: string){
    return this.http.get<any>(this.BaseUrl+'/'+username)
  }

  getAll(busqueda : string, usuario : string){
    console.log(busqueda["busqueda"]);
    console.log(usuario);
    const params = new HttpParams()
    .set('busqueda', busqueda["busqueda"])
    .set('usuario', usuario["nombreusuario"]);
    return this.http.get<any>(this.BaseUrl+"?" + params)
  }

  seguirUsuario(usuarioaseguir : string, usuario : string){
    const params = new HttpParams()
    .set('usuarioaseguir', usuarioaseguir)
    .set('usuario', usuario);
    console.log(params.toString());
    this.http.post(this.urlSeguidores +'?' + params.toString(), null).subscribe(data => {
      console.log(data);
    })

  }
}

