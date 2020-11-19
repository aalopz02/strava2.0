import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UserActivityService } from '../services/user-activity.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  userdata: Usuario = new Usuario();
  race: boolean = false;
  itemSelect: boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router, private activityService: UserActivityService) { }

  ngOnInit() {
    this.usuarioService.getUsuario().subscribe(res =>
      {
        this.userdata = res;
      })
  }

  startActivity(){
    this.router.navigate(['/start']);
  }

  updateRace(){
    this.race = !this.race;
    this.activityService.isRace = this.race;
    

  }

  onSelectActivity(selectedValue: any){
    console.log(selectedValue.detail.value);
    this.activityService.setActivity(selectedValue.detail.value);
  }

}
