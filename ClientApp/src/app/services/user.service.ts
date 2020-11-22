import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http'
import { stringify } from 'querystring';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio de usuario
export class UserService {

  BaseUrl: string = 'https://localhost:44379/api/Usuario'
  urlSeguidores: string = 'https://localhost:44379/api/Seguidores'
  userLogged: any = [];
  url2 : string  = 'https://localhost:44379/api/Actividad';

  /**
   * Creates an instance of user service.
   * @param http 
   */
  constructor(private http: HttpClient) { }

/**
 * Deja de seguir a usuario
 * @param usarioaseguir 
 * @param seguidor 
 */
deleteseguir(usarioaseguir: any, seguidor: any) {
    const params = new HttpParams()
    .set('usuarioaseguir', usarioaseguir)
    .set('usuario', seguidor);
    console.log(params.toString());
    this.http.delete(this.urlSeguidores +'?' + params.toString()).subscribe()
  }

  /**
   * Sets user logged
   * @param user 
   */
  setUserLogged(user: any){
    this.userLogged = user;
  }
/**
 * Postusers user service
 * @param user a postear
 * @param img de usuario
 */
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
/**
 * Modificar usuario
 * @param user a modificar
 * @param userold viejo user
 * @param img 
 */
modifyUser(user: User, userold : User, img : string | ArrayBuffer){
    const params = new HttpParams()
    .set('nombreusuario', userold["nombreusuario"])
    .set('password', user.password)
    .set('fname', user.fname)
    .set('mname', user.mname)
    .set('lname', user.lname)
    .set('nacionalidad', user.nationality);
    console.log(user);
    console.log(userold);
    if (img == null){
      img = "null";
    }
    console.log({'file': img.toString()});
    this.http.patch(this.BaseUrl +'?' + params.toString(),{'file': img.toString()}).subscribe(data => {
      console.log(data);
    })
    
  }
/**
 * Checks log in
 * @param username 
 * @returns  
 */
checkLogIn(username: string){
    return this.http.get<any>(this.BaseUrl+'/'+username)
  }
/**
 * Gets all usuarios
 * @param busqueda parametro para buscar usuario
 * @param usuario que busca
 * @returns  usuarios buscados
 */
getAll(busqueda : string, usuario : string){
    console.log(busqueda["busqueda"]);
    console.log(usuario);
    const params = new HttpParams()
    .set('busqueda', busqueda["busqueda"])
    .set('usuario', usuario["nombreusuario"]);
    return this.http.get<any>(this.BaseUrl+"?" + params)
  }
/**
 * Seguir usuario
 * @param usuarioaseguir 
 * @param usuario 
 */
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

