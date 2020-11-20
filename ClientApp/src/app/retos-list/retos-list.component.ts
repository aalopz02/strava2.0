import { Component, OnInit } from '@angular/core';
import { RetosCreateServService } from './../services/retos-create-serv.service';
import { RetosDelServService } from './../services/retos-del-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retos-list',
  templateUrl: './retos-list.component.html',
  styleUrls: ['./retos-list.component.css']
})
export class RetosListComponent implements OnInit {

  retosdisponibles = [];
  constructor(private createService: RetosCreateServService,private delService: RetosDelServService, private router: Router) { }

  ngOnInit(): void {
    this.createService.getAll().subscribe(data =>{
      this.retosdisponibles=data;
      console.log(data);
    });
  }

  delete(nombreReto:string){
    this.delService.delete(nombreReto);
  }

  modify(nombreReto:string){
    this.router.navigateByUrl('/modificar-retos',{ state: { example: nombreReto } });
  }

}
