import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl: string = 'https://localhost:4300/api/Usuario'
  userLogged: any = [];

  constructor(private http: HttpClient) { }

  setUserLogged(user: any){
    this.userLogged = user;
  }


  POSTUser(user: User){

    const params = new HttpParams()
    .set('nombreusuario', user.username)
    .set('password', user.password)
    .set('fname', user.fname)
    .set('mname', user.mname)
    .set('lname', user.lname)
    .set('fechaNacimiento', user.birthday.toString())
    .set('nacionalidad', user.nationality);


    this.http.post(this.BaseUrl +'?' + params.toString(), null).subscribe(data => {
      console.log(data);
    })

  }

  checkLogIn(username: string){
    return this.http.get<any>(this.BaseUrl+'/'+username)
  }

}

