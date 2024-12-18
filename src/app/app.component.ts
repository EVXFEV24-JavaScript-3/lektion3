import { Component } from '@angular/core';
import { Size } from './exercises/one/one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lektion3';

  small: Size = Size.Small;
  medium: Size = Size.Medium;
  large: Size = Size.Large;

  counter: number = 0;

  increment(amount: number): void {
    this.counter += amount;
  }
}
