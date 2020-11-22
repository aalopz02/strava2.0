import { Component } from '@angular/core';
/**
 * Component
 */
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
// Component del menu de nax
export class NavMenuComponent {
  isExpanded = false;

  /**
   * Collapses nav menu component
   */
  collapse() {
    this.isExpanded = false;
  }
/**
 * Toggles nav menu component
 */
toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
