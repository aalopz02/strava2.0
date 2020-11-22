import { Component } from '@angular/core';
/**
 * Component
 */
@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar.user.component.html',
  styleUrls: ['./navbar.user.component.css']
})
// Componet del nav menu de usuario
export class NavMenuUser {
  isExpanded = false;
/**
 * Collapses nav menu user
 */
collapse() {
    this.isExpanded = false;
  }
/**
 * Toggles nav menu user
 */
toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
