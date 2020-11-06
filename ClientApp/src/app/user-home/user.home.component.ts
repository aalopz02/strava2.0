import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user.home.component.html',
  styleUrls: ['./user.home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged;
    console.log(this.user);
  }

}
