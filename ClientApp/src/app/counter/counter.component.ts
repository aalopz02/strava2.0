import { Component } from '@angular/core';
/**
 * Component
 */
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
/**
 * Counter component
 */
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
