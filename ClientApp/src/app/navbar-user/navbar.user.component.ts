import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar.user.component.html',
  styleUrls: ['./navbar.user.component.css']
})
export class NavMenuUser {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
